import {
  faCompass,
  faPlus,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ServerIcon from "./ServerIcon";

export default function ServerNav({ servers = [], onSelect, selected }) {
  return (
    <ul className="bg-zinc-900 w-20 h-full flex flex-col items-center py-3 gap-3">
      <ServerIcon
        name="Direct Messages"
        onClick={() => onSelect(-1)}
        selected={selected === -1}
      >
        <div
          className={`text-zinc-300 ${
            selected !== -1 ? "bg-zinc-800" : "bg-indigo-700"
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
          selected={selected === server.id}
          onClick={() => onSelect(server.id)}
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
        onClick={() => onSelect(-2)}
        selected={selected === -2}
        showSideMark={false}
      >
        <div
          className={`text-zinc-300 text-xl ${
            selected !== -2 ? "bg-zinc-800" : "bg-emerald-600"
          } h-full w-full flex justify-center items-center hover:bg-emerald-600 transition-all`}
        >
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </ServerIcon>
      <ServerIcon
        name="Explore Public Servers"
        onClick={() => onSelect(-3)}
        selected={selected === -3}
      >
        <div
          className={`text-zinc-300 text-xl ${
            selected !== -3 ? "bg-zinc-800" : "bg-emerald-600"
          } h-full w-full flex justify-center items-center hover:bg-emerald-600 transition-all`}
        >
          <FontAwesomeIcon icon={faCompass} />
        </div>
      </ServerIcon>
    </ul>
  );
}
