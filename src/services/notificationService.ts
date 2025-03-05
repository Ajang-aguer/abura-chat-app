import { WebSocket } from "ws";

const clients = new Set<WebSocket>();

export const addClient = (ws: WebSocket) => {
  clients.add(ws);
  ws.on("close", () => {
    clients.delete(ws);
  });
};

export const broadcastNotification = (message: string) => {
  clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({ type: "notification", message }));
    }
  });
};
