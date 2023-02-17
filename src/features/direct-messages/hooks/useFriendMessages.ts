import useAuth from "@/features/auth/hooks/useAuth";
import { PrivateMessage } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import createPrivateMessage from "../api/createPrivateMessage";
import getPrivateMessages from "../api/getPrivateMessages";

export default function usePrivateMessages(friendId: string) {
  const { authToken } = useAuth();

  const queryClient = useQueryClient();

  const messagesQuery = useQuery(["privateMessages", friendId], () =>
    getPrivateMessages(authToken, friendId)
  );

  const messagesMutation = useMutation({
    mutationFn: (text: string) =>
      createPrivateMessage(authToken, friendId, text),
    onSuccess: (data) =>
      queryClient.setQueryData<PrivateMessage[]>(
        ["privateMessages", friendId],
        (oldData) => (oldData ? [...oldData, data] : [data])
      ),
  });

  return { messagesQuery, messagesMutation };
}
