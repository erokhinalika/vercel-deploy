"use client";

import { observer } from "mobx-react-lite";
import styles from "@/components/Counter.module.scss";
import Counter from "@/components/Counter";
import { useCounterStore } from "@/store";

const Home = observer(function Home() {
  const store = useCounterStore();

  return (
    <main className={styles.page}>
      <h1>Next + MobX + SASS</h1>
      <p className={styles.note}>
        Текущее значение из стора: <strong>{store.count}</strong>
      </p>
      <Counter />
    </main>
  );
});

export default Home;
