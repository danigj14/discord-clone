import DefaultAvatar from "@/components/DefaultAvatar";
import UserAvatar from "@/components/UserAvatar";
import useUserData from "@/hooks/useUserData";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FriendRequestList({
  requests = [],
  onRequestAccept = () => {},
  onRequestDecline = () => {},
}) {
  return (
    <ul className="py-2 px-6 flex flex-col divide-y divide-zinc-500">
      {requests.map((request) => (
        <FriendRequestListItem
          key={request._id}
          request={request}
          onAccept={onRequestAccept}
          onDecline={onRequestDecline}
        />
      ))}
    </ul>
  );
}

function FriendRequestListItem({
  request,
  onAccept = () => {},
  onDecline = () => {},
}) {
  const userInfo = useUserData(request.sender);
  return (
    <li className="py-2 flex items-center gap-4">
      {userInfo.isSuccess && userInfo.data.profilePicture ? (
        <UserAvatar imgUrl={userInfo.profilePicture} />
      ) : (
        <DefaultAvatar />
      )}
      <div className="flex-grow flex flex-col">
        <span className="font-bold text-sm">{userInfo.isSuccess ? userInfo.data.email : ""}</span>
        <span className="text-xs">Incoming Friend Request</span>
      </div>
      <button
        className="text-lg w-8 h-8 bg-zinc-800 text-zinc-400 rounded-full hover:bg-green-500 hover:text-zinc-100 transition-colors"
        type="button"
        aria-label="Accept"
        onClick={() => onAccept(request._id)}
      >
        <FontAwesomeIcon icon={faCheck} />
      </button>
      <button
        className="text-lg w-8 h-8 bg-zinc-800 text-zinc-400 rounded-full hover:bg-red-500 hover:text-zinc-100 transition-colors"
        type="button"
        aria-label="Decline"
        onClick={() => onDecline(request._id)}
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </li>
  );
}
