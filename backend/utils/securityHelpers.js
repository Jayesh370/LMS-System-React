import crypto from 'crypto';

/**
 * Constant-time string comparison to prevent timing attacks
 * @param {string} a - First string
 * @param {string} b - Second string
 * @returns {boolean} - True if strings match
 */
export const secureCompare = (a, b) => {
  if (typeof a !== 'string' || typeof b !== 'string') {
    return false;
  }
  
  // Ensure both strings are same length to prevent timing attacks
  if (a.length !== b.length) {
    return false;
  }
  
  return crypto.timingSafeEqual(
    Buffer.from(a, 'utf8'),
    Buffer.from(b, 'utf8')
  );
};

/**
 * Generate a cryptographically secure random token
 * @param {number} length - Length of token in bytes
 * @returns {string} - Hex encoded token
 */
export const generateSecureToken = (length = 32) => {
  return crypto.randomBytes(length).toString('hex');
};

/**
 * Hash a value using SHA-256
 * @param {string} value - Value to hash
 * @returns {string} - Hashed value
 */
export const hashValue = (value) => {
  return crypto.createHash('sha256').update(value).digest('hex');
};
