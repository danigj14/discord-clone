export default function UserAvatar({ imgUrl }) {
  return (
    <img src={imgUrl} className="w-9 h-9 rounded-full" alt="User Avatar" />
  );
}
