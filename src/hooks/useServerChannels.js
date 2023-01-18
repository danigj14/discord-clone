import { useEffect, useState } from "react";
import { getServerChannelCategories } from "../services/DiscordCloneDataService";

export default function useServerChannels(serverId) {
  const [channelCategories, setChannelCategories] = useState();

  useEffect(() => {
    if (serverId !== undefined)
      getServerChannelCategories(serverId).then(setChannelCategories);
  }, [serverId]);

  return { channelCategories };
}
