import helmet from "helmet";
import cors from "cors";
import { Application } from "express";

interface SecurityMiddleware {
  (app: Application): void;
}

export const securityMiddleware: SecurityMiddleware = (app) => {
  app.use(helmet());
  app.use(cors({ origin: process.env.CLIENT_URL || "*" }));
};
