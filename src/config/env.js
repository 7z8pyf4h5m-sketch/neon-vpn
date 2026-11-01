import "dotenv/config";
import { z } from "zod";

const schema = z.object({
  NODE_ENV: z.enum(["development", "production"]).default("development"),
  PORT: z.coerce.number().default(3000),
  BOT_TOKEN: z.string().min(1),
  DATABASE_URL: z.string().min(1),
  ADMIN_TELEGRAM_ID: z.string().min(1),
  APP_URL: z.string().url(),
  SESSION_SECRET: z.string().min(32),
});

export const env = schema.parse(process.env);