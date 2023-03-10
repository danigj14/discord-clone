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

interface DateLineProps {
  date: Date;
}

export default function DateLine({ date }: DateLineProps) {
  return (
    <div className="flex gap-2 mt-2 items-center">
      <div className="ml-5 flex-grow h-[1px] bg-zinc-600" />
      <div className="text-xs font-bold text-zinc-400">{`${
        monthNames[date.getMonth()]
      } ${date.getDate()}, ${date.getFullYear()}`}</div>
      <div className="mr-5 flex-grow h-[1px] bg-zinc-600" />
    </div>
  );
}
