import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { AuthService } from "./auth.service";
import { sendResponse } from "../../utils/sendResponse";

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////
////////////////// register user.
const registerUser = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.registerUser(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "User registered successfully",
    data: result.user,
    token: result.token,
  });
});

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////
////////////////// login user.
const loginUser = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.loginUser(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Login successful",
    data: result.user,
    token: result.token,
  });
});

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////
////////////////// login user.
const updateProfile = async (req: any, res: Response) => {
  const userId = req.user.id;

  const updatedUser = await AuthService.updateProfile(
    userId,
    req.body,
    req.file,
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Login successful",
    data: updatedUser,
  });
};

export const AuthController = {
  registerUser,
  loginUser,
  updateProfile,
};
