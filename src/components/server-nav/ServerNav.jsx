import {
  faCompass,
  faPlus,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ServerIcon from "./ServerIcon";

export default function ServerNav({ servers }) {
  const [selection, setSelection] = useState();

  return (
    <div className="bg-zinc-900 w-20 h-full flex flex-col items-center py-3 gap-3">
      <ServerIcon
        name="Direct Messages"
        onClick={() => setSelection("directMessages")}
        selected={selection === "directMessages"}
      >
        <div
          className={`text-zinc-300 ${
            selection !== "directMessages" ? "bg-zinc-800" : "bg-indigo-700"
          } h-full w-full flex justify-center items-center hover:bg-indigo-700 transition-all`}
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
          selected={selection === server}
          onClick={() => setSelection(server)}
        >
          <img
            src={server.imgUrl}
            alt="Server Icon"
            className="h-full object-cover"
          />
        </ServerIcon>
      ))}
      <ServerIcon
        name="Add a Server"
        onClick={() => setSelection("add")}
        selected={selection === "add"}
        showSideMark={false}
      >
        <div
          className={`text-zinc-300 text-xl ${
            selection !== "add" ? "bg-zinc-800" : "bg-emerald-600"
          } h-full w-full flex justify-center items-center hover:bg-emerald-600 transition-all`}
        >
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </ServerIcon>
      <ServerIcon
        name="Explore Public Servers"
        onClick={() => setSelection("explore")}
        selected={selection === "explore"}
      >
        <div
          className={`text-zinc-300 text-xl ${
            selection !== "explore" ? "bg-zinc-800" : "bg-emerald-600"
          } h-full w-full flex justify-center items-center hover:bg-emerald-600 transition-all`}
        >
          <FontAwesomeIcon icon={faCompass} />
        </div>
      </ServerIcon>
    </div>
  );
}
