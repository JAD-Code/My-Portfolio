import React from "react";

type HtmlLogoProps = {
  className?: string;
  colorPrimary?: string;
  colorSecondary?: string;
  colorTertiary?: string;
  colorAccent?: string;
};

const HtmlLogo: React.FC<HtmlLogoProps> = ({
  className = "w-12 h-12",
  colorPrimary = "#e34f26",
  colorSecondary = "#ef652a",
  colorTertiary = "#ecedee",
  colorAccent = "#fff",
}) => {
  return (
    <svg viewBox="0 0 452 520" className={className}>
      <path fill={colorPrimary} d="M41 460L0 0h451l-41 460-185 52" />
      <path fill={colorSecondary} d="M226 472l149-41 35-394H226" />
      <path
        fill={colorTertiary}
        d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"
      />
      <path
        fill={colorAccent}
        d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"
      />
    </svg>
  );
};

export default HtmlLogo;
