const Channel = ({ name }) => {
  return (
    <div className="flex text-zinc-400 items-center gap-3 px-2 mx-2 hover:bg-zinc-700 cursor-pointer">
      <div className="text-xl">#</div>
      <div className="text-sm">{name}</div>
    </div>
  );
};

export default Channel;
