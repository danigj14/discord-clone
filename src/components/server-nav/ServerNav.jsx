import { useState } from "react";
import ServerIcon from "./ServerIcon";

export default function ServerNav({servers}) {

  const [selectedServer, setSelectedServer] = useState();

  return (
    <div className="bg-zinc-900 w-20 h-full flex flex-col items-center py-3 gap-3">
      <ServerIcon
        name="Direct Messages"
        imgUrl="https://occupyfantasy.com/wp-content/uploads/2020/07/discord-logo-768x432.jpg"
        onClick={() => setSelectedServer("directMessages")}
        selected={selectedServer === "directMessages"}
      />
      <div className="w-1/2 h-[1px] bg-zinc-600" />
      {servers.map(server => <ServerIcon key={server.id} name={server.name} imgUrl={server.imgUrl} selected={selectedServer === server} onClick={() => setSelectedServer(server)}/>)}
    </div>
  );
}
