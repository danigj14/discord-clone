import { useState } from "react";
import Tooltip from "../Tooltip";

export default function ServerIcon({
  name,
  imgUrl,
  selected = false,
  onClick = () => {},
}) {
  const [isHovering, setIsHovering] = useState(false);

  const buttonStyle = () => {
    const base =
      "w-12 h-12 object-cover transition-all cursor-pointer bg-cover bg-center";

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
    <div className="w-full flex justify-center relative items-center">
      <button
        style={{ backgroundImage: `url('${imgUrl}')` }}
        className={buttonStyle()}
        type="button"
        aria-label="Select Server"
        onClick={onClick}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      />
      <div className={sideMarkStyle()} />
      <Tooltip className={tooltipStyle()} arrowPosition="left">
        {name}
      </Tooltip>
    </div>
  );
}
