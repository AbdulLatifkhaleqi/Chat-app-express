import express from "express";
import { AuthController } from "./auth.controller";
import { validateRequest } from "../../middlewares/validationRequest";
import { loginValidation, registerValidation } from "./auth.validation";

const router = express.Router();

router.post(
  "/register",
  validateRequest(registerValidation),
  AuthController.registerUser,
);

router.post(
  "/login",
  validateRequest(loginValidation),
  AuthController.loginUser,
);

export const AuthRoutes = router;
