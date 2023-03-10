import DefaultAvatar from "@/components/DefaultAvatar";
import LoadingSpinner from "@/components/LoadingSpinner";
import UserAvatar from "@/components/UserAvatar";
import { Id, UserData } from "@/types";
import { faListDots, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFriends from "../hooks/useFriends";

interface FriendListProps {
  onOpenChatClick?: (friendId: Id) => void;
}

interface FriendListItemProps {
  friend: UserData;
  onOpenChatClick: () => void;
}

export default function FriendList({
  onOpenChatClick = () => {},
}: FriendListProps) {
  const friends = useFriends();

  return friends.isSuccess ? (
    <ul className="py-2 px-6 flex flex-col gap-2">
      {friends.data.map((friend) => (
        <FriendListItem
          key={friend._id}
          friend={friend}
          onOpenChatClick={() => onOpenChatClick(friend._id)}
        />
      ))}
    </ul>
  ) : (
    <LoadingSpinner />
  );
}

function FriendListItem({
  friend,
  onOpenChatClick = () => {},
}: FriendListItemProps) {
  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.key === "Enter") {
      onOpenChatClick();
    }
  };

  return (
    <li>
      <div
        className="w-full p-3 flex justify-start items-center gap-4 hover:bg-zinc-600 rounded-xl"
        role="button"
        tabIndex={0}
        onKeyDown={onKeyDown}
        onClick={onOpenChatClick}
      >
        {friend.profilePicture ? (
          <UserAvatar imgUrl={friend.profilePicture} />
        ) : (
          <DefaultAvatar />
        )}
        <div className="flex-grow flex justify-start items-center">
          <span className="font-bold text-sm">{friend.email}</span>
        </div>
        <button
          className="text-sm w-8 h-8 bg-zinc-800 text-zinc-400 rounded-full hover:text-zinc-100 transition-colors"
          type="button"
          aria-label="Accept"
        >
          <FontAwesomeIcon icon={faMessage} />
        </button>
        <button
          className="text-sm w-8 h-8 bg-zinc-800 text-zinc-400 rounded-full hover:text-zinc-100 transition-colors"
          type="button"
          aria-label="Decline"
        >
          <FontAwesomeIcon icon={faListDots} />
        </button>
      </div>
    </li>
  );
}
