import UserPanel from "@/components/UserPanel";
import { useState } from "react";
import useFriendChatShortcuts from "../hooks/useFriendChatShortcuts";
import FriendChat from "./FriendChat";
import FriendsSection from "./FriendsSection";
import Navigation from "./Navigation";

export default function DirectMessages() {
  const [selection, setSelection] = useState({ type: "FRIENDS" });
  const { shortcuts, addShortcut } = useFriendChatShortcuts();

  const onFriendOpenChatClick = (friendId) => {
    if (!shortcuts.includes(friendId)) addShortcut(friendId);
    setSelection({ type: "CHAT", friendId });
  };

  return (
    <>
      <div className="bg-zinc-800 w-64 h-full flex flex-col">
        <Navigation
          selection={selection}
          onSelect={setSelection}
          friendChatShortcuts={shortcuts}
        />
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
