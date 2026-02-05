"use client";
import { motion } from "framer-motion";
import ScrollFadeUp from "../../ui/ScrollFadeUp";
interface CircleAnimationProps {
  icon: React.ReactNode;
  tittle: string;
}
const CircleAnimation = ({ icon, tittle }: CircleAnimationProps) => {
  return (
    <div
      className="relative w-[100px] h-[100px] mx-auto my-10 
    flex items-center justify-center"
    >
      <motion.div
        initial={{ rotate: 0, opacity: 0 }}
        whileInView={{
          rotate: 360,
          opacity: [0, 1, 1, 0],
        }}
        viewport={{ once: false, amount: 0.9 }}
        transition={{
          duration: 1,
          times: [0, 0.1, 0.9, 1],
          ease: "easeOut",
        }}
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0%, #22d3ee 40%, #ffffff 50%, transparent 60%)",
        }}
        className="absolute inset-0 rounded-full z-0 blur-[2px]"
      />

      <motion.div
        whileHover={{
          scale: 1.1,
          boxShadow: "0 0 25px rgba(34,211,238,0.6)",
        }}
        className="relative z-10 w-full h-full rounded-full 
                   grid place-content-center bg-cyan-500/40 
                   shadow-[0_0_15px_rgba(34,211,238,0.2)] cursor-pointer"
      >
        <div
          className="absolute inset-[3px] rounded-full bg-black 
                     bg-gradient-to-tr from-blue-600/40 via-transparent
                      to-purple-600/20 "
        >
          <div className="flex items-center justify-center w-full h-full">
            {icon}
          </div>
          <p className="text-white text-xl text-center mt-2">{tittle}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default CircleAnimation;
