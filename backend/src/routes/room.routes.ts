import { Router } from "express";
import { create, join } from "../controllers/room.controller";
import { authenticate } from "../middleware/auth.middleware";

const router = Router();

router.post("/", authenticate, create);
router.post("/:roomId/join", authenticate, join);

export default router;


// Note: Dono routes authenticate middleware use karte hain —
//  room create/join karne ke liye login hona zaroori hai