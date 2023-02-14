import handleResponse from "./handleResponse";

export default function getUserData(authToken, userId) {
  return fetch(`${import.meta.env.VITE_API_URL}/users/${userId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }).then(handleResponse);
}
