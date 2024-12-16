"use client";
import cn from "classnames";
import axios from "@/api";
import { handleStatus } from "@/api/helper";
import { useToast } from "@/shadcn-ui/hooks/use-toast";
import { useEffect, useState } from "react";
import Box, { boxStyle1 } from "@/ui/Box";
import { Button } from "@/shadcn-ui/ui/button";

export default function Hitokoto() {
  const { toast } = useToast();
  const [write, setWrite] = useState({
    hitokoto: "永远相信美好的事情即将发生~~",
    from: "小米"
  });

  useEffect(() => {
    // 获取诗词
    axios
      .get("/wenan-shici")
      .then(handleStatus)
      .then((data) => {
        console.log(data);
        setWrite(data);
      })
      .catch((err) => {
        toast({
          title: err,
          description: "获取失败",
          action: "诗词"
        });
      });
  }, []);

  return (
    <Box className={boxStyle1}>
      <span className={cn(`line-clamp-3 text-base`)}> {write.hitokoto} </span>
      <span className={cn(`text-sm mt-4 text-right font-blod`)}>
        -「&nbsp;{write.from}&nbsp;」
      </span>
    </Box>
  );
}
