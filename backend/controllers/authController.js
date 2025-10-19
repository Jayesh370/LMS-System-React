import { db } from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendEmail } from "../utils/sendEMail.js";
import { secureCompare } from "../utils/securityHelpers.js";

const saltRounds = 10;
const MAX_OTP_ATTEMPTS = 5;
const OTP_LOCKOUT_DURATION = 30 * 60 * 1000; // 30 minutes
const MAX_LOGIN_ATTEMPTS = 5;
const LOGIN_LOCKOUT_DURATION = 30 * 60 * 1000; // 30 minutes

// Helper: Generate 6-digit OTP
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

export const register = async (req, res) => {
  const { name, email, phone, password } = req.body;

  try {
    // Check if email already exists
    const [existing] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
    if (existing.length > 0) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Generate OTP and expiry (10 mins)
    const otp = generateOTP();
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000);

    // Insert user with OTP
    const [result] = await db.query(
      "INSERT INTO users (name, email, phone, password, otp, otp_expiry, is_verified) VALUES (?, ?, ?, ?, ?, ?, 0)",
      [name, email, phone, hashedPassword, otp, otpExpiry]
    );

    // Send OTP email
    await sendEmail({
      to: email,
      subject: "Your OTP for Coding Savvy Registration",
      text: `Hi ${name},\n\nYour OTP is: ${otp}. It will expire in 10 minutes.\n\nThanks!`,
    });

    res.status(201).json({
      message: "Registration successful! OTP sent to your email.",
      email, // send email so frontend knows where to verify
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const verifyOTP = async (req, res) => {
  const { email, otp } = req.body;

  try {
    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
    if (rows.length === 0) return res.status(400).json({ message: "User not found" });

    const user = rows[0];
    const now = new Date();

    if (user.is_verified) return res.status(400).json({ message: "User already verified" });

    // Check if account is locked due to too many OTP attempts
    if (user.otp_locked_until && now < new Date(user.otp_locked_until)) {
      const remainingTime = Math.ceil((new Date(user.otp_locked_until) - now) / 60000);
      return res.status(429).json({ 
        message: `Too many failed OTP attempts. Account locked for ${remainingTime} more minutes.` 
      });
    }

    // Check if OTP has expired
    if (!user.otp || now > new Date(user.otp_expiry)) {
      return res.status(400).json({ message: "OTP has expired. Please request a new one." });
    }

    // Use constant-time comparison to prevent timing attacks
    if (!secureCompare(user.otp, otp)) {
      // Increment failed attempts
      const newAttempts = (user.otp_attempts || 0) + 1;
      
      if (newAttempts >= MAX_OTP_ATTEMPTS) {
        // Lock account for 30 minutes
        const lockUntil = new Date(now.getTime() + OTP_LOCKOUT_DURATION);
        await db.query(
          "UPDATE users SET otp_attempts = ?, otp_locked_until = ? WHERE email = ?",
          [newAttempts, lockUntil, email]
        );
        return res.status(429).json({ 
          message: "Too many failed OTP attempts. Account locked for 30 minutes." 
        });
      }
      
      await db.query("UPDATE users SET otp_attempts = ? WHERE email = ?", [newAttempts, email]);
      const remainingAttempts = MAX_OTP_ATTEMPTS - newAttempts;
      return res.status(400).json({ 
        message: `Invalid OTP. ${remainingAttempts} attempt(s) remaining.` 
      });
    }

    // OTP is valid - Mark user as verified and remove OTP data
    await db.query(
      "UPDATE users SET is_verified = 1, otp = NULL, otp_expiry = NULL, otp_attempts = 0, otp_locked_until = NULL WHERE email = ?",
      [email]
    );

    res.json({ message: "User verified successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
    if (rows.length === 0) return res.status(400).json({ message: "Invalid email or password" });

    const user = rows[0];
    const now = new Date();

    // Check if account is locked due to too many login attempts
    if (user.login_locked_until && now < new Date(user.login_locked_until)) {
      const remainingTime = Math.ceil((new Date(user.login_locked_until) - now) / 60000);
      return res.status(429).json({ 
        message: `Too many failed login attempts. Account locked for ${remainingTime} more minutes.` 
      });
    }

    if (user.is_verified === 0) {
      return res.status(401).json({ message: "Please verify your email before logging in." });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      // Increment failed login attempts
      const newAttempts = (user.login_attempts || 0) + 1;
      
      if (newAttempts >= MAX_LOGIN_ATTEMPTS) {
        // Lock account for 30 minutes
        const lockUntil = new Date(now.getTime() + LOGIN_LOCKOUT_DURATION);
        await db.query(
          "UPDATE users SET login_attempts = ?, login_locked_until = ? WHERE email = ?",
          [newAttempts, lockUntil, email]
        );
        return res.status(429).json({ 
          message: "Too many failed login attempts. Account locked for 30 minutes." 
        });
      }
      
      await db.query("UPDATE users SET login_attempts = ? WHERE email = ?", [newAttempts, email]);
      const remainingAttempts = MAX_LOGIN_ATTEMPTS - newAttempts;
      return res.status(400).json({ 
        message: `Invalid email or password. ${remainingAttempts} attempt(s) remaining.` 
      });
    }

    // Successful login - Reset login attempts and lockout
    await db.query(
      "UPDATE users SET login_attempts = 0, login_locked_until = NULL WHERE email = ?",
      [email]
    );

    const { password: _pw, otp, otp_expiry, otp_attempts, otp_locked_until, login_attempts, login_locked_until, ...userWithoutPassword } = user;
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.json({ user: userWithoutPassword, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const verifyToken = async (req, res) => {
  try {
    // If middleware passed token is valid
    return res.json({ valid: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};

export const profile = async (req, res) => {
  try {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ message: "Unauthorized" });

    const [rows] = await db.query("SELECT id, name, email, phone, is_verified, created_at FROM users WHERE id = ?", [userId]);
    if (rows.length === 0) return res.status(404).json({ message: "User not found" });

    return res.json({ user: rows[0] });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};
