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
import { useEffect, useRef, useState } from "react";

// Drawer 的容器
// 图库drawer

let observer = null;
const observerTarget = new WeakMap();

export default function DrawerContainer({ children }) {
  const { isOpen, close } = useGallery("gallery");
  const [picList, setPic] = useState([]);
  const boxRef = useRef(null);

  const rows = 4;

  useEffect(() => {
    observer = new IntersectionObserver(
      (entries, observer) => {
        // entries 是观察到的元素的信息数组
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 当目标元素进入视口时触发的操作
            const targetMap = observerTarget.get(entry.target);
            targetMap.handShow?.(); //操作元素展示
            // 这里可以执行加载和渲染的操作，例如替换元素内容、加载数据等
            // 例如：fetchDataAndRender();
            // observer.unobserve(entry.target); // 可选：一次性观察，加载后取消观察
          }
        });
      },
      {
        root: null, // 观察者的根元素，默认为视口
        rootMargin: "100px", // 根元素的边距
        threshold: 1 // 当元素可见比例达到 50% 时触发回调
      }
    );

    return () => {
      observer?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      onGetPictures();
    }
  }, [isOpen]);

  function onGetPictures() {
    axios.get("/pictures").then((resp) => {
      console.log(resp.data);
      const result = resp.data.rows;
      const list = new Array(rows).fill(1).map(() => []);

      for (let i = 0; i < result.length; i++) {
        list[i % rows].push(result[i]);
      }

      setPic(list);
      // setPic();
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
        <div ref={boxRef}></div>
        <Box className="h-full duration-none hover:scale-[1] p-4 rounded-lg block active:scale-[1]">
          <DrawerTitle>
            <DrawerDescription className="text-white text-base font-normal">
              图片
            </DrawerDescription>
          </DrawerTitle>
          <div className="flex-1 mt-4 overflow-y-auto   ">
            {/* "grid gap-4 grid-cols-4 content-start auto-rows-auto" */}
            <div className="grid gap-4 grid-cols-4">
              {picList.map((block, index) => {
                return (
                  <div key={index}>
                    {block.map((item) => {
                      return (
                        <ImageBlock item={item} key={item.id}></ImageBlock>
                      );
                    })}
                  </div>
                );
              })}
            </div>
            {/* {picList.map((item) => {
                return <ImageBlock item={item} key={item.id}></ImageBlock>;
              })} */}
          </div>
        </Box>
      </DrawerContent>
    </Drawer>
  );
}

function ImageBlock({ item }) {
  const imgRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [ifShow, setIfShow] = useState(false);
  useEffect(() => {
    if (!observerTarget.get(imgRef.current)) {
      observerTarget.set(imgRef.current, {
        handShow() {
          setIfShow(true);
          observer.unobserve(imgRef.current);
        }
      });
      observer.observe(imgRef.current);
    }

    return () => {};
  }, []);

  return (
    <div className="w-full mb-4 overflow-hidden rounded-lg" ref={imgRef}>
      {ifShow && <img src={item.url} className="w-full" alt={item.name} />}
    </div>
  );
}
