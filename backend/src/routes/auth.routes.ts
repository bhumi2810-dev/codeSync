import { Router } from "express";
import { signup } from "../controllers/auth.controller";
import { signup, login } from "../controllers/auth.controller";
import { signup, login, me } from "../controllers/auth.controller";
import { authenticate } from "../middleware/auth.middleware";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/me", authenticate, me);

export default router;


// req aaegi then 
// Route identify - kis controller ko req bhejni hai
// response to fontend