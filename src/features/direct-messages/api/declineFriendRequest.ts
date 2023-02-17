import handleResponse from "@/api/handleResponse";

export default function declineFriendRequest(authToken: string, requestId: string) {
  return fetch(
    `${import.meta.env.VITE_API_URL}/friend-requests/${requestId}/decline`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  ).then(handleResponse<void>);
}
