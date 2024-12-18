"use client";
import { useGallery } from "../hooks/useGallery";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "@/shadcn-ui/ui/drawer";
import { Button } from "@/shadcn-ui/ui/button";
import Box from "../ui/Box";
import cn from "classnames";
import axios from "@/api";
import { useEffect, useState } from "react";

// Drawer 的容器
// 图库drawer

export default function DrawerContainer({ children }) {
  const { isOpen, close } = useGallery("gallery");
  const [picList, setPic] = useState([]);

  useEffect(() => {
    onGetPictures();
  }, []);

  function onGetPictures() {
    axios.get("/pictures").then((resp) => {
      console.log(resp);
      setPic(resp.data);
    });
  }

  return (
    <Drawer
      open={isOpen}
      onOpenChange={(open) => {
        close(open);
      }}
      direction="right"
    >
      <DrawerContent
        className={cn(
          "top-[10%] right-8 w-[900px] max-w-full h-3/4 text-white"
        )}
      >
        <Box className="h-full duration-none hover:scale-[1] p-4 rounded-lg block">
          <DrawerTitle>
            <DrawerDescription className="text-white text-base font-normal">
              图片
            </DrawerDescription>
          </DrawerTitle>
          <div className="flex-1 mt-4 overflow-y-auto  columns-3">
            {/* <img
              className="w-full aspect-video"
              src="https://xiaobai-abc.cn/static/images/wallhaven-x6rxyo.png"
              alt=""
            />
            <img
            
              src="https://xiaobai-abc.cn/static/images/wallhaven-x6mv2o.jpg"
              alt=""
            /> */}
            {picList.map((item) => {
              return (
                <div key={item.name} className="w-full  ">
                  <img src={item.url} className="w-full aspect-video" alt="" />
                </div>
              );
            })}
          </div>
        </Box>
      </DrawerContent>
    </Drawer>
  );
}
