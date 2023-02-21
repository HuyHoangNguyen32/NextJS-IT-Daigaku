import styles from "@/components/css/Main.module.css";
import { Header } from '@/components/Header'
import { Links } from '@/components/Links'
import { Images } from '@/components/Images'
import { Description } from "@/components/Description"

export default function Index() {
  return (
    <div>
      <Header/>
      <main className={styles.main}>
        <Description page="index"/>
        <Images/>
        <Links/>
      </main>
    </div>
  )
}
