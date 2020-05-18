export interface IUser {
  id?: string;
  name?: string;
  email: string;
  password: string;
  photoURL?: string;
  coverURL?: string;
  description?: string;
  location?: string;
  mode?: boolean;
}
