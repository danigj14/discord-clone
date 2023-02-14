import useAuth from "@/features/auth/hooks/useAuth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import createPrivateMessage from "../api/createPrivateMessage";
import getPrivateMessages from "../api/getPrivateMessages";

export default function usePrivateMessages(friendId) {
  const { authToken } = useAuth();
  const queryClient = useQueryClient();
  const messagesQuery = useQuery(["privateMessages", friendId], () =>
    getPrivateMessages(authToken, friendId)
  );

  const messagesMutation = useMutation({
    mutationFn: ({ text }) => createPrivateMessage(authToken, friendId, text),
    onSuccess: (data) =>
      queryClient.setQueryData(["privateMessages", friendId], (oldData) => [
        ...oldData,
        data,
      ]),
  });

  return { messagesQuery, messagesMutation };
}
