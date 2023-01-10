const ServerHeader = ({ name }) => {
  return (
    <div className="px-4 py-4 border-b-2 border-zinc-900 hover:bg-zinc-700 transition-colors cursor-pointer">
      {name}
    </div>
  );
};

export default ServerHeader;
