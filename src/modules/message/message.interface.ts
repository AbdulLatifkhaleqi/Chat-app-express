import { Types } from "mongoose";
import { IUser } from "../user/user.interface";

export interface IMessage {
  senderId: Types.ObjectId | IUser;
  reseiverId: Types.ObjectId | IUser;
  text?: string;
  image?: string;
  seen: boolean;
}
