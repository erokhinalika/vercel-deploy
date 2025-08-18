"use client";

import { observer } from "mobx-react-lite";
import styles from "./Counter.module.scss";
import { useCounterStore } from "@/store";

const Counter = observer(function Counter() {
  const store = useCounterStore();

  return (
    <div className={styles.card}>
      <div className={styles.value}>{store.count}</div>
      <div className={styles.row}>
        <button onClick={store.decrement}>-1</button>
        <button onClick={store.increment}>+1</button>
        <button onClick={() => store.add(5)}>+5</button>
        <button onClick={store.reset}>Reset</button>
      </div>
    </div>
  );
});

export default Counter;
