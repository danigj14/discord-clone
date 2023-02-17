import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faAt,
  faCircleQuestion,
  faInbox,
  faMagnifyingGlass,
  faPhoneVolume,
  faThumbTack,
  faUserPlus,
  faVideoCamera,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FriendChatHeaderProps {
  email: string;
}

interface HeaderIconButtonProps {
  icon: IconProp;
  ariaLabel: string;
}

export default function FriendChatHeader({ email }: FriendChatHeaderProps) {
  return (
    <div className="flex h-14 flex-shrink-0 py-3 px-4 items-center border-b-2 gap-5 divide-zinc-100 divide-opacity-20 border-zinc-800 border-opacity-50">
      <div className="flex-grow flex items-center">
        <FontAwesomeIcon className="text-zinc-400 text-lg" icon={faAt} />
        <span className="ml-2 font-bold text-sm">{email}</span>
      </div>
      <div className="flex gap-5 items-center">
        <HeaderIconButton ariaLabel="Start Voice Call" icon={faPhoneVolume} />
        <HeaderIconButton ariaLabel="Start Video Call" icon={faVideoCamera} />
        <HeaderIconButton ariaLabel="Pinned Messages" icon={faThumbTack} />
        <HeaderIconButton ariaLabel="Add Friends to DM" icon={faUserPlus} />
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
        <HeaderIconButton ariaLabel="Inbox" icon={faInbox} />
        <HeaderIconButton ariaLabel="Help" icon={faCircleQuestion} />
      </div>
    </div>
  );
}

function HeaderIconButton({ icon, ariaLabel }: HeaderIconButtonProps) {
  return (
    <button type="button" aria-label={ariaLabel}>
      <FontAwesomeIcon
        className="text-lg text-zinc-300 hover:text-zinc-100 cursor-pointer"
        icon={icon}
      />
    </button>
  );
}
