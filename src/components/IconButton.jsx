import { faSmile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IconButton({
  icon = faSmile,
  ariaLabel = "",
  onClick = () => {},
}) {
  return (
    <button
      className="p-2 w-8 h-9 hover:bg-neutral-700 transition-all rounded-md fill-zinc-300 flex items-center justify-center"
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  );
}
