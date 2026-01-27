interface TittleProps {
  text: string;
  highlightedText: string;
  bgText: string;
}
const Tittle = ({ text, highlightedText, bgText }: TittleProps) => {
  return (
    <div className="relative flex justify-center items-center py-10">
      <h2
        className="text-4xl lg:text-6xl font-extrabold text-white 
      z-10 text-center"
      >
        {text}{" "}
        <span
          className="text-transparent bg-clip-text 
        bg-gradient-to-r from-[#4facfe] to-[#00f2fe]"
        >
          {highlightedText}
        </span>
      </h2>
      <span
        className="absolute top-1/2 left-1/2 -translate-x-1/2 
      -translate-y-1/2 text-[70px] md:text-8xl lg:text-[105px] font-bold
       text-white/[0.06] select-none pointer-events-none whitespace-nowrap"
      >
        {bgText}
      </span>
    </div>
  );
};

export default Tittle;
