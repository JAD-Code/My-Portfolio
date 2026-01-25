interface TittleProps {
  text: string;
  highlightedText: string;
  bgText: string;
}
const Tittle = ({ text, highlightedText, bgText }: TittleProps) => {
  return (
    // أضفنا relative هنا ليصبح التموضع محصوراً داخل هذا الـ div فقط
    <div className="relative flex justify-center items-center py-10">
      <h2 className="text-5xl lg:text-6xl font-extrabold text-white z-10 text-center">
        {text}{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4facfe] to-[#00f2fe]">
          {highlightedText}
        </span>
      </h2>
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl md:text-8xl lg:text-9xl font-bold text-white/[0.04] select-none pointer-events-none whitespace-nowrap">
        {bgText}
      </span>
    </div>
  );
};

export default Tittle;
