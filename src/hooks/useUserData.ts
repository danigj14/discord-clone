import useAuth from "@/features/auth/hooks/useAuth";
import getUserData from "@/api/getUserData";
import { useQuery } from "@tanstack/react-query";

export default function useUserData(userId: string) {
  const { authToken } = useAuth();

  return useQuery(["users", userId], () => getUserData(authToken, userId));
}
