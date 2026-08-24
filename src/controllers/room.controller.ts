import { Response } from "express";
import { AuthRequest } from "../middleware/auth.middleware";
import { createRoomSchema, joinRoomSchema } from "../validators/room.validator";
import { createRoom, joinRoom } from "../services/room.service";

export async function create(req: AuthRequest, res: Response) {
  try {
    const parsed = createRoomSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        success: false,
        errors: parsed.error.flatten().fieldErrors,
      });
    }

    const room = await createRoom(parsed.data, req.user!.userId);

    return res.status(201).json({
      success: true,
      data: room,
    });
  } catch (error) {
    console.error("Create room error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

export async function join(req: AuthRequest, res: Response) {
  try {
    const parsed = joinRoomSchema.safeParse(req.params);

    if (!parsed.success) {
      return res.status(400).json({
        success: false,
        errors: parsed.error.flatten().fieldErrors,
      });
    }

    const membership = await joinRoom(parsed.data.roomId, req.user!.userId);

    return res.status(200).json({
      success: true,
      data: membership,
    });
  } catch (error: any) {
    if (
      error.message === "Room not found" ||
      error.message === "You are already a member of this room"
    ) {
      return res.status(409).json({
        success: false,
        message: error.message,
      });
    }

    console.error("Join room error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

// Design note: join function mein req.params validate kiya (URL se roomId aayega, body se nahi) — route banate waqt ye clear ho jayega.

