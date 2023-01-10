export default function NormalMessage({ content }) {
  return (
    <div className="px-4 py-1 hover:bg-zinc-800 flex items-center gap-2 group">
      <div className="w-10 text-[0.6rem] text-zinc-400 opacity-0 group-hover:opacity-100">5:40 PM</div>
      <div className="text-sm">{content}</div>
    </div>
  );
};