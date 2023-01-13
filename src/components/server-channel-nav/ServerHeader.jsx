import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ServerHeader({ name }) {
  return (
    <button
      className="px-4 py-4 h-14 flex justify-between items-center border-b-2 text-zinc-100 border-zinc-900 hover:bg-zinc-700 transition-colors cursor-pointer"
      type="button"
    >
      <span>{name}</span>
      <FontAwesomeIcon icon={faChevronDown} />
    </button>
  );
}
