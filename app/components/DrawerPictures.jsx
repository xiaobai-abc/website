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

// Drawer 的容器
// 图库drawer

export default function DrawerContainer({ children }) {
  const { isOpen, close } = useGallery("gallery");

  return (
    <Drawer
      open={true}
      onOpenChange={(open) => {
        close(open);
      }}
      direction="right"
    >
      <DrawerContent
        className={cn(
          "top-[10%] right-8 w-[600px] max-w-full h-3/4 text-white"
        )}
      >
        <Box className="h-full duration-none hover:scale-[1] p-4 rounded-lg block">
          <DrawerTitle>
            <DrawerDescription className="text-white text-base font-normal">
              图片
            </DrawerDescription>
          </DrawerTitle>
          <div className="flex-1 mt-4 overscroll-y-auto"></div>
        </Box>
      </DrawerContent>
    </Drawer>
  );
}
