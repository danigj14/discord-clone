import { faBellSlash, faCircleQuestion, faComments, faHashtag, faInbox, faMagnifyingGlass, faThumbTack, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const iconButtonsClassName =
  "h-5 text-zinc-300 hover:text-zinc-100 cursor-pointer";

export default function ChatHeader({ name }) {
  return (
    <div className="px-4 py-4 border-b-2 border-zinc-800 border-opacity-50 flex h-14">
      <div className="flex-grow flex items-center gap-2 text-zinc-100 font-bold text-sm select-none">
        <FontAwesomeIcon className="h-5 text-zinc-400" icon={faHashtag} />
        {name}
      </div>
      <div className="flex gap-4 items-center">
        <FontAwesomeIcon className={iconButtonsClassName} icon={faComments} />
        <FontAwesomeIcon className={iconButtonsClassName} icon={faBellSlash} />
        <FontAwesomeIcon className={iconButtonsClassName} icon={faThumbTack} />
        <FontAwesomeIcon className={iconButtonsClassName} icon={faUserGroup} />
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
        <FontAwesomeIcon className={iconButtonsClassName} icon={faInbox} />
        <FontAwesomeIcon
          className={iconButtonsClassName}
          icon={faCircleQuestion}
        />
      </div>
    </div>
  );
}
