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

export { getUser, getUserServers };
