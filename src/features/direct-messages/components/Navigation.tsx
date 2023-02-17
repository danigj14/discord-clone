import LoadingSpinner from "@/components/LoadingSpinner";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFriendChatShortcuts from "../hooks/useFriendChatShortcuts";
import { NavigationSelection } from "../types";
import FriendChatShortcutList from "./FriendChatShortcutList";

interface NavigationProps {
  selection: NavigationSelection;
  onSelect: (selection: NavigationSelection) => void;
}

export default function Navigation({
  selection = { type: "FRIENDS" },
  onSelect = () => {},
}: NavigationProps) {
  const { friendChatShortcutsQuery } = useFriendChatShortcuts();

  return (
    <div className="flex flex-col gap-3 flex-grow">
      <div className="p-3 h-14 flex justify-center items-center border-b-2 border-zinc-900 border-opacity-50">
        <button
          className="bg-zinc-900 w-full py-1 px-2 rounded-md text-sm text-zinc-400 text-left"
          type="button"
        >
          Find or start a conversation
        </button>
      </div>
      <div className="px-2 flex flex-col gap-2 ">
        <button
          className={`py-2 px-4 flex items-center ${
            selection.type === "FRIENDS"
              ? "text-zinc-200 bg-zinc-700"
              : "text-zinc-400"
          } rounded-md hover:bg-zinc-700 hover:text-zinc-300 transition-colors`}
          type="button"
          onClick={() => onSelect({ type: "FRIENDS" })}
        >
          <FontAwesomeIcon icon={faUserGroup} />
          <span className="ml-4">Friends</span>
        </button>
        <div className="mt-2 px-2 text-zinc-400 uppercase text-xs">
          Direct Messages
        </div>
        {friendChatShortcutsQuery.isLoading && <LoadingSpinner />}
        {friendChatShortcutsQuery.isSuccess && (
          <FriendChatShortcutList
            shortcuts={friendChatShortcutsQuery.data}
            selectedShortcut={
              selection.type === "FRIEND_CHAT" ? selection.friendId : undefined
            }
            onShortcutClick={(friendId) =>
              onSelect({ type: "FRIEND_CHAT", friendId })
            }
          />
        )}
      </div>
    </div>
  );
}
