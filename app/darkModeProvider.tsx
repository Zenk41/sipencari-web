"use client";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import Nav from "./components/nav";
import { Inter } from "next/font/google";

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
      className={`${
        darkMode ? "dark" : ""
      } flex min-h-screen flex-col items-center justify-between p-24 ${
        inter.className
      }`}
    >
      <body className="dark:bg-black">
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
