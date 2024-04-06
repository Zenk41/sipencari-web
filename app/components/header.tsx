import Image from "next/image";
import SwitchMode from "./switchMode";
import Nav from "./nav";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const currentPath = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrolledDown = prevScrollPos < currentScrollPos;

      setIsVisible(currentScrollPos < 10 || isScrolledDown); // Header is visible if scrolled to top or scrolling down
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  return (
    <header
      className={`flex m-auto justify-between items-center sticky top-0 z-50 transition-all duration-300 rounded-b-xl bg-white shadow-md shadow-bottom px-2 ${
        isVisible ? "bg-white shadow-md shadow-bottom" : ""
      } ${!isVisible ? "hidden" : ""}`}
    >
      <Image src="/icon/icon-text.png" alt="" width={150} height={75} />
      <Nav />
      <SwitchMode />
    </header>
  );
};

export default Header;
