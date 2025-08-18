export const metadata = {
  title: "Next + MobX + SASS Starter",
  description: "Minimal scaffold"
};

import "./globals.scss";
import Link from "next/link";
import { Providers } from "./Provider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <Providers>
          <nav>
            <Link href="/">Главная</Link>
            {" "}|{" "}
            <Link href="/about">About</Link>
            {" "}|{" "}
            <Link href="/counter">Counter</Link>
            {" "}|{" "}
            <Link href="/actions">Server Actions</Link>
          </nav>
          {children}
        </Providers>
      </body>
    </html>
  );
}
