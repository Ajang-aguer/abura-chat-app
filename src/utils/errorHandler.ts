import { Request, Response, NextFunction } from "express";

export class AppError extends Error {
  constructor(public statusCode: number, public message: string) {
    super(message);
  }
}

export const errorHandler = (
  err: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err instanceof AppError ? err.statusCode : 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({ error: message });
};
