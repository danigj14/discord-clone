import HeadMessage from "./message/HeadMessage";
import NormalMessage from "./message/NormalMessage";

export default function MessageList() {
  return (
    <div className="flex-grow flex flex-col justify-end">
      <HeadMessage content="Hello, this is message 1" />
      <NormalMessage content="And this is message 2, sent after message 1" />
    </div>
  );
}
