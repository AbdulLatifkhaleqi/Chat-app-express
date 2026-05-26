import express from "express";
import { AuthController } from "./auth.controller";
import { validateRequest } from "../../middlewares/validationRequest";

import {
  loginValidation,
  registerValidation,
  updateValidation,
} from "./auth.validation";

import { upload } from "../../middlewares/upload.middleware";

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

router.put(
  "/profile",
  upload.single("image"),
  validateRequest(updateValidation),
  AuthController.updateProfile,
);

export const AuthRoutes = router;
