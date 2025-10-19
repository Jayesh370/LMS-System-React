import express from "express";
import { register, verifyOTP, login, verifyToken, profile } from "../controllers/authController.js";
import { authLimiter } from "../middlewares/rateLimiter.js"; 
import { requireAuth } from "../middlewares/auth.js";
import { validateRegistration, validateLogin, validateOTP } from "../middlewares/validation.js";
import passport from "../config/passport.js";
import jwt from "jsonwebtoken";

const router = express.Router();

// Apply authLimiter and validation to each sensitive route:

router.post("/register", authLimiter, validateRegistration, register); 

router.post("/verify-otp", authLimiter, validateOTP, verifyOTP); 

router.post("/login", authLimiter, validateLogin, login); 

// Protected routes
router.get("/verify", requireAuth, verifyToken);
router.get("/profile", requireAuth, profile);

// GitHub OAuth
router.get(
  "/github/login",
  passport.authenticate("github", { scope: ["user:email"] })
);

router.get(
  "/github/callback",
  passport.authenticate("github", { failureRedirect: (process.env.FRONTEND_ORIGIN || "http://localhost:5173") + "/login?error=github" }),
  (req, res) => {
    try {
      const user = req.user;
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1d" });
      
      // SECURITY FIX: Set token in httpOnly cookie instead of URL parameter
      // This prevents token exposure in browser history and logs
      const isProduction = process.env.NODE_ENV === 'production';
      res.cookie('auth_token', token, {
        httpOnly: true,
        secure: isProduction,
        sameSite: 'lax',
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
      });
      
      // Redirect to success page without token in URL
      const redirectUrl = (process.env.FRONTEND_ORIGIN || "http://localhost:5173") + "/login?oauth=success";
      return res.redirect(redirectUrl);
    } catch (err) {
      return res.redirect((process.env.FRONTEND_ORIGIN || "http://localhost:5173") + "/login?error=server");
    }
  }
);

export default router;