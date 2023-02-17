import handleResponse from "@/api/handleResponse";
import { PrivateMessage } from "@/types";

export default function createPrivateMessage(authToken: string, friendId: string, text: string) {
  return fetch(
    `${import.meta.env.VITE_API_URL}/private-messages/users/${friendId}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    }
  ).then(handleResponse<PrivateMessage>);
}
