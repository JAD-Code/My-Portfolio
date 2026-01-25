import { TargetAndTransition } from "framer-motion";
import { useRef } from "react";

type TabProps = {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<TargetAndTransition>>;
};

const Tab = ({ children, setPosition }: TabProps) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        const left = ref.current.offsetLeft;
        const extraPadding = 20;
        setPosition({
          width: width + extraPadding,
          opacity: 1,
          left: left - extraPadding / 2,
        });
      }}
      className="relative z-10 block cursor-pointer text-sm
      uppercase text-[var(--color-text-main)] transition-colors duration-300 mx-2 mb-1 py-2 px-2"
    >
      {children}
    </li>
  );
};

export default Tab;
