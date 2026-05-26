import { z } from "zod";

export const registerValidation = z.object({
  body: z.object({
    fullName: z.string().min(2).max(50),
    email: z.email(),
    password: z.string().min(6),
  }),
});

export const loginValidation = z.object({
  body: z.object({
    email: z.email(),
    password: z.string().min(6),
  }),
});

export const updateValidation = z.object({
  fullName: z.string().min(3).max(50),
  bio: z.string().max(300).optional(),
});
