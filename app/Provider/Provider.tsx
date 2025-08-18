"use client";

import * as React from "react";
import { CounterStore, CounterStoreProvider } from "@/store";
import { useLocalStore } from "@/hooks/useLocalStore";

export function Providers({ children }: { children: React.ReactNode }) {
  const store = useLocalStore(() => new CounterStore());
  return <CounterStoreProvider store={store}>{children}</CounterStoreProvider>;
}


