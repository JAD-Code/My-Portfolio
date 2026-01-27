import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { useState, useEffect } from "react";
import { Home, User, GraduationCap, Briefcase, Cpu, Mail } from "lucide-react";

const HamMenu = () => {
  const [active, setActive] = useState(false);

  const navLinks = [
    { id: "#home", label: "Home", icon: <Home size={20} /> },
    { id: "#about", label: "About", icon: <User size={20} /> },
    { id: "#skills", label: "Skills", icon: <Cpu size={20} /> },
    { id: "#projects", label: "Projects", icon: <Briefcase size={20} /> },
    {
      id: "#certificates",
      label: "Certificates",
      icon: <GraduationCap size={20} />,
    },
    { id: "#contact", label: "Contact", icon: <Mail size={20} /> },
  ];

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [active]);

  return (
    <nav className="relative z-50">
      <MotionConfig
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
      >
        <motion.button
          initial={false}
          onClick={() => setActive((prv) => !prv)}
          animate={active ? "open" : "closed"}
          className="relative h-16 w-16 rounded-full blue-glass-hover 
          cursor-pointer z-[60]"
        >
          <motion.span
            style={{ left: "50%", top: "35%", x: "-50%", y: "-50%" }}
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
            className="absolute h-1 w-10 bg-white"
          />
          <motion.span
            style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
            variants={{
              open: { rotate: ["0deg", "0deg", "45deg"] },
              closed: { rotate: ["45deg", "45deg", "0deg"] },
            }}
            className="absolute h-1 w-10 bg-white"
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
            className="absolute h-1 w-5 bg-white"
          />
        </motion.button>
      </MotionConfig>

      <AnimatePresence>
        {active && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(false)}
              className="fixed inset-0 z-40 lg:hidden bg-black/20 
              backdrop-blur-sm"
            />

            <motion.div
              key="mobile-menu"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  clipPath: "circle(150% at 100% 0%)",
                  transition: { type: "spring", stiffness: 20, restDelta: 2 },
                },
                closed: {
                  clipPath: "circle(0% at 100% 0%)",
                  transition: {
                    delay: 0.2,
                    type: "spring",
                    stiffness: 400,
                    damping: 40,
                  },
                },
              }}
              className="fixed inset-0 blue-glass z-50 lg:hidden flex 
              flex-col items-center justify-center"
            >
              <div className="w-full max-w-md px-10">
                <ul className="flex flex-col gap-4 w-full">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.id}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="w-full"
                    >
                      <a
                        href={`#${link.id.toLowerCase()}`}
                        onClick={() => setActive(false)}
                        className="flex items-center gap-6 text-3xl font-bold 
                        tracking-[0.1em] text-white py-4 border-b
                         border-white/10 
                        transition-all duration-300 group
                        hover:text-[#4facfe] hover:translate-x-2"
                      >
                        <span
                          className="text-[#4facfe] group-hover:scale-125 
                          transition-transform duration-300"
                        >
                          {link.icon}
                        </span>
                        <span
                          className="group-hover:bg-gradient-to-r
                         group-hover:from-[#4facfe] 
                         group-hover:to-[#00f2fe] group-hover:bg-clip-text 
                         group-hover:text-transparent transition-all 
                         duration-300"
                        >
                          {link.label}
                        </span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default HamMenu;
