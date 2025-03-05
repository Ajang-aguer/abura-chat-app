import { Schema, model } from "mongoose";

const messageSchema = new Schema({
  sender: { type: String, required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

export const Message = model("Message", messageSchema);
