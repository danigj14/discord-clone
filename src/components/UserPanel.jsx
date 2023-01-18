import {
  faMicrophone,
  faGear,
  faMicrophoneSlash,
  faVolumeMute,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";
import IconButton from "./IconButton";

export default function UserPanel() {
  const loggedUser = useContext(UserContext);

  const [microphoneMuted, setMicrophoneMuted] = useState(false);
  const [soundMuted, setSoundMuted] = useState(false);

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
          <div>{loggedUser.tag}</div>
        </div>
      </div>
      <div className="flex">
        <IconButton
          icon={microphoneMuted ? faMicrophoneSlash : faMicrophone}
          ariaLabel="Mute Microphone"
          onClick={() => setMicrophoneMuted(!microphoneMuted)}
        />
        <IconButton
          icon={soundMuted ? faVolumeMute : faVolumeHigh}
          ariaLabel="Mute Sound"
          onClick={() => setSoundMuted(!soundMuted)}
        />
        <IconButton icon={faGear} ariaLabel="Settings" />
      </div>
    </div>
  );
}
