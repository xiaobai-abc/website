"use client";
import cn from "classnames";
import dayjs from "dayjs";
import { useEffect, useState, useMemo } from "react";
import { getAdcode, getWeather } from "@/api/amap";
import { useToast } from "@/shadcn-ui/hooks/use-toast";
import Box, { boxStyle1 } from "@/ui/Box";

import "@/utils/zh-cn";

dayjs.locale("zh-cn");

const getYmd = () => dayjs(new Date()).format("YYYY 年 MM 月 DD dddd");
const getHms = () => dayjs(new Date()).format("HH:mm:ss");

let timer = null;

export default function TimeCard() {
  const { toast } = useToast();

  // 年月日
  const [timerStr, setTimer] = useState(getYmd());
  // 时分秒
  const [timeStr, setTime] = useState(getHms());
  // 天气
  const [weatherInfo, setWather] = useState({
    city: "",
    weather: "", // 天气现象
    temperature: "", // 实时气温
    winddirection: "", // 风向描述
    windpower: "" // 风力级别
  });

  useEffect(() => {
    // initTimer();

    // // 获取天气相关信息
    // getWeatherInfo();
    return () => {
      clearInterval(timer);
    };
  }, []);

  // 获取天气消息
  function getWeatherInfo() {
    const ifError = (code) => code != "10000";
    new Promise((resolve, reject) => {
      getAdcode().then((res) => {
        if (ifError(res.infocode)) {
          reject(res.infocode);
          return;
        }
        getWeather(res.adcode).then((res) => {
          if (res.infocode != "10000") {
            reject(res.infocode);
            return;
          }

          resolve(res.lives[0]);
        });
      });
    })
      .then((data) => {
        console.log(data);
        setWather(data);
      })
      .catch((code) => {
        toast({
          title: "获取天气信息失败",
          description: code
        });
        setWather(null);
      });
  }

  function initTimer() {
    setTimer(getYmd());

    setTime(getHms());

    timer = setInterval(() => {
      setTime(getHms());
    }, 999);
  }

  return (
    <Box className={cn(boxStyle1, "ml-4 h-full flex-1")}>
      <p className={cn(`font-normal text-base text-white text-center`)}>
        {timerStr}
      </p>
      <div
        className={cn(
          `font-['UnidreamLED'] text-center text-4xl tracking-widest`
        )}
      >
        {timeStr}
      </div>
      <span className={cn(`font-normal text-sm text-white text-center`)}>
        {weatherInfo ? (
          <WeatherEl info={weatherInfo}></WeatherEl>
        ) : (
          "获取天气信息失败"
        )}
      </span>
    </Box>
  );
}

function WeatherEl({ info }) {
  const Element = useMemo(() => {
    return (
      <>
        <span className="mr-2"> {info.city} </span>
        <span className="mr-2"> {info.weather} </span>
        <span className="mr-2">
          {info.winddirection ? info.winddirection + "风" : ""}
        </span>
        <span> {info.windpower ? info.windpower + "级" : ""} </span>
      </>
    );
  }, [info]);

  return Element;
}
