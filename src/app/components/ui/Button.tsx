interface ButtonProps {
  colorClass: string;
  text: string;
  href?: string;
  target?: string;
}

const Button = ({ colorClass, text, href, target }: ButtonProps) => {
  return (
    <a
      target={target}
      href={href}
      className={`${colorClass} px-8 py-3 cursor-pointer text-cyan-50 font-semibold uppercase tracking-wider transition-all duration-300`}
    >
      {text}
    </a>
  );
};

export default Button;
