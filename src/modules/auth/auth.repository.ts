import { User } from "../user/user.model";
import { IUser } from "./auth.interface";

const createUser = (payload: IUser) => {
  return User.create(payload);
};

const findUserByEmail = (email: string) => {
  return User.findOne({ email }).select("+password");
};

const findUserById = async (id: string) => {
  return User.findById(id);
};

const updateUserById = async (id: string, payload: Record<string, unknown>) => {
  return User.findByIdAndUpdate(id, payload, {
    new: true,
  });
};

export const AuthRepository = {
  createUser,
  findUserByEmail,
  updateUserById,
  findUserById,
};
