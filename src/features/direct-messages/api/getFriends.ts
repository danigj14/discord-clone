import handleResponse from "@/api/handleResponse";
import { Id, UserData } from "@/types";

export default function getFriends(authToken: string, userId: string) {
  return fetch(`${import.meta.env.VITE_API_URL}/users/${userId}/friends`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }).then(handleResponse<UserData[]>);
}
