import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import roomRoutes from "./routes/room.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok", message: "CodeSync server running" });
});

app.use("/api/auth", authRoutes);
app.use("/api/rooms", roomRoutes);


export default app;