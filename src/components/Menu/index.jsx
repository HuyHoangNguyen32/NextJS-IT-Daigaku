import Link from "next/link";
import styles from "@/src/components/Menu/Menu.module.css";

export function Menu() {
  return (
    <header className={styles.menu}>
      <Link href="/" className={styles.anchor}>
        Index
      </Link>
      <Link href="/about" className={styles.anchor}>
        About
      </Link>
    </header>
  );
}
