import express from "express";
import { register, verifyOTP, login } from "../controllers/authController.js";
// CORRECTED: Using { authLimiter } to match the named export
import { authLimiter } from "../middlewares/rateLimiter.js"; 

const router = express.Router();

// Apply authLimiter to each sensitive route:

router.post("/register", authLimiter, register); 

router.post("/verify-otp", authLimiter, verifyOTP); 

router.post("/login", authLimiter, login); 

export default router;