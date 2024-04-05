import Nav from "./components/nav";
import Post from "./components/post";

export default function Home() {
  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex ">
      <Post size="x-small" />
    </div>
  );
}
