import useAuth from "@/features/auth/hooks/useAuth";
import { useEffect, useState } from "react";
import getPendingFriendRequests from "../api/getPendingFriendRequests";

export default function usePendingFriendRequests() {
  const { authToken } = useAuth();
  const [pendingFriendRequests, setPendingFriendRequests] = useState([]);

  useEffect(() => {
    getPendingFriendRequests(authToken).then(setPendingFriendRequests);
  }, []);

  return { pendingFriendRequests };
}
