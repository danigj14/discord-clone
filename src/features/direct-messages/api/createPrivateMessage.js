export default function createPrivateMessage(authToken, friendId, text) {
  return fetch(`${import.meta.env.VITE_API_URL}/private-messages/users/${friendId}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  }).then((response) => response.json());
}
