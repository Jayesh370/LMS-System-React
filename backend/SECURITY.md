# Security Implementation Guide

## Overview
This document outlines the security measures implemented in the LMS backend authentication system.

## Security Features Implemented

### 1. Input Validation
- **Package**: `express-validator`
- **Location**: `middlewares/validation.js`
- **Features**:
  - Email format validation and normalization
  - Password strength requirements (min 8 chars, uppercase, lowercase, number, special char)
  - Phone number format validation
  - Name validation (letters and spaces only)
  - XSS prevention through input sanitization

### 2. Rate Limiting
- **Package**: `express-rate-limit`
- **Location**: `middlewares/rateLimiter.js`
- **Configuration**:
  - Auth endpoints: 5 requests per 15 minutes per IP
  - General API: 100 requests per 15 minutes per IP
- **Prevents**: Brute force attacks, DDoS

### 3. Account Lockout Mechanism
- **Location**: `controllers/authController.js`
- **Features**:
  - **OTP Verification**: 5 failed attempts → 30-minute lockout
  - **Login**: 5 failed attempts → 30-minute lockout
  - Attempt counter resets on successful authentication
  - Clear feedback on remaining attempts

### 4. Timing Attack Prevention
- **Package**: Native `crypto.timingSafeEqual`
- **Location**: `utils/securityHelpers.js`
- **Implementation**: Constant-time string comparison for OTP verification
- **Prevents**: Attackers from deducing correct OTP through timing analysis

### 5. Security Headers
- **Package**: `helmet`
- **Location**: `server.js`
- **Headers Configured**:
  - Content Security Policy (CSP)
  - HTTP Strict Transport Security (HSTS)
  - X-Content-Type-Options
  - X-Frame-Options
  - X-XSS-Protection

### 6. Secure Session Management
- **Package**: `express-session`
- **Location**: `server.js`
- **Configuration**:
  - `httpOnly: true` - Prevents JavaScript access to cookies
  - `secure: true` (production) - HTTPS only
  - `sameSite: 'lax'` - CSRF protection
  - Custom session name (not default 'connect.sid')
  - 24-hour expiration

### 7. OAuth Token Security
- **Location**: `routes/authRoutes.js`
- **Fix**: JWT tokens sent via httpOnly cookies instead of URL parameters
- **Prevents**: Token exposure in browser history, server logs, referrer headers

### 8. Password Security
- **Package**: `bcrypt`
- **Configuration**: 10 salt rounds
- **Requirements**:
  - Minimum 8 characters
  - At least one uppercase letter
  - At least one lowercase letter
  - At least one number
  - At least one special character (@$!%*?&#)

### 9. NoSQL Injection Prevention
- **Package**: `express-mongo-sanitize`
- **Location**: `server.js`
- **Prevents**: NoSQL injection attacks through request sanitization

### 10. SQL Injection Prevention
- **Method**: Parameterized queries
- **Location**: All database queries in controllers
- **Package**: `mysql2` with prepared statements

## Database Schema Updates

Run the migration script to add security columns:

```bash
mysql -u your_user -p your_database < migrations/add_security_columns.sql
```

### New Columns Added:
- `otp_attempts` - Tracks failed OTP verification attempts
- `otp_locked_until` - Timestamp until account is locked for OTP
- `login_attempts` - Tracks failed login attempts
- `login_locked_until` - Timestamp until account is locked for login

## Environment Variables

### Required Security Variables:
```env
# Generate strong secrets using:
# node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

JWT_SECRET=your_64_character_hex_string
SESSION_SECRET=your_64_character_hex_string
NODE_ENV=production  # Enable production security features
```

## Production Deployment Checklist

### Before Deploying:
- [ ] Set `NODE_ENV=production` in environment variables
- [ ] Generate strong JWT_SECRET (64+ characters)
- [ ] Generate strong SESSION_SECRET (64+ characters)
- [ ] Enable HTTPS/SSL certificate
- [ ] Configure CORS with specific frontend origin (no wildcards)
- [ ] Set up database backups
- [ ] Enable database connection encryption
- [ ] Review and adjust rate limits based on traffic
- [ ] Set up logging and monitoring
- [ ] Configure email service with proper SPF/DKIM records
- [ ] Test all authentication flows in staging environment

### Security Headers in Production:
When `NODE_ENV=production`:
- Session cookies sent only over HTTPS (`secure: true`)
- HSTS header enforces HTTPS
- CSP prevents XSS attacks

## API Security Best Practices

### 1. Authentication Flow
```
Register → Email OTP → Verify OTP → Login → JWT Token
```

### 2. Protected Routes
All protected routes use `requireAuth` middleware:
```javascript
router.get("/profile", requireAuth, profile);
```

### 3. Token Management
- Tokens expire after 24 hours
- Tokens stored in Authorization header: `Bearer <token>`
- OAuth tokens stored in httpOnly cookies

### 4. Error Handling
- Generic error messages to prevent information leakage
- Detailed errors logged server-side only
- No stack traces exposed to clients

## Testing Security

### Test Rate Limiting:
```bash
# Should block after 5 attempts
for i in {1..10}; do
  curl -X POST http://localhost:5000/api/auth/login \
    -H "Content-Type: application/json" \
    -d '{"email":"test@test.com","password":"wrong"}'
done
```

### Test Account Lockout:
1. Attempt login with wrong password 5 times
2. Verify account is locked for 30 minutes
3. Check error message shows remaining time

### Test Input Validation:
```bash
# Should reject weak password
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","password":"weak"}'
```

## Security Monitoring

### Recommended Monitoring:
1. Failed login attempts per IP
2. Account lockout frequency
3. Rate limit violations
4. Unusual authentication patterns
5. Token expiration and refresh rates

### Logging:
- All authentication attempts (success/failure)
- Account lockouts
- Rate limit violations
- Security header violations

## Common Vulnerabilities Addressed

| Vulnerability | Mitigation |
|--------------|------------|
| SQL Injection | Parameterized queries |
| XSS | Input validation, CSP headers, output encoding |
| CSRF | SameSite cookies, CORS configuration |
| Brute Force | Rate limiting, account lockout |
| Timing Attacks | Constant-time comparison |
| Session Hijacking | httpOnly, secure, sameSite cookies |
| Token Exposure | httpOnly cookies for OAuth |
| Weak Passwords | Strong password requirements |
| NoSQL Injection | Input sanitization |
| Information Leakage | Generic error messages |

## Updates and Maintenance

### Regular Security Tasks:
1. Update dependencies monthly: `npm audit fix`
2. Review security advisories: `npm audit`
3. Rotate JWT_SECRET and SESSION_SECRET quarterly
4. Review and update rate limits based on usage
5. Monitor failed authentication attempts
6. Update password requirements as needed
7. Review and update CSP policies
## References

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)
- [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/security/)
