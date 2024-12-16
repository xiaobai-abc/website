import Image from "next/image";
import cn from "classnames";
import Hitokoto from "./components/Hitokoto";
import TimeCard from "./components/TimeCard";
import Box from "./ui/Box";
import HandlerCard from "./components/HandlerCard";
import LinkSvg from "@/assets/link.svg";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default async function Home(props) {
  const result = await props.searchParams;

  // console.log(props,result);
  return (
    <div
      className={cn(
        `h-screen overflow-hidden flex items-center justify-center justify-center`,
        "text-base"
      )}
    >
      <div
        className={cn(
          `flex items-center justify-center`,
          `text-white text-2xl font-bold`,
          `w-full max-w-[1200px] `
        )}
      >
        <div className={cn(`flex-auto mr-10`)}>
          {/* 左侧 */}
          <div className={cn(`head-main`, `flex items-center h-[170px]`)}>
            <div className={cn(`mr-4 rounded-xl overflow-hidden`)}>
              <Image
                className="w-[90px] h-[90px]"
                src="https://xiaobai-abc.cn/static/other/head.png"
                alt="abc"
                height={90}
                width={90}
              />
            </div>
            <h1
              className={cn(
                `nav_title font-['Pacifico-Regular']`,
                `text-4xl`,
                ``
              )}
            >
              xiaobai-abc
            </h1>
          </div>

          <div className={cn("mt-4 h-[200px]")}>
            <Box className={cn(`flex flex-col p-4`)}>
              <span>
                <FaQuoteLeft size={16} />
              </span>
              <div className={cn("px-6 my-2")}>
                <span className={cn("font-['Pacifico-Regular'] text-lg")}>
                  hello word
                </span>
                <p className={cn("text-base font-normal mt-2")}>
                  小杨嘎嘎 阿巴阿巴阿巴
                </p>
              </div>
              <span className="flex justify-end">
                <FaQuoteRight size={16} />
              </span>
            </Box>
          </div>
        </div>
        <div className={cn(`flex-auto`)}>
          {/* 右侧 */}
          <div className={cn(`flex items-center h-[170px] `)}>
            <Hitokoto></Hitokoto>
            <TimeCard></TimeCard>
          </div>

          <div className={cn("mt-4 h-[200px] flex flex-col")}>
            <h1 className={cn("flex align-center text-lg")}>
              <Image
                className="text-white mr-2"
                width={24}
                height={24}
                src={LinkSvg}
                alt="link"
              />
              收录
            </h1>
            <HandlerCard></HandlerCard>
          </div>
        </div>
      </div>
    </div>
  );
}
