import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, SALT_ROUNDS);
}

export async function comparePassword(
  password: string,
  hash: string
): Promise<boolean> {
  return bcrypt.compare(password, hash);
}



// Security note: //SALT_ROUNDS = 10 ek balanced value hai — jitna zyada, utna secure but slow. 
// 10 industry-standard hai (12+ high-security apps ke liye,
// lekin unnecessary slowdown la sakta hai signup/login pe).