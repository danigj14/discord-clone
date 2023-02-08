import { useState } from "react";
import createFriendRequest from "@/features/direct-messages/api/createFriendRequest";
import useAuth from "@/features/auth/hooks/useAuth";

export default function AddFriendSection() {
  const [email, setEmail] = useState("");
  const { authToken } = useAuth();
  const onSubmit = (event) => {
    event.preventDefault();

    createFriendRequest(authToken, email);
  }
  return (
    <div className="p-4 flex flex-col gap-2">
      <div className="font-bold">ADD FRIEND</div>
      <div className="text-xs text-zinc-300">
        You can add a friend with their email address.
      </div>
      <form onSubmit={onSubmit} className="mt-2 p-3 bg-zinc-900 rounded-lg flex items-center gap-4">
        <input
          className="flex-grow bg-transparent focus:outline-none text-sm"
          type="email"
          placeholder="Enter an Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button
          className="px-4 py-2 bg-indigo-700 rounded-md hover:bg-indigo-800 transition-colors text-xs"
          type="submit"
        >
          Send Friend Request
        </button>
      </form>
    </div>
  );
}
