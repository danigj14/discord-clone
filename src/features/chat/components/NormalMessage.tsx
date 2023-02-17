import { PrivateMessage } from "@/types";

const formatDate = (date: Date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${hours % 12}:${minutes > 9 ? minutes : `0${minutes}`} ${
    hours >= 12 ? "PM" : "AM"
  }`;
};

interface NormalMessageProps {
  message: PrivateMessage;
}

export default function NormalMessage({ message }: NormalMessageProps) {
  return (
    <div className="px-2 py-1 hover:bg-zinc-800 hover:bg-opacity-25 flex items-center group">
      <div className="w-14 text-right pr-2 text-[0.6rem] text-zinc-400 opacity-0 group-hover:opacity-100 select-none">
        {formatDate(new Date(message.createDate))}
      </div>
      <div className="text-sm">{message.text}</div>
    </div>
  );
}
