import { useState } from "react";
import ServerChannelNav from "./components/server-channel-nav/ServerChannelNav";
import Chat from "./components/chat/Chat";
import ServerNav from "./components/server-nav/ServerNav";
import UserContext from "./contexts/UserContext";
import LoginScreen from "./components/LoginScreen";
import useUserServers from "./hooks/useUserServers";
import useSelectableServerChannels from "./hooks/useSelectableServerChannels";

function App() {
  const [loggedUser, setLoggedUser] = useState();
  const { servers } = useUserServers(loggedUser?.id);
  const [mainSelection, setMainSelection] = useState({
    type: "DIRECT_MESSAGES",
  });
  const { channelCategories, selectedChannel, setSelectedChannel } = useSelectableServerChannels(
    mainSelection.type === "SERVER" ? mainSelection.value.id : undefined
  );

  return (
    <UserContext.Provider value={loggedUser}>
      <div className="h-screen w-screen flex text-zinc-100">
        {loggedUser ? (
          <>
            <ServerNav
              servers={servers}
              onSelection={setMainSelection}
              selection={mainSelection}
            />
            {mainSelection.type === "SERVER" ? (
              <ServerChannelNav
                serverName={mainSelection.value.name}
                channelCategories={channelCategories}
                selectedChannel={selectedChannel}
                onChannelSelect={setSelectedChannel}
              />
            ) : (
              <ServerChannelNav />
            )}
            <Chat channelName={selectedChannel?.name} />
          </>
        ) : (
          <LoginScreen onUserLogin={setLoggedUser} />
        )}
      </div>
    </UserContext.Provider>
  );
}

export default App;
