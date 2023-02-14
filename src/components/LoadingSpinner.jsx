import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LoadingSpinner() {
  return (
    <div className="h-full w-full flex justify-center items-center text-2xl">
      <FontAwesomeIcon icon={faSpinner} spin />
    </div>
  );
}
