import express from "express";
import { register, verifyOTP, login, verifyToken, profile } from "../controllers/authController.js";
// CORRECTED: Using { authLimiter } to match the named export
import { authLimiter } from "../middlewares/rateLimiter.js"; 
import { requireAuth } from "../middlewares/auth.js";
import passport from "../config/passport.js";
import jwt from "jsonwebtoken";

const router = express.Router();

// Apply authLimiter to each sensitive route:

router.post("/register", authLimiter, register); 

router.post("/verify-otp", authLimiter, verifyOTP); 

router.post("/login", authLimiter, login); 

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
      const redirectUrl = (process.env.FRONTEND_ORIGIN || "http://localhost:5173") + `/login?token=${encodeURIComponent(token)}`;
      return res.redirect(redirectUrl);
    } catch (err) {
      return res.redirect((process.env.FRONTEND_ORIGIN || "http://localhost:5173") + "/login?error=server");
    }
  }
);

export default router;