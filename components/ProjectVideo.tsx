"use client";

import { useEffect, useRef } from "react";

interface ProjectVideoProps {
  source: string;
  poster: string;
  title: string;
  paused?: boolean;
}

export default function ProjectVideo({ source, poster, title, paused = false }: ProjectVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (paused) {
      video.pause();
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !reduceMotion) {
          video.preload = "auto";
          video.muted = true;
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { rootMargin: "120px 0px", threshold: 0.2 },
    );

    observer.observe(video);
    return () => {
      observer.disconnect();
      video.pause();
    };
  }, [paused]);

  return (
    <video
      ref={videoRef}
      src={source}
      poster={poster}
      className="h-full w-full bg-black object-contain"
      muted
      loop
      playsInline
      controls
      preload="metadata"
      aria-label={`${title} video report`}
    >
      Your browser does not support the video element.
    </video>
  );
}
