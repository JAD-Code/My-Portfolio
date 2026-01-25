"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypingAnimationProps {
  words: string[];
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  const typingSpeed = 75;
  const deletingSpeed = 20;
  const pauseTime = 2000;

  useEffect(() => {
    if (words.length === 0) return;

    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), pauseTime);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      reverse ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <div className="flex items-center text-lg font-bold uppercase tracking-wider">
      <p>
        <span className="mr-2 text-black dark:text-white">I'M A</span>

        <span className="relative inline-block text-black dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r from-[#02668a] via-[#63b3f1] to-[#55d7f7]">
          {words[index].substring(0, subIndex)}

          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="inline-block w-[3px] h-5 bg-[#55d7f7] ml-1 align-middle shadow-[0_0_8px_#55d7f7]"
          />
        </span>
      </p>
    </div>
  );
};

export default TypingAnimation;
