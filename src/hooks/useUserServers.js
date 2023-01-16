import { useEffect, useState } from "react";
import { getUserServers } from "../services/DiscordCloneDataService";

export default function useUserServers(userId) {
  const [servers, setServers] = useState([]);

  useEffect(() => {
    if (userId) getUserServers(userId).then(setServers);
  }, [userId]);

  return { servers };
}
