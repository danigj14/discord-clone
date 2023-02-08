export default function acceptFriendRequest(authToken, requestId) {
  return fetch(
    `${import.meta.env.VITE_API_URL}/friend-requests/${requestId}/accept`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
}
