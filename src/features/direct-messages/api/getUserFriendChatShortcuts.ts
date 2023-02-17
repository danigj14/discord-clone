import handleResponse from "@/api/handleResponse";
import { Id } from "@/types";

export default function getUserFriendChatShortcuts(authToken: string, userId: string) {
  return fetch(
    `${import.meta.env.VITE_API_URL}/users/${userId}/friend-chat-shortcuts`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  ).then(handleResponse<Id[]>);
}
