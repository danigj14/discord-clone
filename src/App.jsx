import ChannelNav from "./components/channel-nav/ChannelNav";
import Chat from "./components/chat/Chat";
import ServerNav from "./components/server-nav/ServerNav";

const TestData = {
  servers: [
    {
      id: 0,
      name: "ReactJS",
      imgUrl:
        "https://git.ir/media/uploads/2020/05/09/reactjs_logo.jpg",
    },
    {
      id: 1,
      name: "The Odin Project",
      imgUrl:
        "https://cdn.dribbble.com/users/1256820/screenshots/3201241/odin2.png",
    },
    {
      id: 2,
      name: "Visual Studio Code",
      imgUrl:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--aAImjgPE--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/hfzfrz3xlx7kkqpag260.jpg",
    },
  ],
};

function App() {
  return (
    <div className="h-screen w-screen flex text-neutral-100">
      <ServerNav servers={TestData.servers}/>
      <ChannelNav />
      <Chat />
    </div>
  );
}

export default App;
