import {
  faMicrophone,
  faHeadphones,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import IconButton from "./IconButton";

export default function UserPanel() {
  return (
    <div className="flex gap-1 p-2 bg-neutral-800 items-center">
      <div className="flex-grow flex text-xs p-1 gap-2 items-center hover:bg-neutral-700 rounded-md transition-all cursor-pointer">
        <img
          src="https://www.leawo.com/blog/wp-content/uploads/2009/12/avatar8.jpg"
          className="w-9 h-9 rounded-full"
          alt="User Avatar"
        />
        <div>
          <div className="font-bold">Username</div>
          <div>#1234</div>
        </div>
      </div>
      <div className="flex">
        <IconButton className="p-2 w-8 h-9" icon={faMicrophone} ariaLabel="Mute Microphone" />
        <IconButton icon={faHeadphones} ariaLabel="Mute Incoming Sound" />
        <IconButton icon={faGear} ariaLabel="Settings" />
      </div>
    </div>
  );
}
