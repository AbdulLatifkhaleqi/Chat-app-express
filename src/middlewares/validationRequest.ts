import { ZodSchema } from "zod";

import { Request, Response, NextFunction } from "express";

export const validateRequest =
  (schema: ZodSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    await schema.parseAsync({
      body: req.body,
      params: req.params,
      query: req.query,
    });

    next();
  };
