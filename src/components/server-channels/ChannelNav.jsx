import ChannelGroup from "./ChannelGroup";

const ChannelNav = () => {
  return (
    <div className="bg-zinc-800 w-60 h-full flex flex-col gap-5">
      <div className="px-4 py-4 border-b border-zinc-900 hover:bg-zinc-700 transition-colors cursor-pointer">Server Name</div>
      <ChannelGroup name="Group 1" />
      <ChannelGroup name="Group 2" />
    </div>
  );
};

export default ChannelNav;
