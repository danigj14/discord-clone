import { useContext, useMemo } from "react";
import AuthContext from "@/contexts/AuthContext";
import loginRequest from "@/features/auth/api/login";
import registerRequest from "@/features/auth/api/register";
import { decodeToken } from "react-jwt";

export default function useAuth() {
  const {authToken, setAuthToken} = useContext(AuthContext);

  const login = (email: string, password: string) => {
    loginRequest(email, password).then((data) => setAuthToken(data.token));
  };

  const register = (email: string, password: string) => {
    registerRequest(email, password).then((data) => setAuthToken(data.token));
  };

  const logout = () => {
    setAuthToken("");
  };

  const userData = useMemo<{_id: string}>(
    () => decodeToken<{_id: string}>(authToken) || {_id: ""},
    [authToken]
  );

  return { authToken, userData, login, register, logout };
}
