import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Channel({ name }) {
  return (
    <div className="flex text-zinc-400 items-center gap-3 px-2 mx-3 py-2 hover:bg-zinc-700 rounded-lg cursor-pointer transition-all group">
      <FontAwesomeIcon className="h-5 fill-zinc-500" icon={faHashtag} />
      <div className="text-sm group-hover:text-zinc-200 transition-all">
        {name}
      </div>
    </div>
  );
}
