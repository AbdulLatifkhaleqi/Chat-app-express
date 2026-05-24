import { User } from "../user/user.model";
import { IUser } from "./auth.interface";

const createUser = (payload: IUser) => {
  return User.create(payload);
};

const findUserByEmail = (email: string) => {
  return User.findOne({ email }).select("+password");
};

export const AuthRepository = {
  createUser,
  findUserByEmail,
};
