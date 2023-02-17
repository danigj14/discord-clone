import { Id } from "@/types";

type NavigationSelection =
  | { type: "FRIENDS" }
  | { type: "FRIEND_CHAT"; friendId: Id };
