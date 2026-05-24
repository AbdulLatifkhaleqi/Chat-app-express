import { AuthRepository } from "./auth.repository";
import { ILoginUser, IUser } from "./auth.interface";
import { AppError } from "../../errors/appError";
import { generateToken } from "../../utils/generateToken";

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////
////////////////// register user.
const registerUser = async (payload: IUser) => {
  const existingUser = await AuthRepository.findUserByEmail(payload.email);

  if (existingUser) {
    throw new AppError(401, "User already exists");
  }

  const user = await AuthRepository.createUser(payload);

  const token = generateToken({
    id: user._id,
    email: user.email,
  });

  return {
    token,
    user,
  };
};

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////
////////////////// login user.
const loginUser = async (payload: ILoginUser) => {
  const user = await AuthRepository.findUserByEmail(payload.email);

  if (!user || !(await user.comparePassword(user.password))) {
    throw new AppError(404, "User not found");
  }

  const token = generateToken({
    id: user._id,
    email: user.email,
  });

  return {
    token,
    user,
  };
};

export const AuthService = {
  registerUser,
  loginUser,
};
