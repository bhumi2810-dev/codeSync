import { Request, Response } from "express";
import { signupSchema } from "../validators/auth.validator";
import { signupUser } from "../services/auth.service";
import { signupSchema, loginSchema } from "../validators/auth.validator";
import { signupUser, loginUser } from "../services/auth.service";

import { AuthRequest } from "../middleware/auth.middleware";
import { prisma } from "../lib/prisma";
export async function signup(req: Request, res: Response) {
  try {
    const parsed = signupSchema.safeParse(req.body);  // frontend se name, email,password recieved
    // safeParse check data valid or not 

    if (!parsed.success) {
      return res.status(400).json({
        success: false,
        errors: parsed.error.flatten().fieldErrors,  // Zod ke validation errors ko simplify english language mein write krna
      });
    }

    const result = await signupUser(parsed.data);

    return res.status(201).json({   //success 201 created response to frontend
      success: true,
      data: result,
    });
  } catch (error: any) {
    if (error.message === "Email already registered") {
      return res.status(409).json({
        success: false,
        message: error.message,
      });
    }

    console.error("Signup error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}



// Design note: Validation errors → 400, duplicate email → 409 (conflict),
//  koi unexpected error → 500.
//  Ye standard HTTP status code practice hai.





// LOGIN

export async function login(req: Request, res: Response) {
  try {
    const parsed = loginSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        success: false,
        errors: parsed.error.flatten().fieldErrors,
      });
    }

    const result = await loginUser(parsed.data);

    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error: any) {
    if (error.message === "Invalid email or password") {
      return res.status(401).json({
        success: false,
        message: error.message,
      });
    }

    console.error("Login error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}


// Design note: Invalid credentials → 401 (unauthorized), which is standard for failed login attempts.



export async function me(req: AuthRequest, res: Response) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user!.userId },
      select: { id: true, name: true, email: true, createdAt: true },
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.error("Me error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

