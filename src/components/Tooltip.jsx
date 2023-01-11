const positionStyles = {
  top: "bottom-[100%] mb-2 after:content[''] after:border-[6px] after:mr-[-6px] after:absolute after:right-1/2 after:bottom-[100%] after:border-transparent after:border-b-zinc-900",
  right:
    "left-[100%] ml-2 after:content[''] after:border-[6px] after:mt-[-6px] after:absolute after:top-1/2 after:right-[100%] after:border-transparent after:border-r-zinc-900",
  bottom:
    "top-[100%] mt-2 after:content[''] after:border-[6px] after:mr-[-6px] after:absolute after:right-1/2 after:top-[100%] after:border-transparent after:border-t-zinc-900",
  left: "right-[100%] mr-2 after:content[''] after:border-[6px] after:mt-[-6px] after:absolute after:top-1/2 after:left-[100%] after:border-transparent after:border-l-zinc-900",
};

export default function Tooltip({ position, children, className }) {
  return (
    <div
      className={`absolute whitespace-nowrap width-full bg-zinc-900 px-2 py-1 rounded-lg ${positionStyles[position]} ${className}`}
    >
      {children}
    </div>
  );
}
