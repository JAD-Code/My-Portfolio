import {
  motion,
  useAnimate,
  useDragControls,
  useMotionValue,
} from "framer-motion";
import React, { Dispatch, SetStateAction, ReactNode, useEffect } from "react";

interface DrawerProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({ open, setOpen, children }) => {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const control = useDragControls();
  const y = useMotionValue(0);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);
  const handelClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? (y.get() as number) : 0;

    await animate("#drawer", {
      y: [yStart, 500],
    });

    setOpen(false);
  };

  return (
    <>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handelClose}
          ref={scope}
          className="fixed inset-0 z-50 bg-neutral-950/70"
        >
          <motion.div
            id="drawer"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            style={{ y }}
            transition={{
              ease: "easeInOut",
            }}
            onClick={(e) => e.stopPropagation()}
            drag="y"
            onDragEnd={() => {
              if (y.get() >= 120) {
                handelClose();
              }
            }}
            dragControls={control}
            dragListener={false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={{
              top: 0,
              bottom: 1,
            }}
            className="absolute bottom-0 h-[75vh] w-full overflow-hidden 
                       rounded-t-3xl bg-neutral-900 shadow-xl"
          >
            {/* Header / Drag Handle Area */}
            <div
              className="absolute left-0 right-0 top-0 z-10 flex 
            items-center justify-center p-4 bg-neutral-900/50 
            backdrop-blur-md"
            >
              <button
                onPointerDown={(e) => control.start(e)}
                className="h-1.5 w-16 cursor-grab touch-none rounded-full
                           bg-neutral-700 active:cursor-grabbing
                           hover:bg-neutral-600 transition-colors"
                aria-label="Drag handle"
              ></button>

              <button
                onClick={handelClose}
                className="absolute right-5 flex items-center 
                           justify-center rounded-full w-9 h-9 text-neutral-400
                           hover:bg-neutral-800 hover:text-white transition-all 
                           font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Content Area */}
            <div
              className="relative z-0 h-full overflow-y-auto p-4 pt-16
          
    [&::-webkit-scrollbar]:w-2
   
    [&::-webkit-scrollbar-track]:bg-neutral-800
   
    [&::-webkit-scrollbar-thumb]:bg-neutral-600
    
    [&::-webkit-scrollbar-thumb]:rounded-full
   
    hover:[&::-webkit-scrollbar-thumb]:bg-blue-500
    
    [scrollbar-width:thin]
    [scrollbar-color:#525252_#262626]"
            >
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Drawer;
