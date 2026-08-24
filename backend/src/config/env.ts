import dotenv from "dotenv";

dotenv.config();

function getEnv(key: string, required = true): string {
  const value = process.env[key];
  if (!value && required) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value || "";
}

export const env = {
  PORT: getEnv("PORT", false) || "5000",
  NODE_ENV: getEnv("NODE_ENV", false) || "development",
  DATABASE_URL: getEnv("DATABASE_URL"),
  JWT_SECRET: getEnv("JWT_SECRET"),
  JWT_EXPIRES_IN: getEnv("JWT_EXPIRES_IN", false) || "7d",
  REDIS_URL: getEnv("REDIS_URL", false) || "redis://localhost:6379",
};