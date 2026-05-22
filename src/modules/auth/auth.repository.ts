import { UserModel } from "../../models/user.model";

export class AuthRepository {
  async findUserByEmail(email: string) {
    return UserModel.findOne({ email });
  }

  async findUserWithPassword(email: string) {
    return UserModel.findOne({ email }).select("+password");
  }

  async createUser(data: { name: string; email: string; password: string }) {
    return UserModel.create(data);
  }
}
