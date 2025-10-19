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

// Helper to build a stable key from IP + selected identifiers (e.g., email)
function buildKey(req, identifiers = []) {
  const parts = [req.ip || ''];
  for (const field of identifiers) {
    let v = '';
    if (req.body && typeof req.body === 'object' && field in (req.body || {})) v = req.body[field] || '';
    else if (req.query && field in (req.query || {})) v = req.query[field] || '';
    else if (req.params && field in (req.params || {})) v = req.params[field] || '';
    parts.push(String(v).toLowerCase());
  }
  return parts.join('|');
}

// Factory to create an auth-focused limiter keyed by IP + identifiers.
// skipSuccessfulRequests ensures only failed attempts contribute to the limit.
function makeAuthLimiter(identifiers = []) {
  return rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5,
    message: 'Too many failed login/registration attempts. Please try again after 15 minutes.',
    standardHeaders: true,
    legacyHeaders: false,
    keyGenerator: (req /*, res*/) => buildKey(req, identifiers),
    skipSuccessfulRequests: true,
  });
}

export { apiLimiter, authLimiter, makeAuthLimiter };