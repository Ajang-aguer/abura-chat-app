import http from "http";
import app from "./app";
import { setupWebSocket } from "./utils/webSocket";

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

// Setup WebSocket
setupWebSocket(server);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
