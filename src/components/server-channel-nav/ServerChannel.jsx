import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ServerChannel({ name, selected = false }) {
  return (
    <div
      className={`flex border border-zinc-800 text-zinc-400 items-center gap-3 px-2 mx-2 py-2 ${
        selected && "bg-zinc-700"
      } hover:bg-zinc-700 rounded-lg cursor-pointer transition-all group`}
    >
      <FontAwesomeIcon className="h-4 fill-zinc-500" icon={faHashtag} />
      <div
        className={`text-sm ${
          selected && "text-zinc-100"
        } group-hover:text-zinc-200 transition-all`}
      >
        {name}
      </div>
    </div>
  );
}
