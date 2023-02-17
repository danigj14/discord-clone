import { createContext } from "react";

interface AuthContext {
  authToken: string;
  setAuthToken: (token: string) => void;
}

const AuthContext = createContext<AuthContext>({
  authToken: "",
  setAuthToken: () => {},
});

export default AuthContext;
