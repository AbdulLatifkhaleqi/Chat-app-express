import { z } from "zod";

export const registerValidation = z.object({
  body: z.object({
    name: z.string().min(2).max(50),
    email: z.email(),
    password: z.string().min(6),
    bio: z.string().optional(),
    image: z.url().optional(),
  }),
});

export const loginValidation = z.object({
  body: z.object({
    email: z.email(),
    password: z.string().min(6),
  }),
});
