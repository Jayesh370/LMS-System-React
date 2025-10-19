import { db } from '../config/db.js';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function getCurrentDatabase() {
  const [rows] = await db.query('SELECT DATABASE() AS db');
  return rows[0].db;
}

async function columnExists(schema, table, column) {
  const [rows] = await db.query(
    `SELECT COUNT(*) AS cnt FROM information_schema.columns WHERE table_schema = ? AND table_name = ? AND column_name = ?`,
    [schema, table, column]
  );
  return rows[0].cnt > 0;
}

async function indexExists(schema, table, indexName) {
  const [rows] = await db.query(
    `SELECT COUNT(*) AS cnt FROM information_schema.statistics WHERE table_schema = ? AND table_name = ? AND index_name = ?`,
    [schema, table, indexName]
  );
  return rows[0].cnt > 0;
}

async function addColumnIfMissing(table, columnDef) {
  const dbName = await getCurrentDatabase();
  const [column, definition] = columnDef;
  const exists = await columnExists(dbName, table, column);
  if (!exists) {
    const sql = `ALTER TABLE \`${table}\` ADD COLUMN ${definition}`;
    console.log(`Adding column: ${column} ...`);
    await db.query(sql);
  } else {
    console.log(`Column already exists: ${column}`);
  }
}

async function addIndexIfMissing(table, indexName, column) {
  const dbName = await getCurrentDatabase();
  const exists = await indexExists(dbName, table, indexName);
  if (!exists) {
    const sql = `CREATE INDEX \`${indexName}\` ON \`${table}\`(\`${column}\`)`;
    console.log(`Creating index: ${indexName} ...`);
    await db.query(sql);
  } else {
    console.log(`Index already exists: ${indexName}`);
  }
}

async function runMigration() {
  try {
    console.log('🔄 Running security columns migration...');

    // Ensure required columns exist
    await addColumnIfMissing('users', ['otp_attempts', 'otp_attempts INT DEFAULT 0']);
    await addColumnIfMissing('users', ['otp_locked_until', 'otp_locked_until DATETIME NULL']);
    await addColumnIfMissing('users', ['login_attempts', 'login_attempts INT DEFAULT 0']);
    await addColumnIfMissing('users', ['login_locked_until', 'login_locked_until DATETIME NULL']);

    // Ensure helpful indexes exist
    await addIndexIfMissing('users', 'idx_otp_locked_until', 'otp_locked_until');
    await addIndexIfMissing('users', 'idx_login_locked_until', 'login_locked_until');
    await addIndexIfMissing('users', 'idx_email', 'email');

    console.log('✅ Migration completed successfully!');
    console.log('\nVerified columns:');
    console.log('  - otp_attempts');
    console.log('  - otp_locked_until');
    console.log('  - login_attempts');
    console.log('  - login_locked_until');
    console.log('\nVerified indexes:');
    console.log('  - idx_otp_locked_until');
    console.log('  - idx_login_locked_until');
    console.log('  - idx_email');

    process.exit(0);
  } catch (error) {
    console.error('❌ Migration failed:', error.message);
    process.exit(1);
  }
}

runMigration();
