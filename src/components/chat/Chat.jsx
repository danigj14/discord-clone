import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import MessageList from "./MessageList";

export default function Chat() {
  return (
    <div className="bg-zinc-700 flex-grow flex flex-col">
      <ChatHeader name="Channel 1" />
      <MessageList />
      <ChatInput />
    </div>
  );
}
