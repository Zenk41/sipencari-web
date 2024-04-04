"use client";
import { Switch } from "@headlessui/react";
import { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { toggleMode } from "@/lib/slices/uiSlice";

interface NavProps {}

export default function Nav({}: NavProps) {
  return (
    <nav className="flex space-x-2">
      <NavList rounded="medium" />
      <SwitchMode />
    </nav>
  );
}
interface NavListProps {
  rounded?: "small" | "medium" | "large";
}

export function NavList({ rounded }: NavListProps) {
  const round =
    rounded === "large"
      ? "rounded-lg"
      : rounded === "medium"
      ? "rounded-md"
      : rounded === "small"
      ? "rounded-sm"
      : "";
  return (
    <ul
      className={`${
        round ? round : ""
      } flex space-x-2 border bg-slate-50 w-fit p-1`}
    >
      <div>Home</div>
      <div>Post</div>
      <div>Lest</div>
      <div>Lest</div>
    </ul>
  );
}

export function SwitchMode({}) {
  const [enabled, setEnabled] = useState(false);
  const dispatch = useDispatch();
  
  const toggleModeHandler = () => {
    dispatch(toggleMode());
  };
  return (
    <Switch.Group>
      <div className="flex items-center">
        <Switch
          checked={enabled}
          onChange={toggleModeHandler}
          className={`${
            enabled ? "bg-black" : "bg-gray-200"
          } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2`}
        >
          {enabled ? (
            <MdDarkMode
              className={`${
                enabled ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
            />
          ) : (
            <CiLight
              className={`${
                enabled ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
            />
          )}
        </Switch>
      </div>
    </Switch.Group>
  );
}
