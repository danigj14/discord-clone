export default async function handleResponse<T>(response: Response) : Promise<T> {
  const data = await response.json();

  if (response.ok) return data as T;

  throw data;
}
