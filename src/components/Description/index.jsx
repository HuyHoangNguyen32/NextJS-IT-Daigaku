import { Logo } from "@/src/components/Logo";
import styles from "@/src/components/Description/Description.module.css"

export const Description = (props) => {

  const { page, boolean } = props

  console.log(boolean)

  return (
    <div className={styles.description}>
      <p>
        Get started by editing&nbsp;
        <code className={styles.code}>pages/{page}.js</code>
      </p>
      <Logo />
    </div>
  );
};
