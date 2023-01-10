import IconButton from "./IconButton";

const UserPanel = () => {
  return (
    <div className="flex gap-1 p-2 bg-neutral-800 items-center">
      <div className="flex-grow flex text-xs p-1 gap-2 items-center hover:bg-neutral-700 rounded-md transition-all ">
        <img
          src="https://www.leawo.com/blog/wp-content/uploads/2009/12/avatar8.jpg"
          className="w-9 h-9 rounded-full"
        />
        <div>
          <div className="font-bold">Username</div>
          <div>#1234</div>
        </div>
      </div>
      <div className="flex">
        <IconButton icon="M" />
        <IconButton icon="S" />
        <IconButton icon="A" />
      </div>
    </div>
  );
};

export default UserPanel;
