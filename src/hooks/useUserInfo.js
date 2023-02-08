import getUserInfo from "@/api/getUserInfo";
import useAuth from "@/features/auth/hooks/useAuth";
import { useEffect, useState } from "react";

export default function useUserInfo(userId) {
  const { authToken } = useAuth();
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    if (userId !== undefined) getUserInfo(authToken, userId).then(setUserInfo);
  }, [userId]);

  return userInfo;
}
