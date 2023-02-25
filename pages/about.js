import styles from "@/components/css/Main.module.css";
import { Header } from "@/components/Header";
import { Links } from "@/components/Links";
import { Images } from "@/components/Images";
import { Description } from "@/components/Description";
import { Menu } from "@/components/Menu";

export default function Home() {
  return (
    <div>
      <Header />
      <Menu/>
      <main className={styles.main}>
        <Description 
          page="about"
          number={123}
          boolean
        />
        <Images />
        <Links />
      </main>
    </div>
  );
}
