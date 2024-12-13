import Image from "next/image";

import Link from "next/link";

import { Button, buttonVariants } from "@/shadcn-ui/ui/button";

export default async function Home(props) {
  const result = await props.searchParams;
  console.log(result);
  return (
    <div className="">
      <Link href={"/test"}>
        <Button>按钮</Button>
      </Link>
    </div>
  );
}
