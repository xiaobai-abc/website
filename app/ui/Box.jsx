import cn from "classnames";
import { forwardRef } from "react";

// 毛玻璃
function BoxCC({ children, className, ...props }) {
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

export default forwardRef((props, ref) => {
  return <BoxCC ref={ref} {...props}></BoxCC>;
});
