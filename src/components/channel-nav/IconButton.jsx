const IconButton = ({ icon }) => {
  return (
    <div className="flex justify-center items-center w-8 h-9 hover:bg-neutral-700 transition-all rounded-md fill-zinc-300 cursor-pointer">
      {icon}
    </div>
  );
};

export default IconButton;
