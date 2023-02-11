export default function getFriends(authToken, userId) {
  return fetch(`${import.meta.env.VITE_API_URL}/users/${userId}/friends`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }).then((response) => response.json());
}
