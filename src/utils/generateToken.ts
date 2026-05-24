import jwt, { Secret, SignOptions } from "jsonwebtoken";
import { env } from "../config/env";

export const generateToken = (payload: object): string => {
  const secret: Secret = env.jwtSecret;
  const options: SignOptions = {
    expiresIn: env.jwtExpiresIn as SignOptions["expiresIn"],
  };
  return jwt.sign(payload, secret, options);
};
