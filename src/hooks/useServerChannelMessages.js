import { useEffect, useState } from "react";
import { getServerChannelMessages } from "../services/DiscordCloneDataService";

export default function useServerChannelMessages(channelId) {
  const [messages, setMessages] = useState();

  useEffect(() => {
    if (channelId !== undefined)
      getServerChannelMessages(channelId).then(setMessages);
  }, [channelId]);

  return { messages };
}
