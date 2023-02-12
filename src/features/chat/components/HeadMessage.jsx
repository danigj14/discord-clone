import DefaultAvatar from "@/components/DefaultAvatar";
import UserAvatar from "@/components/UserAvatar";
import useUserInfo from "../../../hooks/useUserInfo";

const formatDate = (date) => {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hour = date.getHours();
  const minute = date.getMinutes();

  const dateString = `${day > 9 ? day : `0${day}`}/${
    month > 9 ? month + 1 : `0${month + 1}`
  }/${year} ${hour % 12}:${minute > 9 ? minute : `0${minute}`} ${
    hour >= 12 ? "PM" : "AM"
  }`;

  return dateString;
};

export default function HeadMessage({ message }) {
  const userInfo = useUserInfo(message.sender);

  return (
    <div className="px-4 py-1 mt-2 hover:bg-zinc-800 hover:bg-opacity-25 flex items-center">
      <div className="mr-4">
        {userInfo?.profilePicture ? (
          <UserAvatar imgUrl={userInfo.profilePicture} />
        ) : (
          <DefaultAvatar />
        )}
      </div>
      <div className="text-sm flex flex-col">
        <div className="flex items-center gap-2">
          <div className="font-bold cursor-pointer">
            {userInfo ? userInfo.email : ""}
          </div>
          <div className="text-xs text-zinc-400 select-none">
            {message ? formatDate(new Date(message.createDate)) : ""}
          </div>
        </div>
        <div className="text-sm">{message?.text}</div>
      </div>
    </div>
  );
}
