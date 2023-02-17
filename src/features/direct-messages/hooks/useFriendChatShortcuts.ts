import useAuth from "@/features/auth/hooks/useAuth";
import { useMutation, useQuery } from "@tanstack/react-query";
import createFriendChatShortcut from "../api/createFriendChatShortcut";
import getUserFriendChatShortcuts from "../api/getUserFriendChatShortcuts";

export default function useFriendChatShortcuts() {
  const { authToken, userData } = useAuth();

  const friendChatShortcutsQuery = useQuery(
    ["user", userData._id, "friendChatShortcuts"],
    () => getUserFriendChatShortcuts(authToken, userData._id)
  );

  const addFriendChatShortcutMutation = useMutation({
    mutationFn: (userId: string) =>
      createFriendChatShortcut(authToken, userData._id, userId),
    onSuccess: () => friendChatShortcutsQuery.refetch(),
  });

  return { friendChatShortcutsQuery, addFriendChatShortcutMutation };
}
