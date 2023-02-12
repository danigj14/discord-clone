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

export default function ChatInput({ chatName, onMessageSend = () => {} }) {
  const [message, setMessage] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    onMessageSend(message);
    setMessage("");
  };

  return (
    <div className="m-4 pr-4 flex items-center bg-zinc-600 rounded-lg">
      <button type="button" aria-label="Send File">
        <FontAwesomeIcon
          className="h-5 font-bold px-4 py-3 text-zinc-400 hover:text-zinc-200 cursor-pointer"
          icon={faCirclePlus}
        />
      </button>
      <form className="flex-grow" onSubmit={onSubmit}>
        <input
          type="text"
          className="w-full bg-zinc-600 flex-grow focus:outline-none"
          placeholder={`Message ${chatName}`}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </form>
      <div className="flex gap-4 items-center">
        <button type="button" aria-label="Gift Nitro">
          <FontAwesomeIcon className={iconButtonsClassName} icon={faGift} />
        </button>
        <button type="button" aria-label="Browse GIFs">
          <FontAwesomeIcon className={iconButtonsClassName} icon={faImage} />
        </button>
        <button type="button" aria-label="Browse Stickers">
          <FontAwesomeIcon className={iconButtonsClassName} icon={faFile} />
        </button>
        <button type="button" aria-label="Browse Emojis">
          <FontAwesomeIcon
            className={iconButtonsClassName}
            icon={faFaceSmile}
          />
        </button>
      </div>
    </div>
  );
}
