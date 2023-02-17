import DefaultAvatar from "@/components/DefaultAvatar";
import LoadingSpinner from "@/components/LoadingSpinner";
import UserAvatar from "@/components/UserAvatar";
import useUserData from "@/hooks/useUserData";
import { FriendRequest, UserData } from "@/types";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import usePendingFriendRequests from "../hooks/usePendingFriendRequests";

interface FriendRequestListItemProps {
  request: FriendRequest;
}

export default function FriendRequestList() {
  const { pendingFriendRequestsQuery } = usePendingFriendRequests();

  return (
    <ul className="py-2 px-6 flex flex-col divide-y divide-zinc-500">
      {pendingFriendRequestsQuery.isLoading && <LoadingSpinner />}
      {pendingFriendRequestsQuery.isSuccess &&
        pendingFriendRequestsQuery.data.map((request) => (
          <FriendRequestListItem key={request._id} request={request} />
        ))}
    </ul>
  );
}

function FriendRequestListItem({ request }: FriendRequestListItemProps) {
  const userData = useUserData(request.sender);
  const { acceptFriendRequestMutation, declineFriendRequestMutation } =
    usePendingFriendRequests();

  return (
    <li className="py-2 flex items-center gap-4">
      {userData.isLoading || !userData.data?.profilePicture ? (
        <DefaultAvatar />
      ) : (
        <UserAvatar imgUrl={userData.data.profilePicture} />
      )}
      <div className="flex-grow flex flex-col">
        <span className="font-bold text-sm">
          {userData.isSuccess ? userData.data.email : ""}
        </span>
        <span className="text-xs">Incoming Friend Request</span>
      </div>
      <button
        className="text-lg w-8 h-8 bg-zinc-800 text-zinc-400 rounded-full hover:bg-green-500 hover:text-zinc-100 transition-colors"
        type="button"
        aria-label="Accept"
        onClick={() => acceptFriendRequestMutation.mutate(request._id)}
      >
        <FontAwesomeIcon icon={faCheck} />
      </button>
      <button
        className="text-lg w-8 h-8 bg-zinc-800 text-zinc-400 rounded-full hover:bg-red-500 hover:text-zinc-100 transition-colors"
        type="button"
        aria-label="Decline"
        onClick={() => declineFriendRequestMutation.mutate(request._id)}
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </li>
  );
}
