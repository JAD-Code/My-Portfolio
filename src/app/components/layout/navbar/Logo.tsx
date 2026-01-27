import { motion } from "framer-motion";
import React from "react";

const Logo = () => {
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="font-fugaz cursor-pointer select-none group relative z-[110]"
    >
      <a
        href="#home"
        onClick={handleScrollToTop}
        className="flex items-center text-2xl tracking-tighter"
      >
        <span className="text-[#4facfe] drop-shadow-[0_0_8px_#4facfe]">
          {"<"}
        </span>

        <h1 className="text-white mx-0.5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#4facfe] group-hover:to-[#00f2fe] transition-all duration-300">
          JAD
        </h1>

        <span className="text-[#4facfe] drop-shadow-[0_0_8px_#4facfe]">
          {" />"}
        </span>
      </a>
    </motion.div>
  );
};

export default Logo;
