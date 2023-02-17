import handleResponse from "@/api/handleResponse";
import { UserLoginResult } from "@/types";

export default function register(email: string, password: string) {
  return fetch(`${import.meta.env.VITE_API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  }).then(handleResponse<UserLoginResult>);
}
