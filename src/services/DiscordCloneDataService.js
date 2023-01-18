const getUser = async () => ({
  id: 1,
  username: "Spiderman",
  password: "Spiderman",
  name: "Spiderman",
  tag: "#1475",
  profilePicture: "https://avatarfiles.alphacoders.com/233/233448.jpg",
});

const getUserServers = async () => [
  {
    id: 0,
    name: "ReactJS",
    imgUrl: "https://git.ir/media/uploads/2020/05/09/reactjs_logo.jpg",
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
];

const getServerChannelCategories = async () => [
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
];

const getServerChannelMessages = async () => [
  {
    id: 0,
    userId: 0,
    content: "Hello World! This is the first message on the channel!",
    date: new Date("2023-01-01T03:24:07").toString(),
  },
  {
    id: 1,
    userId: 0,
    content:
      "This message is the second one, it should have a different look than the previous one.",
    date: new Date("2023-01-01T03:24:31").toString(),
  },
  {
    id: 2,
    userId: 1,
    content: "Hello! I am a different user.",
    date: new Date("2023-01-01T03:27:38").toString(),
  },
  {
    id: 3,
    userId: 1,
    content: "And I am also sending messages to this channel!",
    date: new Date("2023-01-01T03:28:21").toString(),
  },
];

const getUserInfo = async (userId) => {
  if (userId === 0)
    return {
      id: 0,
      name: "Thor",
      profilePicture:
        "https://static.wikia.nocookie.net/shaniverse/images/2/23/Thor.jpg",
    };

  return {
    id: 1,
    name: "Spiderman",
    profilePicture: "https://avatarfiles.alphacoders.com/233/233448.jpg",
  };
};

export {
  getUser,
  getUserServers,
  getServerChannelCategories,
  getServerChannelMessages,
  getUserInfo,
};
