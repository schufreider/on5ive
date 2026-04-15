"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import type { Photo } from "@/data/photos";

interface LightboxProps {
  photos: Photo[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  photos,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const photo = photos[currentIndex];
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < photos.length - 1;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext) onNext();
    },
    [onClose, onPrev, onNext, hasPrev, hasNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
      onClick={onClose}
    >
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 h-12 flex items-center justify-between px-6 pointer-events-none">
        <span className="text-[10px] tracking-[0.2em] uppercase text-black/40">
          {currentIndex + 1}&thinsp;/&thinsp;{photos.length}
        </span>
        <button
          className="text-[11px] tracking-[0.15em] uppercase pointer-events-auto hover:opacity-50 transition-opacity"
          onClick={onClose}
        >
          Close
        </button>
      </div>

      {/* Prev */}
      {hasPrev && (
        <button
          className="absolute left-6 top-1/2 -translate-y-1/2 text-[11px] tracking-[0.15em] uppercase hover:opacity-50 transition-opacity z-10"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
        >
          &#8592;
        </button>
      )}

      {/* Next */}
      {hasNext && (
        <button
          className="absolute right-6 top-1/2 -translate-y-1/2 text-[11px] tracking-[0.15em] uppercase hover:opacity-50 transition-opacity z-10"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
        >
          &#8594;
        </button>
      )}

      {/* Image */}
      <div
        className="relative flex items-center justify-center"
        style={{ maxWidth: "90vw", maxHeight: "calc(100vh - 48px)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          className="object-contain"
          style={{
            maxWidth: "90vw",
            maxHeight: "calc(100vh - 96px)",
            width: "auto",
            height: "auto",
          }}
          priority
        />
      </div>
    </div>
  );
}
