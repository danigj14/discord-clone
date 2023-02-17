import handleResponse from "@/api/handleResponse";
import { FriendRequest, Id, UserData } from "@/types";

export default function getPendingFriendRequests(authToken: string) {
  return fetch(`${import.meta.env.VITE_API_URL}/friend-requests`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }).then(handleResponse<FriendRequest[]>);
}
