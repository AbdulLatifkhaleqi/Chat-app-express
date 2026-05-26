export interface IUser {
  fullName: string;
  email: string;
  password: string;
  bio?: string;
  image?: string;
  comparePassword(candidatePassword: string): Promise<boolean>;
}
