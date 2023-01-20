import {
  faBellSlash,
  faCircleQuestion,
  faComments,
  faHashtag,
  faInbox,
  faMagnifyingGlass,
  faThumbTack,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const iconButtonsClassName =
  "h-5 text-zinc-300 hover:text-zinc-100 cursor-pointer";

export default function ChatHeader({ channelName }) {
  return (
    <div className="px-4 py-4 border-b-2 border-zinc-800 border-opacity-50 flex h-14">
      <div className="flex-grow flex items-center gap-2 text-zinc-100 font-bold text-sm select-none">
        <FontAwesomeIcon className="h-5 text-zinc-400" icon={faHashtag} />
        {channelName}
      </div>
      <div className="flex gap-4 items-center">
        <button type="button" aria-label="Threads">
          <FontAwesomeIcon className={iconButtonsClassName} icon={faComments} />
        </button>
        <button type="button" aria-label="Notification Settings">
          <FontAwesomeIcon
            className={iconButtonsClassName}
            icon={faBellSlash}
          />
        </button>
        <button type="button" aria-label="Pinned Messages">
          <FontAwesomeIcon
            className={iconButtonsClassName}
            icon={faThumbTack}
          />
        </button>
        <button type="button" aria-label="Member List">
          <FontAwesomeIcon
            className={iconButtonsClassName}
            icon={faUserGroup}
          />
        </button>
        <div className="bg-zinc-800 px-2 text-xs rounded-md flex items-center cursor-text group">
          <input
            placeholder="Search"
            className="bg-transparent w-28 py-1 flex-grow outline-none focus:w-52 transition-all"
          />
          <FontAwesomeIcon
            className="h-3 px-1 text-zinc-400"
            icon={faMagnifyingGlass}
          />
        </div>
        <button type="button" aria-label="Inbox">
          <FontAwesomeIcon className={iconButtonsClassName} icon={faInbox} />
        </button>
        <button type="button" aria-label="Help">
          <FontAwesomeIcon
            className={iconButtonsClassName}
            icon={faCircleQuestion}
          />
        </button>
      </div>
    </div>
  );
}
