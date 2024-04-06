import Link from "next/link";

interface NavProps {}

export default function Nav({}: NavProps) {
  return (
    <nav className="flex space-x-2">
      <NavList
        rounded="medium"
        list={[
          { href: "/", name: "Home" },
          { href: "/post", name: "Post" },
        ]}
        size="x-small"
      />
    </nav>
  );
}
interface NavListProps {
  rounded?: "small" | "medium" | "large";
  size?: "x-small" | "small" | "medium" | "large";
  list: { href: string; name: string }[];
}

export function NavList({ rounded, size, list }: NavListProps) {
  const round =
    rounded === "large"
      ? "rounded-lg"
      : rounded === "medium"
      ? "rounded-md"
      : rounded === "small"
      ? "rounded-sm"
      : "";
  const sizeList =
    size === "large"
      ? "text-lg"
      : size === "medium"
      ? "text-md"
      : size === "small"
      ? "text-sm"
      : "text-xs";
  return (
    <ul
      className={`${round ? round : ""} ${
        sizeList ? sizeList : ""
      } space-x-2 hidden sm:flex items-center justify-center bg-slate-50 w-fit p-1 h-fit`}
    >
      {list.map((l) => (
        <Link href={l.href}>{l.name}</Link>
      ))}
    </ul>
  );
}
