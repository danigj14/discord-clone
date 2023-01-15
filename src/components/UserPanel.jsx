import {
  faMicrophone,
  faHeadphones,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import IconButton from "./IconButton";

export default function UserPanel() {
  const loggedUser = useContext(UserContext);

  return (
    <div className="flex gap-1 p-2 bg-zinc-900 bg-opacity-50 items-center">
      <div className="flex-grow flex text-xs p-1 gap-2 items-center hover:bg-neutral-700 rounded-md transition-all cursor-pointer">
        <img
          src={loggedUser.profilePicture}
          className="w-9 h-9 rounded-full"
          alt="User Avatar"
        />
        <div>
          <div className="font-bold">{loggedUser.name}</div>
          <div>#1234</div>
        </div>
      </div>
      <div className="flex">
        <IconButton
          className="p-2 w-8 h-9"
          icon={faMicrophone}
          ariaLabel="Mute Microphone"
        />
        <IconButton icon={faHeadphones} ariaLabel="Mute Incoming Sound" />
        <IconButton icon={faGear} ariaLabel="Settings" />
      </div>
    </div>
  );
}
