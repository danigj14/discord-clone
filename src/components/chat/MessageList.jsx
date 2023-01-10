import HeadMessage from "./message/HeadMessage";
import NormalMessage from "./message/NormalMessage";

export default function MessageList() {
  return (
    <div className="flex-grow flex flex-col justify-end">
      <HeadMessage content="Message 1" />
      <NormalMessage content="Message 2" />
    </div>
  );
}
