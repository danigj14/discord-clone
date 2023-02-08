import UserPanel from "@/components/UserPanel";
import { useState } from "react";
import FriendsSection from "./FriendsSection";
import Navigation from "./Navigation";

export default function DirectMessages() {
  const [selection, setSelection] = useState({ type: "FRIENDS" });
  return (
    <>
      <div className="bg-zinc-800 w-64 h-full flex flex-col">
        <Navigation selection={selection} onSelect={setSelection} />
        <UserPanel />
      </div>
      <div className="bg-zinc-700 flex-grow">
        <FriendsSection />
      </div>
    </>
  );
}
