import useAuth from "@/features/auth/hooks/useAuth";
import { useEffect, useState } from "react";
import createPrivateMessage from "../api/createPrivateMessage";
import getPrivateMessages from "../api/getPrivateMessages";

export default function usePrivateMessages(friendId) {
  const { authToken } = useAuth();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getPrivateMessages(authToken, friendId).then(setMessages);
  }, []);

  const createMessage = (text) => {
    createPrivateMessage(authToken, friendId, text).then(newMessage => setMessages([...messages, newMessage]))
  }

  return { messages, createMessage };
}
