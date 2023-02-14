import handleResponse from "@/api/handleResponse";

export default function getPendingFriendRequests(authToken) {
  return fetch(`${import.meta.env.VITE_API_URL}/friend-requests`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }).then(handleResponse);
}
