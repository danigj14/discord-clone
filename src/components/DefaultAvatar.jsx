import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DefaultAvatar() {
  return (
    <div className="w-9 h-9 bg-indigo-600 rounded-full flex justify-center items-center">
      <FontAwesomeIcon icon={faUserGroup} />
    </div>
  );
}
