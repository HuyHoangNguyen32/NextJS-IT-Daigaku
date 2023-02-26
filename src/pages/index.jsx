import styles from "@/src/components/css/Main.module.css";
import { Header } from "@/src/components/Header";
import { Links } from "@/src/components/Links";
import { Images } from "@/src/components/Images";
import { Description } from "@/src/components/Description";
import { Menu } from "@/src/components/Menu";

export default function Index() {
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
