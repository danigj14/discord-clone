import { useState } from "react";

export default function ServerChannelGroup({ name, children }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex flex-col">
      <button
        className="px-2 text-zinc-400 flex items-center text-xs py-1 hover:text-zinc-200 cursor-pointer uppercase font-bold"
        type="button"
        onClick={() => setOpen(!open)}
      >
        <span
          className={`inline-block mr-2 text-xs transition-transform ${
            open ? "rotate-90" : "rotate-0"
          }`}
        >
          &gt;
        </span>
        {name}
      </button>
      {open && children}
    </div>
  );
}
