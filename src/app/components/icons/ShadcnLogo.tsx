import React from "react";

type ShadcnLogoProps = {
  className?: string;
};

const ShadcnLogo: React.FC<ShadcnLogoProps> = ({ className = "w-12 h-12" }) => {
  return (
    <svg
      viewBox="0 0 256 256"
      preserveAspectRatio="xMidYMid"
      className={className}
    >
      <path fill="none" d="M0 0h256v256H0z" />
      <path
        fill="none"
        stroke="#fff"
        strokeWidth="25"
        strokeLinecap="round"
        d="M208 128l-80 80M192 40L40 192"
      />
    </svg>
  );
};

export default ShadcnLogo;
