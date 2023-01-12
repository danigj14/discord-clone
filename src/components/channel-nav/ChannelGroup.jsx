import { useState } from "react";
import Channel from "./Channel";

export default function ChannelGroup({ name }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex flex-col">
      <button
        className="px-2 text-zinc-400 text-left text-sm py-1 hover:text-zinc-200 cursor-pointer"
        type="button"
        onClick={() => setOpen(!open)}
      >
        <span className={`inline-block mr-2 text-xs transition-all ${open ? "rotate-90" : "rotate-0"}`}>&gt;</span>
        {name}
      </button>
      {open && (
        <>
          <Channel name="Channel 1" />
          <Channel name="Channel 2" />
          <Channel name="Channel 3" />
        </>
      )}
    </div>
  );
}
