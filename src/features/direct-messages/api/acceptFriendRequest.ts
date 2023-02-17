import handleResponse from "@/api/handleResponse";

export default function acceptFriendRequest(authToken: string, requestId: string) {
  return fetch(
    `${import.meta.env.VITE_API_URL}/friend-requests/${requestId}/accept`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  ).then(handleResponse<void>);
}
