import Image from "next/image";

interface PostProps {
  size: "x-small"| "small" | "medium" | "large";
  
}

export default function Post({ size }: PostProps) {
  const sizePost: { str: String; num: number } =
    size === "large"
      ? { str: "lg", num: 500 }
      : size === "medium"
      ? { str: "md", num: 250 }
      : size === "small" ? { str: "sm", num: 175 } : { str: "xs", num: 87.5 }
  return (
    <div className="border rounded-sm bg-slate-100 w-fit p-1">
      <Image
        src="/example1.jpg"
        width={sizePost.num}
        height={sizePost.num}
        alt="PostAlt"
        className="rounded-sm m-auto"
      />
      <h1 className="text-xs">Missing People</h1>
    </div>
  );
}
