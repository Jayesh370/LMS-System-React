import { env } from '../config/index.js';

export const errorHandler = (err, req, res, next) => {
  void next;
  const statusCode = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode).json({
    message: err.message || 'Server Error',
    stack: env.NODE_ENV === 'production' ? undefined : err.stack,
  });
};
