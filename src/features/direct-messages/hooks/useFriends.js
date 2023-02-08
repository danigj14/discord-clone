import useAuth from "@/features/auth/hooks/useAuth";
import { useEffect, useState } from "react";
import getFriends from "../api/getFriends";

export default function useFriends() {
  const [friends, setFriends] = useState([]);
  const { authToken, userData } = useAuth();

  useEffect(() => {
    getFriends(authToken, userData._id).then(setFriends);
  }, []);

  return { friends };
}
