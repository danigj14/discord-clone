const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function DateLine({ date }) {
  return (
    <div className="flex mt-2 gap-2 items-center">
      <div className="ml-5 flex-grow h-[1px] bg-zinc-600" />
      <div className="text-xs font-bold text-zinc-400">{`${
        monthNames[date.getMonth()]
      } ${date.getDate()}, ${date.getFullYear()}`}</div>
      <div className="mr-5 flex-grow h-[1px] bg-zinc-600" />
    </div>
  );
}
