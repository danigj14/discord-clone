import ChannelGroup from "./ChannelGroup";
import ServerHeader from "./ServerHeader";
import UserPanel from "./UserPanel";

export default function ChannelNav() {
  return (
    <div className="bg-zinc-800 w-64 h-full flex flex-col">
      <ServerHeader name="Server Name" />
      <div className="flex flex-col pt-2 gap-3 flex-grow">
        <ChannelGroup name="Group 1" />
        <ChannelGroup name="Group 2" />
      </div>
      <UserPanel />
    </div>
  );
}
