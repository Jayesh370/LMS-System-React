import http from 'http';
import app from './app.js';
import { env } from './config/index.js';
import { logger } from './utils/logger.js';

const port = env.PORT || 5000;

const server = http.createServer(app);

server.listen(port, () => {
  logger.info(`Server running on http://localhost:${port}`);
});
