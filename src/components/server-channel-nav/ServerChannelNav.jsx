import ServerChannelGroup from "./ServerChannelCategory";
import ServerHeader from "./ServerHeader";
import UserPanel from "../UserPanel";
import ServerChannel from "./ServerChannel";

export default function ServerChannelNav({
  serverName,
  channelCategories = [],
  selectedChannel,
  onChannelSelect = () => {},
}) {
  return (
    <div className="bg-zinc-800 w-64 h-full flex flex-col">
      <ServerHeader name={serverName} />
      <div className="flex flex-col pt-2 gap-3 flex-grow">
        {channelCategories.map((category) => (
          <ServerChannelGroup key={category.id} name={category.name}>
            {category.channels.map((channel) => (
              <ServerChannel
                key={channel.id}
                name={channel.name}
                selected={selectedChannel === channel}
                onClick={() => onChannelSelect(channel)}
              />
            ))}
          </ServerChannelGroup>
        ))}
      </div>
      <UserPanel />
    </div>
  );
}
