import { db } from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendEmail } from "../utils/sendEmail.js";

const saltRounds = 10;

// Helper: Generate 6-digit OTP
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

// -------------------- REGISTER --------------------
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

// -------------------- VERIFY OTP --------------------
export const verifyOTP = async (req, res) => {
  const { email, otp } = req.body;

  try {
    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
    if (rows.length === 0) return res.status(400).json({ message: "User not found" });

    const user = rows[0];
    const now = new Date();

    if (user.is_verified) return res.status(400).json({ message: "User already verified" });

    if (user.otp !== otp || now > user.otp_expiry) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    // Mark user as verified and remove OTP
    await db.query("UPDATE users SET is_verified = 1, otp = NULL, otp_expiry = NULL WHERE email = ?", [email]);

    res.json({ message: "User verified successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// -------------------- LOGIN --------------------
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
    if (rows.length === 0) return res.status(400).json({ message: "Invalid email or password" });

    const user = rows[0];

    if (user.is_verified === 0) {
      return res.status(401).json({ message: "Please verify your email before logging in." });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: "Invalid email or password" });

    const { password: _pw, ...userWithoutPassword } = user;
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.json({ user: userWithoutPassword, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
