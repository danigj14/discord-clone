import { useState, useMemo } from "react";
import MainNav from "@/components/MainNav";
import AuthContext from "@/contexts/AuthContext";
import AuthScreen from "@/features/auth/components/AuthScreen";
import DirectMessages from "./features/direct-messages/components/DirectMessages";

function App() {
  /*
  const { servers } = useUserServers(loggedUserToken?.id);
  const { channelCategories, selectedChannel, setSelectedChannel } =
    useSelectableServerChannels(
      mainSelection.type === "SERVER" ? mainSelection.value.id : undefined
    );
  const { messages } = useServerChannelMessages(selectedChannel?.id);
  */

  const [loggedUserToken, setLoggedUserToken] = useState();

  const [mainSelection, setMainSelection] = useState({
    type: "DIRECT_MESSAGES",
  });

  const authContextMemo = useMemo(
    () => [loggedUserToken, setLoggedUserToken],
    [loggedUserToken, setLoggedUserToken]
  );

  return (
    <AuthContext.Provider value={authContextMemo}>
      <div className="h-screen w-screen flex text-zinc-100">
        {loggedUserToken ? (
          <>
            <MainNav
              servers={[]}
              onSelection={setMainSelection}
              selection={mainSelection}
            />
            {mainSelection.type === "DIRECT_MESSAGES" ? (
              <DirectMessages />
            ) : (
              <div className="flex-grow bg-zinc-800"/>
            )}
          </>
        ) : (
          <AuthScreen />
        )}
      </div>
    </AuthContext.Provider>
  );
}

export default App;
