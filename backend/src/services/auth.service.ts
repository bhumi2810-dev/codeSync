import { prisma } from "../lib/prisma";
import { hashPassword } from "../utils/password";
import { generateToken } from "../lib/jwt";
import { SignupInput } from "../validators/auth.validator";
import { hashPassword, comparePassword } from "../utils/password";



export async function signupUser(input: SignupInput) {
  const existingUser = await prisma.user.findUnique({
    where: { email: input.email },
  });

  if (existingUser) {
    throw new Error("Email already registered");
  }

  const passwordHash = await hashPassword(input.password);

  const user = await prisma.user.create({
    data: {
      name: input.name,
      email: input.email,
      passwordHash,
    },
  });

  const token = generateToken({ userId: user.id, email: user.email });

  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
    token,
  };
}


import { LoginInput } from "../validators/auth.validator";

export async function loginUser(input: LoginInput) {
  const user = await prisma.user.findUnique({
    where: { email: input.email },
  });

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isValid = await comparePassword(input.password, user.passwordHash);

  if (!isValid) {
    throw new Error("Invalid email or password");
  }

  const token = generateToken({ userId: user.id, email: user.email });

  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
    token,
  };
}



// Security note: Error message dono cases mein (user na mile ya password galat ho) same rakha hai —
//  "Invalid email or password" — taaki attacker ko pata na chale ki email exist karta hai ya nahi (enumeration attack se bachne ke liye).


