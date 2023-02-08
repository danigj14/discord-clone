export default function declineFriendRequest(authToken, requestId) {
  return fetch(
    `${import.meta.env.VITE_API_URL}/friend-requests/${requestId}/decline`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
}
