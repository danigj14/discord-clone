import {
  faGear,
  faMicrophone,
  faMicrophoneSlash,
  faVolumeHigh,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import IconButton from "./IconButton";
import DefaultAvatar from "./DefaultAvatar";

export default function UserPanel() {
  const [microphoneMuted, setMicrophoneMuted] = useState(false);
  const [soundMuted, setSoundMuted] = useState(false);

  return (
    <div className="flex gap-1 p-2 bg-zinc-900 bg-opacity-50 items-center">
      <div className="flex-grow flex text-xs p-1 gap-2 items-center hover:bg-neutral-700 rounded-md transition-all cursor-pointer">
        <DefaultAvatar />
        <div>
          <div className="font-bold">UserEmail</div>
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
