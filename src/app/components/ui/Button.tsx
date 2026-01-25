interface ButtonProps {
  colorClass: string;
  text: string;
  onClick?: () => void;
}

const Button = ({ colorClass, text, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${colorClass} px-8 py-3 cursor-pointer text-cyan-50 font-semibold uppercase tracking-wider transition-all duration-300`}
    >
      {text}
    </button>
  );
};

export default Button;
