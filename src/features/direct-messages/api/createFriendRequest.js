import handleResponse from "@/api/handleResponse";

export default function createFriendRequest(authToken, email) {
  return fetch(`${import.meta.env.VITE_API_URL}/friend-requests`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  }).then(handleResponse);
}
