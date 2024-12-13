"use client";
import { Button } from "@/shadcn-ui/ui/button";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export function BackButton() {
  const router = useRouter();
  function onBack() {
    router.back();
  }

  return <Button onClick={onBack}>返回</Button>;
}
