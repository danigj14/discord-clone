export default function HeadMessage({ content }) {
  return (
    <div className="px-4 py-1 hover:bg-zinc-800 flex items-center gap-2">
      <img
        src="https://www.leawo.com/blog/wp-content/uploads/2009/12/avatar8.jpg"
        className="w-10 h-10 rounded-full"
        alt="User Avatar"
      />
      <div className="text-sm">
        <div className="flex items-center gap-2">
          <div className="font-bold">Username</div>
          <div className="text-xs text-zinc-400">Today at 01:23</div>
        </div>
        <div>{content}</div>
      </div>
    </div>
  );
};