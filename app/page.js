import Image from "next/image";
import classNames from "classnames";
import Hitokoto from "./components/Hitokoto";
import TimeCard from "./components/TimeCard";

export default async function Home(props) {
  const result = await props.searchParams;

  // console.log(props,result);
  return (
    <div
      className={classNames(
        `h-screen overflow-hidden flex items-center justify-center justify-center`
      )}
    >
      <div
        className={classNames(
          `flex items-center justify-center`,
          `text-white text-2xl font-bold`,
          `w-full max-w-[1200px] br`
        )}
      >
        <div className={classNames(`flex-auto`)}>
          {/* 左侧 */}
          <div className={classNames(`head-main`, `flex items-center`)}>
            <div className={classNames(`mr-4 rounded-xl overflow-hidden`)}>
              <Image
                className="w-[90px] h-[90px]"
                src="https://xiaobai-abc.cn/static/other/head.png"
                alt="abc"
                height={90}
                width={90}
              />
            </div>
            <h1
              className={classNames(
                `nav_title font-['Pacifico-Regular']`,
                `text-4xl`,
                ``
              )}
            >
              xiaobai-abc
            </h1>
          </div>
        </div>
        <div className={classNames(`flex-auto grow-2`)}>
          {/* 右侧 */}
          <div className={classNames(`flex items-center h-[170px] `)}>
            <Hitokoto></Hitokoto>
            <TimeCard></TimeCard>
          </div>
        </div>
      </div>
    </div>
  );
}
