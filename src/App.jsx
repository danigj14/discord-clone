import ChannelNav from "./components/channel-nav/ChannelNav";
import Chat from "./components/chat/Chat";
import ServerNav from "./components/server-nav/ServerNav";

const TestData = {
  servers: [
    {
      id: 0,
      name: "ReactJS",
      imgUrl:
        "https://www.mindinventory.com/blog/wp-content/uploads/2019/06/reactjs-benefits-1200x500.jpg",
    },
    {
      id: 1,
      name: "The Odin Project",
      imgUrl:
        "https://res-2.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/t9euiqnpg5t08m71ki7d",
    },
    {
      id: 2,
      name: "Visual Studio Code",
      imgUrl:
        "https://ih1.redbubble.net/image.1083711361.3561/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
    },
  ],
};

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
