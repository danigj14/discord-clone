import {
  faCompass,
  faPlus,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ServerIcon from "./server-nav/ServerIcon";

export default function MainNav({
  servers = [],
  onSelection = () => {},
  selection = { type: "DIRECT_MESSAGES" },
}) {
  return (
    <ul className="bg-zinc-900 w-20 h-full flex flex-col items-center py-3 gap-3">
      <ServerIcon
        onClick={() => onSelection({ type: "DIRECT_MESSAGES" })}
        name="Direct Messages"
        selected={selection.type === "DIRECT_MESSAGES"}
      >
        <div
          className={`text-zinc-300 ${
            selection.type !== "DIRECT_MESSAGES"
              ? "bg-zinc-800"
              : "bg-indigo-700"
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
          selected={selection.type === "SERVER" && selection.value === server}
          onClick={() => onSelection({ type: "SERVER", value: server })}
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
        onClick={() => onSelection({ type: "ADD_A_SERVER" })}
        selected={selection.type === "ADD_A_SERVER"}
        showSideMark={false}
      >
        <div
          className={`text-zinc-300 text-xl ${
            selection.type !== "ADD_A_SERVER" ? "bg-zinc-800" : "bg-emerald-600"
          } h-full w-full flex justify-center items-center hover:bg-emerald-600 transition-all`}
        >
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </ServerIcon>
      <ServerIcon
        name="Explore Public Servers"
        onClick={() => onSelection({ type: "EXPLORE" })}
        selected={selection.type === "EXPLORE"}
      >
        <div
          className={`text-zinc-300 text-xl ${
            selection.type !== "EXPLORE" ? "bg-zinc-800" : "bg-emerald-600"
          } h-full w-full flex justify-center items-center hover:bg-emerald-600 transition-all`}
        >
          <FontAwesomeIcon icon={faCompass} />
        </div>
      </ServerIcon>
    </ul>
  );
}
