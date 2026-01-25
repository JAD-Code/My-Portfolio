"use client";
import { useState } from "react";
import { Target } from "framer-motion";
import Pill from "./Pill";
import Tab from "./Tab";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import HumButton from "./HumButton";

const Navbar = () => {
  const [position, setPosition] = useState<Target>({
    width: 0,
    opacity: 0,
    left: 0,
  });
  return (
    <div className=" fixed top-0 left-0 w-full z-100">
      <div className="flex md:hidden justify-between m-2">
        <Logo />
        <HumButton />
      </div>

      <div className="hidden md:flex justify-between items-center max-w-7xl mx-auto">
        <Logo />

        <ul
          onMouseLeave={() => {
            setPosition((prev) => ({
              ...prev,
              opacity: 0,
            }));
          }}
          className="relative flex mx-auto my-2 p-2
         blue-glass w-fit rounded-full border-2
          shadow-lg shadow-blue-500/5"
        >
          <Tab setPosition={setPosition}>Home</Tab>
          <Tab setPosition={setPosition}>About</Tab>
          <Tab setPosition={setPosition}>Skills</Tab>
          <Tab setPosition={setPosition}>Projects</Tab>
          <Tab setPosition={setPosition}>Certificates</Tab>
          <Tab setPosition={setPosition}>Contact</Tab>

          <Pill position={position} />
        </ul>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
