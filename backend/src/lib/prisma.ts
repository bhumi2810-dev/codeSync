import { PrismaClient } from "../../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { env } from "../config/env";

declare global {
  var prisma: PrismaClient | undefined;
}// telling typescript that prisma ka varName either prismaClient or undefined ho skta hai 
// basically multiple ek naam k na bane 

const adapter = new PrismaPg({ connectionString: env.DATABASE_URL });
// PostgreSQL adapter create kar rahe hain
// DATABASE_URL ke through PostgreSQL se connection establish hoga

export const prisma = global.prisma || new PrismaClient({ adapter });
// Agar global PrismaClient already exist karta hai → wahi use karo
// Agar nahi hai → naya PrismaClient create karo
// prisma ko export kar rahe hain taaki service files ise use kar saken

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

// Check kar rahe hain ki application production mein nahi chal rahi
// Development mein Prisma instance ko global variable mein store kar rahe hain
  // Isse baar-baar naye PrismaClient instances create nahi hote