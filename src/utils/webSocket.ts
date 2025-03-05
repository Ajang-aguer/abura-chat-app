import { WebSocketServer } from "ws";
import { Message } from "../models/message.model";
import {
  addClient,
  broadcastNotification,
} from "../services/notificationService";

export const setupWebSocket = (server: any) => {
  const wss = new WebSocketServer({ server });

  wss.on("connection", (ws) => {
    console.log("New client connected");
    addClient(ws);

    ws.on("message", async (message) => {
      const { sender, content } = JSON.parse(message.toString());
      const newMessage = new Message({ sender, content });
      await newMessage.save();

      // Broadcast the message to all clients
      wss.clients.forEach((client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ sender, content }));
        }
      });

      // Send a notification
      broadcastNotification(`${sender} sent a new message`);
    });

    ws.on("close", () => {
      console.log("Client disconnected");
    });
  });
};
