import { WebSocketServer, WebSocket } from "ws";
import { Server } from "http";
import { verifyToken } from "../lib/jwt";
import { URL } from "url";

export interface AuthenticatedSocket extends WebSocket {
  userId?: string;
  roomId?: string;
}

export function setupWebSocketServer(server: Server) {
  const wss = new WebSocketServer({ server });

  wss.on("connection", (ws: AuthenticatedSocket, req) => {
    const url = new URL(req.url || "", `http://${req.headers.host}`);
    const token = url.searchParams.get("token");
    const roomId = url.searchParams.get("roomId");

    if (!token || !roomId) {
      ws.close(4000, "Missing token or roomId");
      return;
    }

    try {
      const decoded = verifyToken(token);
      ws.userId = decoded.userId;
      ws.roomId = roomId;
    } catch (error) {
      ws.close(4001, "Invalid or expired token");
      return;
    }

    console.log(`User ${ws.userId} connected to room ${ws.roomId}`);

    ws.on("close", () => {
      console.log(`User ${ws.userId} disconnected from room ${ws.roomId}`);
    });
  });

  return wss;
}