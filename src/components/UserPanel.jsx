import useAuth from "@/features/auth/hooks/useAuth";
import useUserData from "@/hooks/useUserData";
import {
  faGear,
  faMicrophone,
  faMicrophoneSlash,
  faSmile,
  faVolumeHigh,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import DefaultAvatar from "./DefaultAvatar";

export default function UserPanel() {
  const { userData } = useAuth();
  const userQuery = useUserData(userData._id);
  const [microphoneMuted, setMicrophoneMuted] = useState(false);
  const [soundMuted, setSoundMuted] = useState(false);

  return (
    <div className="flex gap-1 p-2 bg-zinc-900 bg-opacity-50 items-center">
      <div className="w-3/5 flex text-xs p-1 gap-2 items-center hover:bg-neutral-700 rounded-md transition-all cursor-pointer overflow-hidden">
        <DefaultAvatar />
        <span className="font-bold">
          {userQuery.isSuccess ? userQuery.data.email : ""}
        </span>
      </div>
      <div className="w-2/5 flex">
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

function IconButton({ icon = faSmile, ariaLabel = "", onClick = () => {} }) {
  return (
    <button
      className="p-2 w-8 h-9 hover:bg-neutral-700 transition-all rounded-md fill-zinc-300 flex items-center justify-center"
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  );
}
