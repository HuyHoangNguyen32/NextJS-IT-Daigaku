import styles from "@/src/components/css/Main.module.css";
import { Header } from "@/src/components/Header";
import { Links } from "@/src/components/Links";
import { Images } from "@/src/components/Images";
import { useEffect, useState, useCallback } from "react";
import { Description } from "@/src/components/Description";
import { Menu } from "@/src/components/Menu";

export default function Index() {

  // ! Ví dụ sử dụng useState & useCallback
  // Không sử dụng useState thì number tăng sẽ không hiển thị ra màn hìnhh, có thể xác nhận number đã tăng tăn bằng cách sử dụng console.log lo
  /*let count = 1
  function handleClickUp() {
    count += 1
    console.log(count)
  }*/

  // Khi sử dụng useState giá trị tăng sẽ được cập nhật và mỗi lần như vậy react sẽ render lại component để hiển thị giá trị thay đổi đổi ra màn hình
  const [countUp, setCountUp] = useState(1)
  const [countDown, setCountDown] = useState(100)

  // Cách viết "count + 1" như dưới đây là không nên, dù viết hai lần nhưng giá trị chỉ tăng có một lần mà thôi
  /*function handleClickUp() {
    setCount(count + 1)
    setCount(count + 1)
  }*/

  //Viết như dưới đây giá trị sẽ tăng lên 2 sau mỗi lần click
  const handleClickUp = useCallback(() => {
    console.log("Count Up : ", countUp)
    if (countUp < 10) {
      setCountUp(countUp => countUp + 1)
    }
  },[countUp])

  // function handleClickUp() {
  //   if (countUp < 10) {
  //     setCountUp(countUp => countUp + 1)
  //     console.log("Count Up")
  //   }
  // }

  function handleClickDown() {
    console.log("Count Down")
    setCountDown(countDown => countDown - 1)
    setCountDown(countDown => countDown - 1)
  }

  // ! Ví dụ sử dụng useEffect
  // Có thể truyền vào trong [] của useEffect nhiều giá trị, khi một trong các giá trị này thay đổi thì useEffect sẽ được chạy
  useEffect(() => {
    console.log(`Mount -> CountUp : ${countUp}, CountDown : ${countDown}`);
    document.body.style.backgroundColor = "lightblue";

    return () => {
      console.log(`Unmount -> CountDown : ${countUp}, CountDown : ${countDown}`);
      document.body.style.backgroundColor = "";
    };
  }, [countUp, countDown]);

  return (
    <div>
      <Header />
      <Menu />
      <main className={styles.main}>
        <div>
          <h1>{countUp}</h1>
          <h1>{countDown}</h1>
          <br />
          <button onClick={handleClickUp}>Click Up</button>
          <button onClick={handleClickDown}>Click Down</button>
        </div>
        <Description page="index" />
        <Images />
        <Links />
      </main>
    </div>
  );
}
