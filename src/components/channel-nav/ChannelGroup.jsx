import Channel from "./Channel";

const ChannelGroup = ({ name }) => {
  return (
    <div className="flex flex-col">
      <div className="px-2 text-zinc-400 text-sm py-1 hover:text-zinc-200 cursor-pointer">
        <span className="inline-block mr-2 text-xs">&gt;</span>
        {name}
      </div>
      <Channel name="Channel 1" />
      <Channel name="Channel 2" />
      <Channel name="Channel 3" />
    </div>
  );
};

export default ChannelGroup;
