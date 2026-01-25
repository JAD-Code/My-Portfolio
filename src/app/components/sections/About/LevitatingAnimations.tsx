"use client";
import { motion } from "framer-motion";
import { Wifi, Battery } from "lucide-react";

const LevitatingAnimations = () => {
  return (
    <div className="flex justify-center items-center p-10 py-20">
      <div
        className="relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] 
        rounded-[45px]"
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateX(15deg) rotateY(-25deg)",
        }}
      >
        <motion.div
          initial={{ transform: "translateZ(10px) translateY(0px)" }}
          animate={{ transform: "translateZ(30px) translateY(-10px)" }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 2.5,
            ease: "easeInOut",
          }}
          className="relative h-[500px] w-[250px] rounded-[45px] 
                       border-2 border-b-4 border-r-4 border-l-neutral-900
                        border-[#1a1a1a] bg-black 
                     overflow-hidden"
        >
          {/*Status Bar*/}
          <div
            className="absolute top-0 w-full px-6 pt-4 flex 
          justify-between items-center z-30"
          >
            {/*left side*/}
            <span className="text-white text-[12px] font-bold">9:41</span>

            {/*Dynamic Island*/}
            <div
              className="h-6 w-20 bg-black rounded-full border
             border-white/50 shadow-inner"
            ></div>

            {/*right side*/}
            <div className="flex items-center gap-1.5 text-white">
              <Wifi size={14} strokeWidth={2.5} />
              <div className="relative">
                <Battery size={18} strokeWidth={2} className="rotate-0" />
              </div>
            </div>
          </div>

          {/*screen content*/}
          <div
            className="absolute inset-0 bg-black flex flex-col 
          justify-center items-center px-4"
          >
            {/*bg*/}
            <div
              className="absolute inset-0 bg-black bg-gradient-to-tr
             from-blue-600/20 via-transparent to-purple-600/10
              opacity-100"
            />

            <div className="relative z-10 text-center space-y-4">
              <h3
                className="text-white text-xl font-bold tracking-tight
               leading-tight"
              >
                I make <span className="text-cyan-400">responsive</span> web
                apps
              </h3>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 px-6 py-2 bg-gradient-to-r from-cyan-500
                 to-blue-600 rounded-full text-white text-sm font-bold 
                 shadow-[0_0_20px_rgba(34,211,238,0.3)]"
              >
                Contact Me
              </motion.button>
            </div>

            <div className="absolute bottom-20 flex gap-1 items-end h-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={i}
                  animate={{ height: [10, 25, 10] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="w-1 bg-cyan-400/40 rounded-full"
                />
              ))}
            </div>
          </div>

          {/*Home Bar*/}
          <div
            className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 
          h-1 bg-white/40 rounded-full z-30"
          ></div>
        </motion.div>
      </div>
    </div>
  );
};

export default LevitatingAnimations;
