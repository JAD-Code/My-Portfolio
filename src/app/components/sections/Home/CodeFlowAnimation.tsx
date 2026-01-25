"use client";
import { motion } from "framer-motion";

const codeLines = [
  "const signal = new Waveform();",
  "signal.transmit(dataPacket);",
  "if (packet.isValid()) {",
  "  renderUI(packet.payload);",
  "} else {",
  "  retransmit(packet.id);",
  "}",
  "// Connection stable @ 5Ghz",
  "const frontend = new ReactApp();",
  "frontend.init(UserInterface);",
  "// Data stream optimized",
];

const CodeFlowAnimation = () => {
  return (
    <div className="relative w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] flex justify-center items-center">
      <motion.div
        className="absolute inset-0 blue-glass rounded-xl p-6 flex flex-col justify-around text-blue-200 font-mono text-sm shadow-2xl"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {codeLines.map((line, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: index * 0.1,
              duration: 0.5,
              ease: "easeOut",
            }}
            className="block text-white/70 hover:text-cyan-300 transition-colors cursor-default"
          >
            {line}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default CodeFlowAnimation;
