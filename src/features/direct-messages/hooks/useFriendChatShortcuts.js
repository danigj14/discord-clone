import useAuth from "@/features/auth/hooks/useAuth";
import { useEffect, useState } from "react";
import createFriendChatShortcut from "../api/createFriendChatShortcut";
import getUserFriendChatShortcuts from "../api/getUserFriendChatShortcuts";

export default function useFriendChatShortcuts() {
  const { authToken, userData } = useAuth();
  const [shortcuts, setShortcuts] = useState([]);

  useEffect(() => {
    getUserFriendChatShortcuts(authToken, userData._id).then(setShortcuts);
  }, []);

  const addShortcut = (userId) => {
    createFriendChatShortcut(authToken, userData._id, userId).then(() => setShortcuts([...shortcuts, userId]));
  }

  return { shortcuts, addShortcut };
}
