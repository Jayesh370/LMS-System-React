import rateLimit from 'express-rate-limit';

// Define a general rate limit configuration
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again after 15 minutes',
  standardHeaders: true, // Return rate limit info in the headers
  legacyHeaders: false, // Disable X-Rate-Limit-* headers
});

// Define a stricter rate limit for authentication (Login, Register)
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs (to prevent brute-force)
  message: 'Too many failed login/registration attempts. Please try again after 15 minutes.',
  standardHeaders: true,
  legacyHeaders: false,
});

export { apiLimiter, authLimiter };