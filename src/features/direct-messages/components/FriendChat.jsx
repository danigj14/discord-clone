import Chat from "@/features/chat/components/Chat";
import useUserInfo from "@/hooks/useUserInfo";
import usePrivateMessages from "../hooks/useFriendMessages";
import FriendChatHeader from "./FriendChatHeader";

export default function FriendChat({ friendId }) {
  const userInfo = useUserInfo(friendId);
  const { messages, createMessage } = usePrivateMessages(friendId);

  return (
    <div className="h-full flex flex-col">
      <FriendChatHeader email={userInfo?.email} />
      <Chat
        messages={messages}
        chatName={`@${userInfo?.email}`}
        onMessageSend={createMessage}
      />
    </div>
  );
}
