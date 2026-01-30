import React from "react";

type CssLogoProps = {
  className?: string;
  colorPrimary?: string;
  colorSecondary?: string;
  colorTertiary?: string;
  colorAccent?: string;
};

const CssLogo: React.FC<CssLogoProps> = ({
  className = "w-12 h-12",
  colorPrimary = "#264de4",
  colorSecondary = "#2965f1",
  colorTertiary = "#ebebeb",
  colorAccent = "#fff",
}) => {
  return (
    <svg viewBox="0 0 512 512" className={className}>
      <path
        fill={colorPrimary}
        d="M71.357 460.819 30.272 0h451.456l-41.129 460.746L255.724 512z"
      />
      <path
        fill={colorSecondary}
        d="m405.388 431.408 35.148-393.73H256v435.146z"
      />
      <path
        fill={colorTertiary}
        d="m124.46 208.59 5.065 56.517H256V208.59zm-5.041-57.875H256V94.197H114.281zM256 355.372l-.248.066-62.944-16.996-4.023-45.076h-56.736l7.919 88.741 115.772 32.14.26-.073z"
      />
      <path
        fill={colorAccent}
        d="M255.805 208.59v56.517H325.4l-6.56 73.299-63.035 17.013v58.8l115.864-32.112.85-9.549 13.28-148.792 1.38-15.176 10.203-114.393H255.805v56.518h79.639L330.3 208.59z"
      />
    </svg>
  );
};

export default CssLogo;
