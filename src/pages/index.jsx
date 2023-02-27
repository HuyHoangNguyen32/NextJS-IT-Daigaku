import styles from "@/src/components/css/Main.module.css";
import { Header } from "@/src/components/Header";
import { Links } from "@/src/components/Links";
import { Images } from "@/src/components/Images";
import { useEffect, useState } from "react";
import { Description } from "@/src/components/Description";
import { Menu } from "@/src/components/Menu";

export default function Index() {

  // ! Ví dụ sử dụng useEffect
  useEffect(() => {
    console.log("Mount");
    document.body.style.backgroundColor = "lightblue";

    return () => {
      console.log("Unmount");
      document.body.style.backgroundColor = "";
    };
  }, []);

  // ! Ví dụ sử dụng useState
  // Không sử dụng useState thì number tăng sẽ không hiển thị ra màn hìnhh, có thể xác nhận number đã tăng tăn bằng cách sử dụng console.log lo
  /*let count = 1
  function handleClick() {
    count += 1
    console.log(count)
  }*/

  // Khi sử dụng useState giá trị tăng sẽ được cập nhật và mỗi lần như vậy react sẽ render lại component để hiển thị giá trị thay đổi đổi ra màn hình
  const [count, setCount] = useState(1)

  // Cách viết "count + 1" như dưới đây là không nên, dù viết hai lần nhưng giá trị chỉ tăng có một lần mà thôi
  /*function handleClick() {
    setCount(count + 1)
    setCount(count + 1)
  }*/

  // Viết như dưới đây giá trị sẽ tăng lên 2 sau mỗi lần click
  function handleClick() {
    setCount(count => count + 1)
    setCount(count => count + 1)
  }

  return (
    <div>
      <Header />
      <Menu />
      <main className={styles.main}>
        <div>
          <h1>{count}</h1>
          <br />
          <button onClick={handleClick}>Click</button>
        </div>
        <Description page="index" />
        <Images />
        <Links />
      </main>
    </div>
  );
}
