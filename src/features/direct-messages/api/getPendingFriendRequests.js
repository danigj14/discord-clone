export default async function getPendingFriendRequests(authToken) {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/friend-requests`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );

  return response.json();
}
