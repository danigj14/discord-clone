import { useEffect, useState } from "react";
import { getUserInfo } from "../services/DiscordCloneDataService";

export default function useUserInfo(userId) {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    if (userId !== undefined) getUserInfo(userId).then(setUserInfo);
  }, [userId]);

  return userInfo;
}
