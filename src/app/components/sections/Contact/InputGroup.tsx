interface InputGroupProps {
  label: string;
  placeholder: string;
  type: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error?: boolean;
  textarea?: boolean;
  rows?: number;
}

const InputGroup = ({
  label,
  placeholder,
  type,
  name,
  value,
  onChange,
  error,
  textarea = false,
  rows = 5,
}: InputGroupProps) => {
  const baseClasses = `
    w-full rounded-2xl px-4 py-3
    bg-blue-950/40 border
    ${error ? "border-red-500" : "border-blue-500/20"}
    text-white placeholder:text-white/30
    focus:outline-none focus:border-cyan-400/60
    focus:bg-blue-900/40
    transition-all
  `;

  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] uppercase tracking-widest text-cyan-300/60 ml-1">
        {label}
      </label>
      {textarea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          rows={rows}
          value={value}
          onChange={onChange}
          className={baseClasses + " resize-none"}
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={baseClasses}
        />
      )}
    </div>
  );
};

export default InputGroup;
