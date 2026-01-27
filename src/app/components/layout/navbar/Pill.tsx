import { motion, Target } from "framer-motion";

interface PillProps {
  position: Target;
}

const Pill = ({ position }: PillProps) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-9 rounded-full blue-glass pointer-events-none"
    />
  );
};

export default Pill;
