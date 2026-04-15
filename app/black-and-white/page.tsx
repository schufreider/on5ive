import type { Metadata } from "next";
import PhotoGrid from "@/components/PhotoGrid";
import { bwPhotos } from "@/data/photos";

export const metadata: Metadata = {
  title: "Black & White — Jack Schufreider",
};

export default function BlackAndWhitePage() {
  return (
    <div className="pt-12">
      <div className="px-6 pt-10 pb-8">
        <h1 className="text-[11px] tracking-[0.2em] uppercase">
          Black &amp; White
        </h1>
      </div>
      <div className="px-[3px]">
        <PhotoGrid photos={bwPhotos} />
      </div>
    </div>
  );
}
