import ChatHeaderMenu from "./ChatHeaderMenu";
import MessageList from "./MessageList";

const ChatHeader = ({ name }) => {
  return (
    <div className="px-4 py-4 border-b-2 border-zinc-800 flex">
      <div className="flex-grow">{name}</div>
      <ChatHeaderMenu />
    </div>
  );
};

export default ChatHeader;
