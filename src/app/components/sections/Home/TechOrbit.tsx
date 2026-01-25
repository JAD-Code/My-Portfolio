"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const TechOrbit = () => {
  const [isPaused, setIsPaused] = useState(false);

  const orbitItems = [
    { name: "Pixel-Perfect\nUI" },
    { name: "Performance\nFirst" },
    { name: "Scalable\nArchitecture" },
    { name: "User-Centric\nDesign" },
    { name: "Clean\nCode" },
    { name: "Responsive\nSystems" },
    { name: "Maintainable\nComponents" },
    { name: "Modern\nFrontend" },
  ];

  const radius = 200;

  return (
    <div
      className="relative w-[500px] h-[500px] flex justify-center items-center scale-90 lg:scale-110"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute w-[400px] h-[400px] border border-white/90 rounded-full"
      />
      <div className="absolute w-[250px] h-[250px] border border-white/30 rounded-full" />

      <motion.div
        whileHover={{ scale: 1.1 }}
        className="relative z-10 w-28 h-28 rounded-full bg-[#0a0a0a] border-2 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.3),inset_0_0_20px_rgba(34,211,238,0.1)] flex items-center justify-center cursor-pointer"
      >
        <span className="text-2xl font-fugaz text-white tracking-tighter">
          {"<JAD />"}
        </span>
      </motion.div>
      <motion.div
        className="absolute w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        style={{
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {orbitItems.map((item, index) => {
          const angle = (index / orbitItems.length) * 360;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <div
              key={index}
              className="absolute"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                style={{
                  animationPlayState: isPaused ? "paused" : "running",
                }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    borderColor: "#22d3ee",
                    boxShadow: "0 0 20px rgba(34,211,238,0.5)",
                  }}
                  className="flex items-center justify-center rounded-full
                    border-2 border-cyan-400/50 bg-[#0a0a0a] 
                    shadow-[0_0_15px_rgba(34,211,238,0.1)] 
                    w-24 h-24 p-2 transition-all duration-300"
                >
                  <span className="text-center text-white leading-relaxed text-[11px] font-mono select-none">
                    {item.name.split("\n").map((line, i) => (
                      <span key={i} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                </motion.div>
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default TechOrbit;
