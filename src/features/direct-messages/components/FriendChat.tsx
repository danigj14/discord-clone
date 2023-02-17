import LoadingSpinner from "@/components/LoadingSpinner";
import Chat from "@/features/chat/components/Chat";
import useUserData from "@/hooks/useUserData";
import { Id } from "@/types";
import usePrivateMessages from "../hooks/useFriendMessages";
import FriendChatHeader from "./FriendChatHeader";

interface FriendChatProps {
  friendId: Id;
}

export default function FriendChat({ friendId }: FriendChatProps) {
  const userInfo = useUserData(friendId);
  const { messagesQuery, messagesMutation } = usePrivateMessages(friendId);

  const email = userInfo.isSuccess ? userInfo.data.email : "";

  return (
    <div className="h-full flex flex-col">
      <FriendChatHeader email={email} />
      {messagesQuery.isLoading && <LoadingSpinner />}
      {messagesQuery.isSuccess && (
        <Chat
          messages={messagesQuery.data}
          chatName={`@${email}`}
          onMessageSend={(text) => messagesMutation.mutate(text)}
        />
      )}
    </div>
  );
}
