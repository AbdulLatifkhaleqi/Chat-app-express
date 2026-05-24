import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { AppError } from "../errors/appError";

export const globalErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let statusCode = 500;
  let message = "Something went wrong";

  if (error instanceof ZodError) {
    statusCode = 400;
    message = error.issues[0].message;
  } else if (error instanceof AppError) {
    statusCode = error.statusCode;
    message = error.message;
  } else if (error.code === 11000) {
    statusCode = 409;
    message = "Duplicate value error";
  }

  res.status(statusCode).json({
    success: false,
    message,
    error,
  });
};
