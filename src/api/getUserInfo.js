export default async function getUserInfo(authToken, userId) {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/users/${userId}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );

  return response.json();
}
