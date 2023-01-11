import Tooltip from "../Tooltip";

export default function ServerIcon({
  name,
  imgUrl,
  selected = false,
  onClick = () => {},
}) {
  return (
    <div className="w-full flex justify-center relative items-center">
      <button
        style={{ backgroundImage: `url('${imgUrl}')` }}
        className={`w-12 h-12 object-cover transition-all cursor-pointer peer bg-cover bg-center ${
          selected ? "rounded-2xl" : "rounded-3xl hover:rounded-2xl"
        }`}
        type="button"
        aria-label="Select Server"
        onClick={onClick}
      />
      <div
        className={`absolute left-0 top-1/2 -translate-y-1/2 bg-neutral-100 w-1 rounded-r-full transition-all ${
          selected
            ? "h-5/6"
            : "h-0 peer-hover:h-1/2 opacity-0 peer-hover:opacity-100"
        }`}
      />
      <Tooltip className="invisible opacity-0 peer-hover:visible peer-hover:opacity-100 transition-all text-sm" position="right">{name}</Tooltip>
    </div>
  );
}
