import handleResponse from "@/api/handleResponse";

export default function createFriendChatShortcut(authToken, userId, friendId) {
  return fetch(
    `${import.meta.env.VITE_API_URL}/users/${userId}/friend-chat-shortcuts`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ friendId }),
    }
  ).then(handleResponse);
}
