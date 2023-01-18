import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import MessageList from "./MessageList";

export default function Chat({ channelName }) {
  return (
    <div className="bg-zinc-700 flex-grow flex flex-col">
      <ChatHeader name={channelName} />
      <MessageList />
      <ChatInput />
    </div>
  );
}
