const arrowPositionStyles = {
  top: "after:content[''] after:border-[6px] after:mr-[-6px] after:absolute after:right-1/2 after:bottom-[100%] after:border-transparent after:border-b-zinc-900",
  left: "after:content[''] after:border-[6px] after:mt-[-6px] after:absolute after:top-1/2 after:right-[100%] after:border-transparent after:border-r-zinc-900",
  bottom:
    "after:content[''] after:border-[6px] after:mr-[-6px] after:absolute after:right-1/2 after:top-[100%] after:border-transparent after:border-t-zinc-900",
  right:
    "after:content[''] after:border-[6px] after:mt-[-6px] after:absolute after:top-1/2 after:left-[100%] after:border-transparent after:border-l-zinc-900",
};

export default function Tooltip({ arrowPosition, children, className }) {
  return (
    <div
      className={`absolute whitespace-nowrap width-full bg-zinc-900 px-2 py-1 rounded-lg z-10 ${arrowPositionStyles[arrowPosition]} ${className}`}
    >
      {children}
    </div>
  );
}
