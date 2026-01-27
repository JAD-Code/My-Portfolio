"use client";
import { useState } from "react";
import { Target } from "framer-motion";
import Pill from "./Pill";
import Tab from "./Tab";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import HamMenu from "./HamMenu";

const Navbar = () => {
  const [position, setPosition] = useState<Target>({
    width: 0,
    opacity: 0,
    left: 0,
  });
  return (
    <div className="fixed top-0 left-0 w-full z-50 pointer-events-auto">
      <div className="flex lg:hidden justify-between m-2 items-center px-4 py-2">
        <Logo />
        <HamMenu />
      </div>
      <div className="hidden lg:flex justify-between items-center max-w-7xl mx-auto">
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
          <Tab setPosition={setPosition} href="##home">
            Home
          </Tab>
          <Tab setPosition={setPosition} href="##about">
            About
          </Tab>
          <Tab setPosition={setPosition} href="##skills">
            Skills
          </Tab>
          <Tab setPosition={setPosition} href="##projects">
            Projects
          </Tab>
          <Tab setPosition={setPosition} href="##certificates">
            Certificates
          </Tab>
          <Tab setPosition={setPosition} href="##contact">
            Contact
          </Tab>
          <Pill position={position} />
        </ul>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
