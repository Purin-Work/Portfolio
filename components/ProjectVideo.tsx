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

    let isInView = false;

    if (paused) {
      video.pause();
      return;
    }

    video.defaultMuted = true;
    video.muted = true;
    video.playsInline = true;
    video.autoplay = true;

    const attachSource = () => {
      if (video.getAttribute("src") === source) return;
      video.src = source;
      video.preload = "auto";
      video.load();
    };

    const playWhenReady = () => {
      if (!isInView || document.hidden || paused) return;
      attachSource();
      video.muted = true;
      void video.play().catch(() => undefined);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isInView = entry.isIntersecting && entry.intersectionRatio >= 0.25;
        if (isInView) {
          playWhenReady();
        } else {
          video.pause();
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75] },
    );

    const handleVisibilityChange = () => {
      if (document.hidden) video.pause();
      else playWhenReady();
    };

    video.addEventListener("loadedmetadata", playWhenReady);
    video.addEventListener("canplay", playWhenReady);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    observer.observe(video);

    return () => {
      observer.disconnect();
      video.removeEventListener("loadedmetadata", playWhenReady);
      video.removeEventListener("canplay", playWhenReady);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      video.pause();
    };
  }, [paused, source]);

  return (
    <video
      ref={videoRef}
      poster={poster}
      className="h-full w-full bg-black object-contain"
      autoPlay
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
