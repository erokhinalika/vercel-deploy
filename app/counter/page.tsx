"use client";

import { observer } from "mobx-react-lite";
import Counter from "@/components/Counter";
import styles from "@/components/Counter.module.scss";

const CounterPage = observer(function CounterPage() {
  return (
    <main className={styles.page}>
      <h1>Counter</h1>
      <p className={styles.note}>Отдельная страница со счётчиком.</p>
      <Counter />
    </main>
  );
});

export default CounterPage;


