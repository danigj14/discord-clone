import { useState } from "react";
import ServerChannelNav from "./components/server-channel-nav/ServerChannelNav";
import Chat from "./components/chat/Chat";
import ServerNav from "./components/server-nav/ServerNav";
import UserContext from "./contexts/UserContext";
import LoginScreen from "./components/LoginScreen";
import useUserServers from "./hooks/useUserServers";
import useServerChannels from "./hooks/useServerChannels";

function App() {
  const [loggedUser, setLoggedUser] = useState();
  const { servers } = useUserServers(loggedUser?.id);
  const [mainSelection, setMainSelection] = useState({
    type: "DIRECT_MESSAGES",
  });
  const { channelCategories } = useServerChannels();
  const [selectedChannel, setSelectedChannel] = useState(0);

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
            <Chat />
          </>
        ) : (
          <LoginScreen onUserLogin={setLoggedUser} />
        )}
      </div>
    </UserContext.Provider>
  );
}

export default App;
