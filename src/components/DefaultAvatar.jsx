import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DefaultAvatar() {
  return (
    <div className="w-8 h-8 bg-indigo-600 text-zinc-100 rounded-full flex justify-center items-center text-xs">
      <FontAwesomeIcon icon={faUser} />
    </div>
  );
}
