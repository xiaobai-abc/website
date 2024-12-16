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

// Drawer 的容器

export default function DrawerContainer({ children }) {
  const { open, setOpen } = useGallery();

  return (
    <Drawer open={open}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        asdas
        <DrawerFooter>
          <Button>Submit</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
