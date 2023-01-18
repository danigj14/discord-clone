export default function NormalMessage({ message }) {
  const date = new Date(message.date);
  return (
    <div className="px-4 py-1 hover:bg-zinc-800 hover:bg-opacity-25 flex items-center group">
      <div className="w-14 text-[0.7rem] text-zinc-400 opacity-0 group-hover:opacity-100 select-none">
        {`${date.getMinutes()}:${date.getSeconds()}`}
      </div>
      <div className="text-sm">{message.content}</div>
    </div>
  );
}
