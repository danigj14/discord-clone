import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ServerIcon from "./ServerIcon";

export default function ServerNav({ servers }) {
  const [selectedServer, setSelectedServer] = useState();

  const directMessagesBackgroundColor =
    selectedServer !== "directMessages" ? "bg-zinc-800" : "bg-indigo-700";

  return (
    <div className="bg-zinc-900 w-20 h-full flex flex-col items-center py-3 gap-3">
      <ServerIcon
        name="Direct Messages"
        onClick={() => setSelectedServer("directMessages")}
        selected={selectedServer === "directMessages"}
      >
        <div
          className={`text-zinc-300 ${directMessagesBackgroundColor} h-full w-full flex justify-center items-center hover:bg-indigo-700 transition-all`}
        >
          <FontAwesomeIcon icon={faUserGroup} />
        </div>
      </ServerIcon>
      <div className="w-1/2 h-[1px] bg-zinc-600" />
      {servers.map((server) => (
        <ServerIcon
          key={server.id}
          name={server.name}
          imgUrl={server.imgUrl}
          selected={selectedServer === server}
          onClick={() => setSelectedServer(server)}
        >
          <img
            src={server.imgUrl}
            alt="Server Icon"
            className="h-full object-cover"
          />
        </ServerIcon>
      ))}
    </div>
  );
}
