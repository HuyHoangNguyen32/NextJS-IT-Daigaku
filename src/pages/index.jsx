import styles from "@/src/components/css/Main.module.css";
import { Header } from "@/src/components/Header";
import { Links } from "@/src/components/Links";
import { Images } from "@/src/components/Images";
import { useEffect } from "react";
import { Description } from "@/src/components/Description";
import { Menu } from "@/src/components/Menu";

export default function Index() {

  useEffect(() => {
    console.log("Mount");
    document.body.style.backgroundColor = "lightblue";
  
    return () => {
      console.log("Unmount");
      document.body.style.backgroundColor = "";
    }
  },[])

  return (
    <div>
      <Header />
      <Menu />
      <main className={styles.main}>
        <Description page="index" />
        <Images />
        <Links />
      </main>
    </div>
  );
}
