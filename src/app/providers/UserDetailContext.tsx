import { createContext } from "react";

export interface UserDetail {
  name: string;
  email: string;
  picture: string;
  [key: string]: any;
}

export interface UserDetailContextType {
  user: UserDetail | null;
  setUser: React.Dispatch<React.SetStateAction<UserDetail | null>>;
}

export const UserDetailContext = createContext<UserDetailContextType>({
  user: null,
  setUser: () => {},
});
