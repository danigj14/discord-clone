import ChannelNav from "./components/server-channels/ChannelNav";
import ServerNav from "./components/server-nav/ServerNav";

function App() {
  return (
    <div className="h-screen w-screen flex text-neutral-100">
      <ServerNav />
      <ChannelNav />
      <div className="bg-zinc-700 flex-grow"></div>
    </div>
  );
}

export default App;
