"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";
import type { Photo } from "@/data/photos";

interface PhotoGridProps {
  photos: Photo[];
}

export default function PhotoGrid({ photos }: PhotoGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-[3px]">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className="break-inside-avoid mb-[3px] cursor-pointer group"
            onClick={() => setLightboxIndex(index)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              className="w-full transition-opacity duration-300 group-hover:opacity-80"
            />
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          photos={photos}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((i) => Math.max(0, i! - 1))}
          onNext={() =>
            setLightboxIndex((i) => Math.min(photos.length - 1, i! + 1))
          }
        />
      )}
    </>
  );
}
