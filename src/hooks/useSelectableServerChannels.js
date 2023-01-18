import { useEffect, useState } from "react";
import { getServerChannelCategories } from "../services/DiscordCloneDataService";

export default function useServerChannels(serverId) {
  const [channelCategories, setChannelCategories] = useState();
  const [selectedChannel, setSelectedChannel] = useState();

  useEffect(() => {
    if (serverId !== undefined)
      getServerChannelCategories(serverId).then((categories) => {
        setChannelCategories(categories);

        if (categories.length > 0)
          setSelectedChannel(categories[0].channels[0]);
        else setSelectedChannel(undefined);
      });
  }, [serverId]);

  return { channelCategories, selectedChannel, setSelectedChannel };
}
