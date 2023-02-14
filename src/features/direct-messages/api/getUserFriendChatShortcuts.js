import handleResponse from "@/api/handleResponse";

export default function getUserFriendChatShortcuts(authToken, userId) {
  return fetch(
    `${import.meta.env.VITE_API_URL}/users/${userId}/friend-chat-shortcuts`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  ).then(handleResponse);
}
