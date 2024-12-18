"use client";
import { BackButton } from "./components/Clients";
import styleModule from "./test.module.css";
import { Button } from "@/shadcn-ui/ui/button";
import axios from "@/api";

const styles = {
  pageTest: styleModule["page-test"]
};

// 测试页面
export default function TestPage() {
  function onGetStatic() {
    // fetch("https://xiaobai-abc.cn/static/images/").then((e) => {
    //   console.log(e.body);
    // });
  }

  function onClick() {
    console.log("发送测试请求");
    axios
      .get("/test/add-pictures")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }

  return (
    <div className={styles.pageTest}>
      <BackButton></BackButton>
      <div className="p-4">
        <Button onClick={onClick}>点击测试</Button>
        <br />
        <br />
        <br />
        <Button onClick={onGetStatic}>获取静态列表</Button>
      </div>
    </div>
  );
}
