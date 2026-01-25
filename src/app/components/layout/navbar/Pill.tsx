import { animate, motion, Target } from "framer-motion";

interface PillProps {
  position: Target;
}

const Pill = ({ position }: PillProps) => {
  return (
    <motion.li
      animate={position}
      className="blue-glass-pill absolute inset-y-0 my-auto z-0 h-12 rounded-full"
    />
  );
};

export default Pill;
