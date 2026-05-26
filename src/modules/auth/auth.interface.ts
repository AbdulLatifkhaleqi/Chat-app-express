export interface IUser {
  name: string;
  email: string;
  password: string;
  bio?: string;
  image?: string;
}

export interface ILoginUser {
  email: string;
  password: string;
}

export interface UpdateProfilePayload {
  fullName: string;
  bio?: string;
}
