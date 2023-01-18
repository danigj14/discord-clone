import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import HeadMessage from "./message/HeadMessage";
import NormalMessage from "./message/NormalMessage";

export default function ServerChannelChat({ channelName, messages = [] }) {
  return (
    <div className="bg-zinc-700 flex-grow flex flex-col">
      <ChatHeader name={channelName} />
      <div className="flex-grow flex flex-col justify-end">
        {messages.map((message, index) => {
          if (index === 0 || message.userId !== messages[index - 1].userId)
            return <HeadMessage content={message.content} />;

          return <NormalMessage key={message.id} content={message.content} />;
        })}
      </div>
      <ChatInput />
    </div>
  );
}
