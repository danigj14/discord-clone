import useUserInfo from "../../../hooks/useUserInfo";

export default function HeadMessage({ message }) {
  const userInfo = useUserInfo(message.userId);

  const date = new Date(message.date);

  return (
    <div className="px-4 py-1 mt-2 hover:bg-zinc-800 hover:bg-opacity-25 flex items-center">
      <div className="w-14">
        <img
          src={userInfo ? userInfo.profilePicture : ""}
          className="w-10 h-10 rounded-full cursor-pointer"
          alt="User Avatar"
        />
      </div>
      <div className="text-sm flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <div className="font-bold cursor-pointer">
            {userInfo ? userInfo.name : ""}
          </div>
          <div className="text-xs text-zinc-400 select-none">
            {date.toUTCString()}
          </div>
        </div>
        <div className="text-sm">{message.content}</div>
      </div>
    </div>
  );
}
