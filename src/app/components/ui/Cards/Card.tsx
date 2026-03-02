"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState, useRef, useEffect } from "react";
import Drawer from "../Drawer";
import GitHubLogo from "@/src/app/components/icons/GitHubLogo";
import { ExternalLinkIcon } from "lucide-react";
import ScrollFadeUp from "../ScrollFadeUp";
import { div } from "framer-motion/client";

interface CardProps {
  img: StaticImageData | string;
  videoSrc?: string;
  title: string;
  subTitle: string;
  longSubTitle?: string;
  logos?: React.ReactNode[];
  demoLink?: string;
  repoLink?: string;
  isPublic?: boolean;
  certificate?: boolean;
}

let activeVideo: HTMLVideoElement | null = null;

const Card: React.FC<CardProps> = ({
  img,
  videoSrc,
  title,
  subTitle,
  longSubTitle,
  logos = [],
  demoLink,
  repoLink,
  isPublic = true,
  certificate = false,
}) => {
  const [open, setOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [touchTimer, setTouchTimer] = useState<NodeJS.Timeout | null>(null);

  const cardVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (open && cardVideoRef.current) {
      cardVideoRef.current.pause();
    }
  }, [open]);

  return (
    <ScrollFadeUp>
      <div
        onClick={() => setOpen(true)}
        className="group w-full max-w-[90%] sm:max-w-sm overflow-hidden rounded-2xl
      bg-neutral-900 border-2 sm:border-4 border-neutral-800 hover:border-blue-500/50
      transition-all duration-300 shadow-2xl hover:shadow-blue-500/10 relative mx-auto"
      >
        {/* Image / Video */}
        <div
          className="relative h-40 sm:h-52 overflow-hidden"
          onMouseEnter={() => setShowVideo(true)}
          onMouseLeave={() => setShowVideo(false)}
          onTouchStart={() => {
            const timer = setTimeout(() => setShowVideo(true), 500);
            setTouchTimer(timer);
          }}
          onTouchEnd={() => touchTimer && clearTimeout(touchTimer)}
        >
          {showVideo && videoSrc ? (
            <video
              ref={cardVideoRef}
              src={videoSrc}
              className="relative w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              onPlay={() => {
                if (activeVideo && activeVideo !== cardVideoRef.current) {
                  activeVideo.pause();
                }
                activeVideo = cardVideoRef.current;
              }}
            />
          ) : (
            <Image
              src={img}
              alt={title}
              className="relative object-cover transition-transform duration-500 group-hover:scale-110"
              fill
              loading="lazy"
            />
          )}
          {!certificate && (
            <div
              className={`absolute flex top-0 right-0 bg-neutral-800 
              rounded-bl-xl border-l-2 border-b-2 border-l-neutral-800
               border-b-neutral-800 hover:cursor-pointer shadow-xs
               shadow-neutral-700
               ${
                 isPublic
                   ? "hover:text-green-300 hover:border-green-500/50"
                   : "hover:text-red-300 hover:border-red-500/50"
               }`}
            >
              {isPublic ? (
                <div className="flex justify-between m-1 p-1 text-sm">
                  <GitHubLogo className="w-4 h-4 mx-2 mt-[2px]" />
                  <a href={repoLink}>Public Repo</a>
                </div>
              ) : (
                <div className="flex justify-between m-1 p-1 text-sm">
                  <GitHubLogo className="w-4 h-4 mx-2 mt-[2px]" />
                  <p>Private Repo</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <h2 className="text-xl font-bold text-white mb-2 transition-all duration-300 group-hover:text-blue-400">
            {title}
          </h2>
          <p className="text-sm leading-relaxed text-neutral-400 mb-4 line-clamp-3">
            {subTitle}
          </p>

          {logos.length > 0 && (
            <div className="flex items-center gap-4 pt-4 border-t border-neutral-800">
              {logos.map((logo, idx) => (
                <div
                  key={idx}
                  className="opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                >
                  {logo}
                </div>
              ))}
            </div>
          )}

          <div className="flex justify-end mt-4">
            <button
              onClick={() => setOpen(true)}
              className="w-full sm:w-auto flex items-center gap-2 justify-center text-[12px] font-bold uppercase tracking-wider px-5 py-3 rounded-xl bg-neutral-800 hover:bg-blue-600 text-white transition-all shadow-lg cursor-pointer"
            >
              {certificate ? "View Certificate" : "View Details"}
              <ExternalLinkIcon className="w-4 h-4" />
            </button>
          </div>

          {/* Drawer */}
          <Drawer open={open} setOpen={setOpen}>
            <div className="text-white max-w-2xl mx-auto space-y-4">
              {/* Media */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-2xl mb-8 shadow-2xl border border-neutral-800">
                {videoSrc ? (
                  <video
                    src={videoSrc}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    preload="metadata"
                  />
                ) : (
                  <Image
                    src={img}
                    alt={title}
                    className="object-cover"
                    fill
                    priority
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent" />
              </div>

              {/* Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-start sm:justify-between gap-2 sm:gap-4">
                <h3 className="text-3xl font-extrabold tracking-tight text-white">
                  {title}
                </h3>

                <div className="flex flex-wrap gap-3 mt-2">
                  {demoLink && (
                    <a
                      href={demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 ${
                        certificate
                          ? "bg-purple-600 hover:bg-purple-500"
                          : "bg-green-600 hover:bg-green-500"
                      } text-white text-sm font-bold py-2 px-4 rounded-full transition-all shadow-md hover:shadow-lg`}
                    >
                      <ExternalLinkIcon className="w-4 h-4" />
                      {certificate ? "Verify Certificate" : "Open Demo"}
                    </a>
                  )}

                  {repoLink && isPublic && !certificate ? (
                    <a
                      href={repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold py-2 px-4 rounded-full transition-all shadow-md hover:shadow-lg"
                    >
                      <GitHubLogo className="w-4 h-4" fill="#ffffff" />
                      Open Repo
                    </a>
                  ) : repoLink && !isPublic && !certificate ? (
                    <button
                      disabled
                      className="flex items-center gap-2 bg-neutral-700 text-white text-sm font-bold py-2 px-4 rounded-full opacity-50 cursor-not-allowed"
                    >
                      <GitHubLogo
                        className="w-4 h-4 opacity-50"
                        fill="#ffffff"
                      />
                      Private Repo
                    </button>
                  ) : null}
                </div>
              </div>

              <div className="h-1 w-full bg-blue-500 rounded-full" />

              <p className="text-lg text-neutral-300 leading-relaxed font-light">
                {longSubTitle}
              </p>

              {logos.length > 0 && !certificate && (
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
              )}
            </div>
          </Drawer>
        </div>
      </div>
    </ScrollFadeUp>
  );
};

export default Card;
