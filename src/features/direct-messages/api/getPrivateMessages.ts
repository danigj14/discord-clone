import handleResponse from "@/api/handleResponse";
import { PrivateMessage } from "@/types";

export default function getPrivateMessages(authToken: string, friendId: string) {
  return fetch(
    `${import.meta.env.VITE_API_URL}/private-messages/users/${friendId}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  ).then(handleResponse<PrivateMessage[]>);
}
