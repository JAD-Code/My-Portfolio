"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import Drawer from "../Drawer";

interface CardProps {
  img: StaticImageData | string;
  title: string;
  subTitle: string;
  logos?: React.ReactNode[];
  repoLink?: string;
  isPublic?: boolean;
}

const Card: React.FC<CardProps> = ({
  img,
  title,
  subTitle,
  logos = [],
  repoLink = "#",
  isPublic = true,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="group w-full max-w-sm overflow-hidden rounded-2xl
      bg-neutral-900 border-4 border-neutral-800 hover:border-blue-500/50
      transition-all duration-300 shadow-2xl hover:shadow-blue-500/10 relative"
    >
      {/* GitHub Notch */}
      <a
        href={repoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-0 right-0 z-20 flex items-center gap-2 
                   bg-neutral-800/90 backdrop-blur-md px-3 py-1.5 
                   rounded-bl-xl border-l border-b border-neutral-700
                   hover:bg-blue-600 transition-all duration-300 
                   group/notch"
      >
        <svg
          className="w-4 h-4 fill-white group-hover/notch:scale-110 
          transition-transform"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
        <span
          className="text-[10px] font-bold text-white 
        tracking-tight uppercase"
        >
          {isPublic ? "Public" : "Private"}
        </span>
      </a>

      {/* Image Section */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={img}
          alt={title}
          className="object-cover transition-transform duration-500 
          group-hover:scale-110"
          fill
          loading="lazy"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t
         from-neutral-900 via-transparent to-transparent opacity-60"
        />
      </div>

      {/* Content Section */}
      <div className="p-5">
        <h2
          className="text-xl font-bold text-white mb-2 
        transition-all duration-300 group-hover:text-blue-400"
        >
          {title}
        </h2>

        <p
          className="text-sm leading-relaxed text-neutral-400 mb-4 
        line-clamp-3"
        >
          {subTitle}
        </p>

        {/* Tech Stack Logos */}
        {logos.length > 0 && (
          <div
            className="flex items-center gap-4 pt-4 border-t
           border-neutral-800"
          >
            {logos.map((logo, idx) => (
              <div
                key={idx}
                className="opacity-60 hover:opacity-100 transition-opacity 
                grayscale hover:grayscale-0"
              >
                {logo}
              </div>
            ))}
          </div>
        )}

        {/* Action Button */}
        <div className="flex justify-end mt-4">
          <button
            onClick={() => setOpen(true)}
            className="text-[11px] font-semibold uppercase 
            tracking-[0.15em] text-neutral-500 hover:text-blue-400 
            transition-colors flex items-center gap-1 group/btn cursor-pointer"
          >
            View Details
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
        </div>

        {/* Modal/Drawer Component */}
        <Drawer open={open} setOpen={setOpen}>
          <div className="text-white max-w-2xl mx-auto">
            <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-2xl mb-8 shadow-2xl border border-neutral-800">
              <Image
                src={img}
                alt={title}
                className="object-cover"
                fill
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent" />
            </div>

            <div className="space-y-4 px-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h3 className="text-3xl font-extrabold tracking-tight text-white">
                  {title}
                </h3>
                <a
                  href={repoLink}
                  target="_blank"
                  className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold py-2 px-6 rounded-full transition-all text-center"
                >
                  Visit Repository
                </a>
              </div>

              <div className="h-1 w-full bg-blue-500 rounded-full" />

              <p className="text-lg text-neutral-300 leading-relaxed font-light">
                {subTitle}
              </p>

              <div className="pt-6">
                <h4 className="text-sm font-semibold uppercase tracking-widest text-neutral-500 mb-4">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-3">
                  {logos.map((logo, idx) => (
                    <div
                      key={idx}
                      className="bg-neutral-800 p-3 rounded-xl border border-neutral-700"
                    >
                      {logo}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default Card;
