import ServerIcon from "./ServerIcon";

export default function ServerNav() {
  return (
    <div className="bg-zinc-900 w-20 h-full flex flex-col items-center py-3 gap-3">
      <ServerIcon />
      <div className="w-1/2 h-[1px] bg-zinc-600" />
      <ServerIcon />
      <ServerIcon />
      <ServerIcon />
      <ServerIcon />
      <ServerIcon />
    </div>
  );
};