import ChatHeader from "./ChatHeader";
import ChatInput from "../../features/chat/components/ChatInput";
import HeadMessage from "../../features/chat/components/HeadMessage";
import NormalMessage from "./message/NormalMessage";

export default function ServerChannelChat({ channelName, messages = [] }) {
  return (
    <div className="bg-zinc-700 flex-grow flex flex-col">
      <ChatHeader channelName={channelName} />
      <div className="flex-grow flex flex-col justify-end">
        {messages.map((message, index) => {
          if (index === 0 || message.userId !== messages[index - 1].userId)
            return <HeadMessage key={message.id} message={message} />;

          return <NormalMessage key={message.id} message={message} />;
        })}
      </div>
      <ChatInput channelName={channelName} />
    </div>
  );
}
