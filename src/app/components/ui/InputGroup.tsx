interface InputGroupProps {
  label: string;
  placeholder: string;
  type: string;
}

const InputGroup = ({ label, placeholder, type }: InputGroupProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] uppercase tracking-widest text-cyan-300/60 ml-1">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="
          w-full rounded-2xl px-4 py-3
          bg-blue-950/40 border border-blue-500/20
          text-white placeholder:text-white/30
          focus:outline-none focus:border-cyan-400/60
          focus:bg-blue-900/40
          transition-all
        "
      />
    </div>
  );
};

export default InputGroup;
