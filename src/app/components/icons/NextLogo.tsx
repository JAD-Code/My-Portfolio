// src/components/icons/NextLogo.tsx
import React from "react";

type NextLogoProps = {
  className?: string;
  fill?: string;
};

const NextLogo: React.FC<NextLogoProps> = ({
  className = "w-12 h-12",
  fill = "black",
}) => {
  return (
    <svg viewBox="0 0 180 180" className={className}>
      <mask
        height="180"
        id="nextjs_mask"
        maskUnits="userSpaceOnUse"
        width="180"
        x="0"
        y="0"
        style={{ maskType: "alpha" }}
      >
        <circle cx="90" cy="90" fill="black" r="90" />
      </mask>
      <g mask="url(#nextjs_mask)">
        <circle cx="90" cy="90" fill={fill} r="90" />
        <path
          d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
          fill="url(#nextjs_paint0_linear)"
        />
        <rect
          fill="url(#nextjs_paint1_linear)"
          height="72"
          width="12"
          x="115"
          y="54"
        />
      </g>
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="nextjs_paint0_linear"
          x1="109"
          x2="144.5"
          y1="116.5"
          y2="160.5"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="nextjs_paint1_linear"
          x1="121"
          x2="120.799"
          y1="54"
          y2="106.875"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default NextLogo;
