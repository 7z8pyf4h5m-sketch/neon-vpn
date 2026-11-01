import pg from "pg";
import { env } from "../config/env.js";

const { Pool } = pg;

export const pool = new Pool({
  connectionString: env.DATABASE_URL,
  ssl: env.NODE_ENV === "production"
    ? { rejectUnauthorized: false }
    : false,
});

export async function checkDatabase() {
  const result = await pool.query("SELECT NOW()");
  return result.rows[0];
}

export async function closeDatabase() {
  await pool.end();
}