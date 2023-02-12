import ChatInput from "./ChatInput";
import HeadMessage from "./HeadMessage";
import NormalMessage from "./NormalMessage";

export default function Chat({
  messages = [],
  chatName,
  onMessageSend = () => {},
}) {
  return (
    <div className="bg-zinc-700 flex-grow flex flex-col">
      <div className="flex-grow flex flex-col justify-end">
        {messages.map((message, index) => {
          if (index === 0 || message.sender !== messages[index - 1].sender)
            return <HeadMessage key={message._id} message={message} />;

          return <NormalMessage key={message._id} message={message} />;
        })}
      </div>
      <ChatInput chatName={chatName} onMessageSend={onMessageSend} />
    </div>
  );
}
