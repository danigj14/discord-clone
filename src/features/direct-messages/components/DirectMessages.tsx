import UserPanel from "@/components/UserPanel";
import { Id } from "@/types";
import { useState } from "react";
import useFriendChatShortcuts from "../hooks/useFriendChatShortcuts";
import { NavigationSelection } from "../types";
import FriendChat from "./FriendChat";
import FriendsSection from "./FriendsSection";
import Navigation from "./Navigation";

export default function DirectMessages() {
  const [selection, setSelection] = useState<NavigationSelection>({
    type: "FRIENDS",
  });

  const { friendChatShortcutsQuery, addFriendChatShortcutMutation } =
    useFriendChatShortcuts();

  const onFriendOpenChatClick = (friendId: Id) => {
    if (!friendChatShortcutsQuery.data?.includes(friendId))
      addFriendChatShortcutMutation.mutate(friendId);
    setSelection({ type: "FRIEND_CHAT", friendId });
  };

  return (
    <>
      <div className="bg-zinc-800 w-64 h-full flex flex-col">
        <Navigation selection={selection} onSelect={setSelection} />
        <UserPanel />
      </div>
      <div className="bg-zinc-700 h-full flex-grow ">
        {selection.type === "FRIENDS" && (
          <FriendsSection onFriendOpenChatClick={onFriendOpenChatClick} />
        )}
        {selection.type === "FRIEND_CHAT" && (
          <FriendChat friendId={selection.friendId} />
        )}
      </div>
    </>
  );
}
