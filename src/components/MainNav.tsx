import {
  faCompass,
  faPlus,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Tooltip from "./Tooltip";

interface MainNavSelection {
  type: "DIRECT_MESSAGES" | "ADD_A_SERVER" | "EXPLORE";
}

interface MainNavProps {
  onSelection: (selection: MainNavSelection) => void;
  selection: MainNavSelection;
}

interface MainNavButtonProps {
  name: string;
  selected: boolean;
  onClick: () => void;
  showSideMark?: boolean;
  children: JSX.Element;
}

export default function MainNav({
  //servers = [],
  onSelection = () => {},
  selection = { type: "DIRECT_MESSAGES" },
}: MainNavProps) {
  return (
    <ul className="bg-zinc-900 w-20 h-full flex flex-col items-center py-3 gap-3">
      <MainNavButton
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
      </MainNavButton>
      <div className="w-1/2 h-[1px] bg-zinc-600" />
      {/*servers.map((server) => (
        <MainNavButton
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
        </MainNavButton>
      ))*/}
      <MainNavButton
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
      </MainNavButton>
      <MainNavButton
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
      </MainNavButton>
    </ul>
  );
}

function MainNavButton({
  name,
  selected = false,
  onClick = () => {},
  showSideMark = true,
  children,
}: MainNavButtonProps) {
  const [isHovering, setIsHovering] = useState(false);

  const buttonStyle = () => {
    const base =
      "w-12 h-12 object-cover transition-all cursor-pointer bg-cover bg-center overflow-hidden active:translate-y-1";

    if (selected) return `${base} rounded-2xl`;
    return `${base} rounded-3xl hover:rounded-2xl`;
  };

  const sideMarkStyle = () => {
    const base =
      "absolute left-0 top-1/2 -translate-y-1/2 bg-neutral-100 w-1 rounded-r-full transition-all";

    if (selected) return `${base} h-5/6 opacity-100`;
    if (isHovering) return `${base} h-1/2 opacity-100`;
    return `${base} h-0 opacity-0`;
  };

  const tooltipStyle = () => {
    const base = "left-[100%] ml-2 transition-all";

    if (isHovering) return `${base} visible opacity-100`;
    return `${base} invisible opacity-0`;
  };

  return (
    <li className="w-full flex justify-center relative items-center">
      <button
        className={buttonStyle()}
        type="button"
        aria-label="Select Server"
        onClick={onClick}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {children}
      </button>
      {showSideMark && <div className={sideMarkStyle()} />}
      <Tooltip className={tooltipStyle()} arrowPosition="left">
        {name}
      </Tooltip>
    </li>
  );
}
