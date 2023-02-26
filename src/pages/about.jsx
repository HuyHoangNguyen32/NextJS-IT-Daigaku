import styles from "@/src/components/css/Main.module.css";
import { Header } from "@/src/components/Header";
import { Images } from "@/src/components/Images";
import { Description } from "@/src/components/Description";
import { Menu } from "@/src/components/Menu";
import { Links } from "@/src/components/Links";

export default function Home() {
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
