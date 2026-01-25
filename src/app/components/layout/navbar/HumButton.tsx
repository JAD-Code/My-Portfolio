import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { useState } from "react";

type styleProps = {
  duration: number;
};

const HumButton = () => {
  const [active, setActive] = useState(false);

  return (
    <nav>
      <MotionConfig
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <motion.button
          initial={false}
          onClick={() => setActive((prv) => !prv)}
          animate={active ? "open" : "closed"}
          className="relative h-17 w-17 rounded-full blue-glass-hover cursor-pointer"
        >
          <motion.span
            style={{
              left: "50%",
              top: "35%",
              x: "-50%",
              y: "-50%",
            }}
            variants={{
              open: {
                rotate: ["0deg", "0deg", "-45deg"],
                top: ["35%", "35%", "50%"],
              },
              closed: {
                rotate: ["-45deg", "-45deg", "0deg"],
                top: ["50%", "50%", "35%"],
              },
            }}
            className="absolute h-1 w-10 bg-white items-center"
          />
          <motion.span
            style={{
              left: "50%",
              top: "50%",
              x: "-50%",
              y: "-50%",
            }}
            variants={{
              open: {
                rotate: ["0deg", "0deg", "45deg"],
              },
              closed: {
                rotate: ["45deg", "45deg", "0deg"],
              },
            }}
            className="absolute h-1 w-10 bg-white items-center"
          />
          <motion.span
            style={{
              left: "calc(50% + 10px)",
              bottom: "35%",
              x: "-50%",
              y: "50%",
            }}
            variants={{
              open: {
                rotate: ["0deg", "0deg", "45deg"],
                bottom: ["35%", "35%", "50%"],
                left: "50%",
              },
              closed: {
                rotate: ["45deg", "0deg"],
                left: "calc(50% + 10px)",
                bottom: ["50%", "35%"],
              },
            }}
            className="absolute h-1 w-5 bg-white items-center"
          />
        </motion.button>
      </MotionConfig>
      <AnimatePresence>
        {active && (
          <motion.div
            key="mobile-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              open: {
                scaleY: [0, 0, 1],
                scaleX: [0, 0, 1],
              },
              closed: {
                scaleY: [1, 1, 0],
                scaleX: [1, 1, 0],
              },
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="fixed origin-top-right inset-0 top-20 z-[-1] md:hidden"
          >
            <div
              className="blue-glass mx-4 p-8 flex flex-col items-center
          gap-8 shadow-2xl border-white/20"
            >
              <ul className="flex flex-col items-center w-full gap-6">
                {[
                  "Home",
                  "About",
                  "Certificates",
                  "Projects",
                  "Skills",
                  "Contact",
                ].map((link) => (
                  <motion.li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      onClick={() => setActive(false)}
                      className="text-2xl font-bold tracking-widest
                     block w-full
                    py-2 border-b border-white/50"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default HumButton;
