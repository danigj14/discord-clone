import DefaultAvatar from "@/components/DefaultAvatar";
import UserAvatar from "@/components/UserAvatar";
import useUserInfo from "@/hooks/useUserInfo";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FriendRequestList({ requests }) {
  return (
    <ul className="py-2 px-6 flex flex-col divide-y divide-zinc-500">
      {requests.map((request) => (
        <FriendRequestListItem key={request._id} request={request} />
      ))}
    </ul>
  );
}

function FriendRequestListItem({
  request,
  onAccept = () => {},
  onDecline = () => {},
}) {
  const userInfo = useUserInfo(request.sender_id);
  return (
    <div className="py-2 flex items-center gap-4">
      {userInfo?.profilePicture ? (
        <UserAvatar imgUrl={userInfo.profilePicture} />
      ) : (
        <DefaultAvatar />
      )}
      <div className="flex-grow flex flex-col">
        <span className="font-bold text-sm">UserEmail</span>
        <span className="text-xs">Incoming Friend Request</span>
      </div>
      <button
        className="text-xl w-9 h-9 bg-zinc-800 text-zinc-400 rounded-full hover:bg-green-500 hover:text-zinc-100 transition-colors"
        type="button"
        aria-label="Accept"
        onClick={onAccept}
      >
        <FontAwesomeIcon icon={faCheck} />
      </button>
      <button
        className="text-xl w-9 h-9 bg-zinc-800 text-zinc-400 rounded-full hover:bg-red-500 hover:text-zinc-100 transition-colors"
        type="button"
        aria-label="Decline"
        onClick={onDecline}
      >
        <FontAwesomeIcon icon={faX} />
      </button>
    </div>
  );
}
