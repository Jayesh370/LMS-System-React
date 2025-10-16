import express from "express";
import { register, verifyOTP, login } from "../controllers/authController.js";
// 1. Import the rate limiter middleware
import authLimiter from "../middlewares/rateLimiter.js"; 

const router = express.Router();

// 2. Apply authLimiter to each sensitive route:

// Line :6
router.post("/register", authLimiter, register); 

// Line :7
router.post("/verify-otp", authLimiter, verifyOTP); 

// Line :8
router.post("/login", authLimiter, login); 

export default router;