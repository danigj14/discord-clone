import Chat from "@/features/chat/components/Chat";
import useUserData from "@/hooks/useUserData";
import usePrivateMessages from "../hooks/useFriendMessages";
import FriendChatHeader from "./FriendChatHeader";

export default function FriendChat({ friendId }) {
  const userInfo = useUserData(friendId);
  const { messages, createMessage } = usePrivateMessages(friendId);

  const email = userInfo.success ? userInfo.data.email : "";

  return (
    <div className="h-full flex flex-col">
      <FriendChatHeader email={email} />
      <Chat
        messages={messages}
        chatName={`@${email}`}
        onMessageSend={createMessage}
      />
    </div>
  );
}
