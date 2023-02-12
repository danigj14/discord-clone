export default async function getPrivateMessages(authToken, friendId) {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/private-messages/users/${friendId}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );

  return response.json();
}
