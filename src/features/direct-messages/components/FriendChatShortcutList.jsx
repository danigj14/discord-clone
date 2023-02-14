import DefaultAvatar from "@/components/DefaultAvatar";
import UserAvatar from "@/components/UserAvatar";
import useUserData from "@/hooks/useUserData";

export default function FriendChatShortcutList({
  shortcuts,
  selectedShortcut,
  onShortcutClick = () => {},
}) {
  return (
    <ul className="flex flex-col gap-1">
      {shortcuts.map((shortcut) => (
        <FriendChatShortcutItem
          key={shortcut}
          friendId={shortcut}
          selected={selectedShortcut === shortcut}
          onClick={() => onShortcutClick(shortcut)}
        />
      ))}
    </ul>
  );
}

function FriendChatShortcutItem({
  friendId,
  selected = false,
  onClick = () => {},
}) {
  const friendInfo = useUserData(friendId);

  return (
    <li>
      <button
        className={`py-2 px-2 w-full flex gap-2 items-center ${
          selected ? "text-zinc-200 bg-zinc-600" : "text-zinc-400"
        } hover:text-zinc-300 hover:bg-zinc-700 rounded-md transition-colors`}
        type="button"
        onClick={onClick}
      >
        {friendInfo.isSuccess && friendInfo.data.profilePicture ? (
          <UserAvatar imgUrl={friendInfo.profilePicture} />
        ) : (
          <DefaultAvatar />
        )}
        <div className="flex-grow flex flex-col">
          <span className="font-bold text-sm text-ellipsis text-left">
            {friendInfo.isSuccess ? friendInfo.data.email : ""}
          </span>
        </div>
      </button>
    </li>
  );
}
