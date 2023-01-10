const Message = ({ content }) => {
  return (
    <div className="px-4 py-1 hover:bg-zinc-800 flex items-center gap-2">
      <img
          src="https://www.leawo.com/blog/wp-content/uploads/2009/12/avatar8.jpg"
          className="w-9 h-9 rounded-full"
        />
      <div className="text-sm">
        <div className="font-bold">Username</div>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default Message;
