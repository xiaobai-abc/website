"use client";
import cn from "classnames";
import { useEffect, useState } from "react";
import Box from "../ui/Box";

import { useGallery } from "../hooks/useGallery";


import { Button } from "@/shadcn-ui/ui/button";

const handlerList = [
  {
    id: 1,
    title: "图库"
  }
];

export default function HandlerCard() {
  const [] = useState([]);
  const { open, setOpen } = useGallery();

  useEffect(() => {
    console.log("handlercard");
  }, []);

  function onHandlerClick(item) {
    console.log(item);
  }

  return (
    <>
      <div className={cn("mt-2 flex-1 grid gap-4 grid-cols-5 items-start")}>
        {handlerList.map((item) => {
          return (
            <div key={item.id} className={cn("flex align-center w-full")}>
              <Box
                className={cn("p-4 text-base text-center")}
                onClick={() => onHandlerClick(item)}
              >
                {item.title}
              </Box>
            </div>
          );
        })}
      </div>

      <Button onClick={() => setOpen(true)}>点击</Button>
    </>
  );
}
