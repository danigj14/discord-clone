import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChatHeaderMenu from "./ChatHeaderMenu";

export default function ChatHeader({ name }) {
  return (
    <div className="px-4 py-4 border-b-2 border-zinc-800 flex">
      <div className="flex-grow flex items-center gap-2 text-zinc-100 font-bold text-sm select-none">
        <FontAwesomeIcon className="h-5 text-zinc-400" icon={faHashtag} />
        {name}
      </div>
      <ChatHeaderMenu />
    </div>
  );
}
