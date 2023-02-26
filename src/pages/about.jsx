import { useEffect } from "react";
import { Header } from "@/src/components/Header";
import { Images } from "@/src/components/Images";
import { Description } from "@/src/components/Description";
import { Menu } from "@/src/components/Menu";
import { Links } from "@/src/components/Links";
import styles from "@/src/components/css/Main.module.css";

export default function Home() {

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
        <Description page="about" number={123} boolean />
        <Images />
        <Links/>
      </main>
    </div>
  );
}
