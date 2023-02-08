import useAuth from "@/features/auth/hooks/useAuth";
import { useEffect, useState } from "react";
import getPendingFriendRequests from "../api/getPendingFriendRequests";
import acceptFriendRequestService from "../api/acceptFriendRequest";
import declineFriendRequestService from "../api/declineFriendRequest";

export default function usePendingFriendRequests() {
  const { authToken } = useAuth();
  const [pendingFriendRequests, setPendingFriendRequests] = useState([]);

  useEffect(() => {
    getPendingFriendRequests(authToken).then(setPendingFriendRequests);
  }, []);

  const acceptFriendRequest = (friendRequestId) => {
    acceptFriendRequestService(authToken, friendRequestId).then(() =>
      setPendingFriendRequests((currentList) =>
        currentList.filter((request) => request._id !== friendRequestId)
      )
    );
  };

  const declineFriendRequest = (friendRequestId) => {
    declineFriendRequestService(authToken, friendRequestId).then(() =>
      setPendingFriendRequests((currentList) =>
        currentList.filter((request) => request._id !== friendRequestId)
      )
    );
  };

  return { pendingFriendRequests, acceptFriendRequest, declineFriendRequest };
}
