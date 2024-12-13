import { useMemo } from "react";
import styles from "./index.module.css";
import classnames from "classnames";
import "./style/globals.css";

const style = {
  mainContainer: styles["main-container"]
};

export const metadata = {
  title: "小白abc"
};

// wallhaven-x6rwjo

export default function RootLayout({ children }) {
  return (
    <html lang="zh-cn">
      <body>
        <main className={classnames(style.mainContainer, `br h-screen overflow-hidden`)}>{children}</main>
      </body>
    </html>
  );
}
