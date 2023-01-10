import ChannelNav from "./components/channel-nav/ChannelNav";
import Chat from "./components/chat/Chat";
import ServerNav from "./components/server-nav/ServerNav";

function App() {
  return (
    <div className="h-screen w-screen flex text-neutral-100">
      <ServerNav />
      <ChannelNav />
      <Chat />
    </div>
  );
}

export default App;
