interface UserAvatarProps {
  imgUrl: string;
}

export default function UserAvatar({ imgUrl }: UserAvatarProps) {
  return (
    <img src={imgUrl} className="w-9 h-9 rounded-full" alt="User Avatar" />
  );
}
