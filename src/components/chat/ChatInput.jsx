import {
  faCirclePlus,
  faFaceSmile,
  faFile,
  faGift,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const iconButtonsClassName =
  "h-5 text-zinc-300 hover:text-zinc-100 cursor-pointer";

export default function ChatInput({ onMessageSent = () => {} }) {
  const [message, setMessage] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    onMessageSent(message);
    setMessage("");
  }

  return (
    <div className="m-4 pr-4 flex items-center bg-zinc-600 rounded-lg">
      <FontAwesomeIcon
        className="h-5 font-bold px-4 py-3 text-zinc-400 hover:text-zinc-200 cursor-pointer"
        icon={faCirclePlus}
      />
      <form className="flex-grow" onSubmit={onSubmit}>
        <input
          type="text"
          className="w-full bg-zinc-600 flex-grow focus:outline-none"
          placeholder="Message #Channel 1"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </form>
      <div className="flex gap-4 items-center">
        <FontAwesomeIcon className={iconButtonsClassName} icon={faGift} />
        <FontAwesomeIcon className={iconButtonsClassName} icon={faImage} />
        <FontAwesomeIcon className={iconButtonsClassName} icon={faFile} />
        <FontAwesomeIcon className={iconButtonsClassName} icon={faFaceSmile} />
      </div>
    </div>
  );
}
