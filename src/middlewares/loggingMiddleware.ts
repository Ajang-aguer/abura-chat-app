import { Request, Response, NextFunction } from "express";
import { logger } from "../utils/logger";

export const loggingMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.info(`[${req.method}] ${req.url}`);
  next();
};
