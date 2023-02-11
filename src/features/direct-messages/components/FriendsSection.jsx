import {
  faInbox,
  faMessage,
  faQuestionCircle,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import useFriends from "../hooks/useFriends";
import usePendingFriendRequests from "../hooks/usePendingFriendRequests";
import AddFriendSection from "./AddFriendSection";
import FriendList from "./FriendList";
import FriendRequestList from "./FriendRequestList";

export default function FriendsSection({ onFriendOpenChatClick = () => {} }) {
  const [selection, setSelection] = useState("ONLINE");
  const { pendingFriendRequests, acceptFriendRequest, declineFriendRequest } =
    usePendingFriendRequests();
  const { friends } = useFriends();

  return (
    <div>
      <div className="flex h-14 py-3 px-4 items-center border-b-2 gap-5 divide-x divide-zinc-100 divide-opacity-20 border-zinc-800 border-opacity-50">
        <div>
          <FontAwesomeIcon className="text-zinc-400" icon={faUserGroup} />
          <span className="ml-2 font-bold">Friends</span>
        </div>
        <div className="flex flex-grow items-center pl-2 gap-5">
          <HeaderButton
            name="Online"
            onClick={() => setSelection("ONLINE")}
            selected={selection === "ONLINE"}
          />
          <HeaderButton
            name="All"
            onClick={() => setSelection("ALL")}
            selected={selection === "ALL"}
          />
          <HeaderButton
            name="Pending"
            alert={pendingFriendRequests.length || ""}
            onClick={() => setSelection("PENDING")}
            selected={selection === "PENDING"}
          />
          <HeaderButton
            name="Blocked"
            onClick={() => setSelection("BLOCKED")}
            selected={selection === "BLOCKED"}
          />
          <AddFriendButton
            onClick={() => setSelection("ADD_FRIEND")}
            selected={selection === "ADD_FRIEND"}
          />
          <button type="button" className="ml-auto" aria-label="New Group DM">
            <FontAwesomeIcon
              className="text-xl text-zinc-300"
              icon={faMessage}
            />
          </button>
        </div>
        <div className="flex items-center pl-5 gap-5 text-xl">
          <button type="button" aria-label="Inbox">
            <FontAwesomeIcon className="ml-auto text-zinc-300" icon={faInbox} />
          </button>
          <button type="button" aria-label="Help">
            <FontAwesomeIcon
              className="ml-auto text-zinc-300"
              icon={faQuestionCircle}
            />
          </button>
        </div>
      </div>
      {selection === "ALL" && (
        <FriendList friends={friends} onOpenChatClick={onFriendOpenChatClick} />
      )}
      {selection === "ADD_FRIEND" && <AddFriendSection />}
      {selection === "PENDING" && (
        <FriendRequestList
          requests={pendingFriendRequests}
          onRequestAccept={acceptFriendRequest}
          onRequestDecline={declineFriendRequest}
        />
      )}
    </div>
  );
}

function HeaderButton({
  name,
  alert = "",
  onClick = () => {},
  selected = false,
}) {
  return (
    <button
      className={`px-3 py-1 text-sm ${
        selected ? "bg-zinc-600 text-zinc-100" : "text-zinc-400"
      } hover:text-zinc-300 hover:bg-zinc-600 hover:bg-opacity-75 rounded-md flex items-center justify-center`}
      type="button"
      onClick={onClick}
    >
      <span>{name}</span>
      {alert ? (
        <span className="ml-2 px-2 text-xs font-bold text-zinc-200 bg-red-500 rounded-full flex justify-center">
          {alert}
        </span>
      ) : null}
    </button>
  );
}

function AddFriendButton({ selected = false, onClick = () => {} }) {
  return (
    <button
      className={`px-3 py-1 text-sm ${
        selected ? "text-green-500" : "bg-green-700"
      } rounded-md`}
      type="button"
      onClick={onClick}
    >
      Add Friend
    </button>
  );
}
