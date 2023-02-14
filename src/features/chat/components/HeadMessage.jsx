import DefaultAvatar from "@/components/DefaultAvatar";
import UserAvatar from "@/components/UserAvatar";
import useUserData from "@/hooks/useUserData";

const isToday = (date) => {
  const currentDate = new Date();

  return (
    currentDate.getFullYear() === date.getFullYear() &&
    currentDate.getMonth() === date.getMonth() &&
    currentDate.getDate() === date.getDate()
  );
};

const isYesterday = (date) => {
  const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));

  return (
    yesterday.getFullYear() === date.getFullYear() &&
    yesterday.getMonth() === date.getMonth() &&
    yesterday.getDate() === date.getDate()
  );
};

const formatDate = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months start at 0, doing a +1 to make them start from 1 instead.
  const year = date.getFullYear();
  const hour = date.getHours();
  const minute = date.getMinutes();

  const hourString = hour % 12;
  const minuteString = minute > 9 ? minute : `0${minute}`;

  const timeOfDay = hour >= 12 ? "PM" : "AM";

  if (isToday(date))
    return `Today at ${hourString}:${minuteString} ${timeOfDay}`;
  if (isYesterday(date))
    return `Yesterday at ${hourString}:${minuteString} ${timeOfDay}`;

  const dayString = day > 9 ? day : `0${day}`;
  const monthString = month > 9 ? month : `0${month}`;

  return `${dayString}/${monthString}/${year} ${hourString}:${minuteString} ${timeOfDay}`;
};

export default function HeadMessage({ message }) {
  const userInfo = useUserData(message.sender);

  return (
    <div className="px-4 py-1 mt-2 hover:bg-zinc-800 hover:bg-opacity-25 flex items-center">
      <div className="mr-4">
        {userInfo.isLoading || !userInfo.data.profilePicture ? (
          <DefaultAvatar />
        ) : (
          <UserAvatar imgUrl={userInfo.profilePicture} />
        )}
      </div>
      <div className="text-sm flex flex-col">
        <div className="flex items-center gap-2">
          <div className="font-bold cursor-pointer">
            {userInfo.isSuccess ? userInfo.data.email : ""}
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
