import useAuth from "@/features/auth/hooks/useAuth";
import { useMutation, useQuery } from "@tanstack/react-query";
import getPendingFriendRequests from "../api/getPendingFriendRequests";
import acceptFriendRequestService from "../api/acceptFriendRequest";
import declineFriendRequestService from "../api/declineFriendRequest";

export default function usePendingFriendRequests() {
  const { authToken } = useAuth();

  const pendingFriendRequestsQuery = useQuery(["friendRequests"], () =>
    getPendingFriendRequests(authToken)
  );

  const acceptFriendRequestMutation = useMutation<any, any, string>({
    mutationFn: (friendRequestId) =>
      acceptFriendRequestService(authToken, friendRequestId),
    onSuccess: () => pendingFriendRequestsQuery.refetch(),
  });

  const declineFriendRequestMutation = useMutation<any, any, string>({
    mutationFn: (friendRequestId) =>
      declineFriendRequestService(authToken, friendRequestId),
    onSuccess: () => pendingFriendRequestsQuery.refetch(),
  });

  return {
    pendingFriendRequestsQuery,
    acceptFriendRequestMutation,
    declineFriendRequestMutation,
  };
}
