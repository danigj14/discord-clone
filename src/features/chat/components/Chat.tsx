import { PrivateMessage } from "@/types";
import React from "react";
import ChatInput from "./ChatInput";
import DateLine from "./DateLine";
import HeadMessage from "./HeadMessage";
import NormalMessage from "./NormalMessage";

const areSameDate = (date1: Date, date2: Date) =>
  `${date1.getDate()}-${date1.getMonth()}-${date1.getFullYear()}` ===
  `${date2.getDate()}-${date2.getMonth()}-${date2.getFullYear()}`;

interface ChatProps {
  messages: PrivateMessage[];
  chatName: string;
  onMessageSend: (text: string) => void;
}

export default function Chat({
  messages = [],
  chatName,
  onMessageSend = () => {},
}: ChatProps) {
  return (
    <>
      <div className="bg-zinc-700 flex-grow flex flex-col overflow-auto">
        <div className="flex-grow flex flex-col justify-end ">
          {messages.map((message, index) => {
            if (index === 0) {
              return (
                <React.Fragment key={message._id}>
                  <DateLine date={new Date(message.createDate)} />
                  <HeadMessage message={message} />
                </React.Fragment>
              );
            }

            if (
              !areSameDate(
                new Date(message.createDate),
                new Date(messages[index - 1].createDate)
              )
            ) {
              return (
                <React.Fragment key={message._id}>
                  <DateLine date={new Date(message.createDate)} />
                  <HeadMessage message={message} />
                </React.Fragment>
              );
            }

            if (message.sender !== messages[index - 1].sender)
              return <HeadMessage key={message._id} message={message} />;

            return <NormalMessage key={message._id} message={message} />;
          })}
        </div>
      </div>
      <ChatInput chatName={chatName} onMessageSend={onMessageSend} />
    </>
  );
}
