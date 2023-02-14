import getUserData from "@/api/getUserData";
import useAuth from "@/features/auth/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

export default function useUserData(userId) {
  const { authToken } = useAuth();

  return useQuery(["users", userId], () => getUserData(authToken, userId));
}
