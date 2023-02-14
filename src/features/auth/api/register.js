import handleResponse from "@/api/handleResponse";

export default function register(email, password) {
  return fetch(`${import.meta.env.VITE_API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  }).then(handleResponse);
}
