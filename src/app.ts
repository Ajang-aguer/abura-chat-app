import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./database/db";
import { securityMiddleware } from "./utils/security";
import { apiGateway } from "./utils/apiGateway";
import router from "./routes";
import { errorHandler } from "./utils/errorHandler";
import { apiLimiter } from "./utils/rateLimiter";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
securityMiddleware(app);
app.use(apiLimiter);

// Connect to MongoDB
connectDB();

// API Gateway
app.use("/api", router);

// Error Handling
app.use(errorHandler);

export default app;
