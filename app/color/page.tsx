import type { Metadata } from "next";
import PhotoGrid from "@/components/PhotoGrid";
import { colorPhotos } from "@/data/photos";

export const metadata: Metadata = {
  title: "Color — Jack Schufreider",
};

export default function ColorPage() {
  return (
    <div className="pt-12">
      <div className="px-6 pt-10 pb-8">
        <h1 className="text-[11px] tracking-[0.2em] uppercase">Color</h1>
      </div>
      <div className="px-[3px]">
        <PhotoGrid photos={colorPhotos} />
      </div>
    </div>
  );
}
