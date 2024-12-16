import cn from "classnames";

// 毛玻璃
export default function Box({ children, className, ...props }) {
  return (
    <div
      className={cn(
        `backdrop-blur rounded-md overflow-hidden`,
        `flex flex-col justify-between`,
        `text-white font-normal `,
        "duration-300 hover:scale-[1.03] active:scale-[0.98]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export const boxStyle1 = cn("p-8 h-full flex-1");
