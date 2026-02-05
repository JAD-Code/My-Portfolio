"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode } from "react";
import { useRef } from "react";

type ScrollFadeUpProps = {
  children: ReactNode;
  delay?: number;
};

function ScrollFadeUp({ children, delay = 0 }: ScrollFadeUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <motion.div
      className="w-full"
      ref={ref}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export default ScrollFadeUp;
