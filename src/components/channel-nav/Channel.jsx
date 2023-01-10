const Channel = ({ name }) => {
  return (
    <div className="flex text-zinc-400 items-center gap-3 px-2 mx-3 py-1 hover:bg-zinc-700 rounded-lg cursor-pointer transition-all group">
      <div className="text-xl">#</div>
      <div className="text-sm group-hover:text-zinc-200 transition-all">{name}</div>
    </div>
  );
};

export default Channel;
