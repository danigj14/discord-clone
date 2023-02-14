export default async function handleResponse(response) {
  const data = await response.json();

  if (response.ok) return data;

  throw data;
}
