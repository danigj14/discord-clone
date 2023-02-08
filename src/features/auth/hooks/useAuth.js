import { useContext, useMemo } from "react";
import AuthContext from "@/contexts/AuthContext";
import loginRequest from "@/features/auth/api/login";
import registerRequest from "@/features/auth/api/register";
import { decodeToken } from "react-jwt";

export default function useAuth() {
  const [authToken, setAuthToken] = useContext(AuthContext);

  const login = (email, password) => {
    loginRequest(email, password).then((token) => setAuthToken(token));
  };

  const register = (email, password) => {
    registerRequest(email, password).then((token) => setAuthToken(token));
  };

  const logout = () => {
    setAuthToken(undefined);
  };

  const userData = useMemo(() => authToken ? decodeToken(authToken) : {}, [authToken]);

  return { authToken, userData, login, register, logout };
}
