import useAuth from "@/features/auth/hooks/useAuth";
import { useQuery } from "react-query";
import getFriends from "../api/getFriends";

export default function useFriends() {
  const { authToken, userData } = useAuth();

  return useQuery(["friends"], () => getFriends(authToken, userData._id));
}
