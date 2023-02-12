import ChatInput from "./ChatInput";
import DateLine from "./DateLine";
import HeadMessage from "./HeadMessage";
import NormalMessage from "./NormalMessage";

const areSameDate = (date1, date2) =>
  `${date1.getDate()}-${date1.getMonth()}-${date1.getFullYear()}` ===
  `${date2.getDate()}-${date2.getMonth()}-${date2.getFullYear()}`;

export default function Chat({
  messages = [],
  chatName,
  onMessageSend = () => {},
}) {
  return (
    <div className="bg-zinc-700 flex-grow flex flex-col">
      <div className="flex-grow flex flex-col justify-end">
        {messages.map((message, index) => {
          if (index === 0) {
            return (
              <>
                <DateLine date={new Date(message.createDate)} />
                <HeadMessage key={message._id} message={message} />
              </>
            );
          }

          if (
            !areSameDate(
              new Date(message.createDate),
              new Date(messages[index - 1].createDate)
            )
          ) {
            return (
              <>
                <DateLine date={new Date(message.createDate)} />
                <HeadMessage key={message._id} message={message} />
              </>
            );
          }

          if (message.sender !== messages[index - 1].sender)
            return <HeadMessage key={message._id} message={message} />;

          return <NormalMessage key={message._id} message={message} />;
        })}
      </div>
      <ChatInput chatName={chatName} onMessageSend={onMessageSend} />
    </div>
  );
}
