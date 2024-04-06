"use client";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import Nav from "./components/nav";
import { Inter } from "next/font/google";
import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export default function DarkModeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const darkMode = useSelector((state: RootState) => state.ui.darkMode);
  return (
    <html
      lang="en"
      className={`${darkMode ? "dark" : ""} justify-between p-2 ${
        inter.className
      }`}
    >
      <body className="dark:bg-black max-w-screen-xl m-auto">
        <Header />
        <main className="p-5">{children}</main>
      </body>
    </html>
  );
}
