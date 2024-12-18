import Footer from "./components/Footer";
import DrawerPictures from "./components/DrawerPictures";
import classnames from "classnames";
import { Toaster } from "@/shadcn-ui/ui/toaster";
import styles from "./index.module.css";
import "./style/globals.css";
import "./style/custom.css";

const style = {
  mainContainer: styles["main-container"],
  bgContainer: styles["bg-container"]
};

export const metadata = {
  title: "小白abc"
};

// wallhaven-x6rwjo

export default function RootLayout({ children }) {
  return (
    <html lang="zh-cn">
      <head>
        <link rel="stylesheet" href="/font/font.css" />
      </head>
      <body>
        <main
          className={classnames(
            style.mainContainer,
            `h-screen overflow-hidden`
          )}
        >
          <div className={classnames(`h-full`, style.bgContainer)}>
            {children}
          </div>
        </main>
        <DrawerPictures></DrawerPictures>
        <Footer></Footer>
        <Toaster />
      </body>
    </html>
  );
}
