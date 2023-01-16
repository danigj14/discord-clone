import { useState } from "react";
import ServerChannelNav from "./components/server-channel-nav/ServerChannelNav";
import Chat from "./components/chat/Chat";
import ServerNav from "./components/server-nav/ServerNav";
import UserContext from "./contexts/UserContext";
import LoginScreen from "./components/LoginScreen";
import useUserServers from "./hooks/useUserServers";

const TestData = {
  servers: [
    {
      id: 0,
      name: "ReactJS",
      imgUrl: "https://git.ir/media/uploads/2020/05/09/reactjs_logo.jpg",
      channelCategories: [
        {
          id: 0,
          name: "Chat",
          channels: [
            {
              id: 0,
              name: "General Programming",
            },
            {
              id: 1,
              name: "ReactJS",
            },
          ],
        },
        {
          id: 1,
          name: "Learn",
          channels: [
            {
              id: 2,
              name: "Components",
            },
            {
              id: 3,
              name: "Props",
            },
            {
              id: 4,
              name: "State",
            },
            {
              id: 5,
              name: "Hooks",
            },
          ],
        },
      ],
    },
    {
      id: 1,
      name: "The Odin Project",
      imgUrl:
        "https://cdn.dribbble.com/users/1256820/screenshots/3201241/odin2.png",
      channelCategories: [
        {
          id: 2,
          name: "Community",
          channels: [
            {
              id: 6,
              name: "Rules",
            },
            {
              id: 7,
              name: "Suggestions",
            },
            {
              id: 8,
              name: "Help",
            },
          ],
        },
        {
          id: 3,
          name: "Our Content",
          channels: [
            {
              id: 9,
              name: "JavaScript",
            },
            {
              id: 10,
              name: "Ruby",
            },
            {
              id: 11,
              name: "React",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Visual Studio Code",
      imgUrl:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--aAImjgPE--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/hfzfrz3xlx7kkqpag260.jpg",
      channelCategories: [
        {
          id: 4,
          name: "Our Software",
          channels: [
            {
              id: 12,
              name: "Plugins",
            },
            {
              id: 13,
              name: "Advice",
            },
            {
              id: 14,
              name: "About Us",
            },
          ],
        },
        {
          id: 5,
          name: "Community",
          channels: [
            {
              id: 15,
              name: "Questions",
            },
            {
              id: 16,
              name: "Courses",
            },
            {
              id: 17,
              name: "Hall of Fame",
            },
          ],
        },
      ],
    },
  ],
};

function App() {
  const [loggedUser, setLoggedUser] = useState();

  const { servers } = useUserServers(loggedUser?.id);

  const [selectedServer, setSelectedServer] = useState(0);
  const [selectedChannel, setSelectedChannel] = useState(0);

  const onServerSelect = (serverId) => {
    setSelectedServer(serverId);
    setSelectedChannel(
      TestData.servers.find((server) => server.id === serverId)
        .channelCategories[0].channels[0].id
    );
  };

  return (
    <UserContext.Provider value={loggedUser}>
      <div className="h-screen w-screen flex text-zinc-100">
        {loggedUser ? (
          <>
            <ServerNav
              servers={servers}
              onSelect={onServerSelect}
              selected={selectedServer}
            />
            {selectedServer >= 0 ? (
              <ServerChannelNav
                channelCategories={
                  TestData.servers.find(
                    (server) => server.id === selectedServer
                  ).channelCategories
                }
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
