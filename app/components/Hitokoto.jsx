"use client";
import cn from "classnames";
import { useEffect, useState } from "react";
import axios from "@/api";
import { handleStatus } from "@/api/helper";

export default function Hitokoto() {
  const [write, setWrite] = useState({
    from: "",
    hitokoto: ""
  });

  useEffect(() => {
    // 获取诗词
    axios
      .get("/wenan-shici")
      .then(handleStatus)
      .then((data) => {
        console.log(data);
        setWrite(data);
      });
  }, []);

  return (
    <div
      className={cn(
        `h-full max-w-[50%] flex-auto backdrop-blur rounded-lg overflow-hidden`
      )}
    >
      <div>
        <span class="text"> {write.hitokoto} </span>
        <span class="from">-「&nbsp;{write.from}&nbsp;」</span>
      </div>
    </div>
  );
}
