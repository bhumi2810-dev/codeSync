import http from "http";
import { env } from "./config/env";
import app from "./app";
import { setupWebSocketServer } from "./websocket/websocket.server";

const PORT = env.PORT;

const server = http.createServer(app);

setupWebSocketServer(server);

server.listen(PORT, () => {
  console.log(` CodeSync server running on http://localhost:${PORT}`);
});
//  note: Express app ko http.createServer() mein wrap kiya taaki same server instance HTTP requests aur WebSocket upgrade requests dono handle kar sake —
//  ye standard pattern hai jab REST API aur WebSocket dono ek hi port pe chalane hain.