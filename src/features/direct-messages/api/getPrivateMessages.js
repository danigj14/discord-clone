import handleResponse from "@/api/handleResponse";

export default function getPrivateMessages(authToken, friendId) {
  return fetch(
    `${import.meta.env.VITE_API_URL}/private-messages/users/${friendId}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  ).then(handleResponse);
}
