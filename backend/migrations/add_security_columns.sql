-- Migration: Add security columns for OTP and login attempt tracking
-- Run this SQL script on your database to add the required security columns

-- Add OTP attempt tracking columns
ALTER TABLE users 
ADD COLUMN IF NOT EXISTS otp_attempts INT DEFAULT 0,
ADD COLUMN IF NOT EXISTS otp_locked_until DATETIME DEFAULT NULL;

-- Add login attempt tracking columns
ALTER TABLE users 
ADD COLUMN IF NOT EXISTS login_attempts INT DEFAULT 0,
ADD COLUMN IF NOT EXISTS login_locked_until DATETIME DEFAULT NULL;

-- Add index for performance on lockout checks
CREATE INDEX IF NOT EXISTS idx_otp_locked_until ON users(otp_locked_until);
CREATE INDEX IF NOT EXISTS idx_login_locked_until ON users(login_locked_until);

-- Add index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_email ON users(email);
