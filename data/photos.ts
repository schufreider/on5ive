export type Photo = {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
};

// ─────────────────────────────────────────────────────────────────────────────
// BLACK & WHITE
// Drop your images into: public/images/bw/
// Add each file below with its actual pixel dimensions and a short alt text.
// ─────────────────────────────────────────────────────────────────────────────
export const bwPhotos: Photo[] = [
  { id: 1,  src: "/images/bw/bw-1.svg",  alt: "Black and white photograph 1",  width: 1800, height: 1200 },
  { id: 2,  src: "/images/bw/bw-2.svg",  alt: "Black and white photograph 2",  width: 800,  height: 1200 },
  { id: 3,  src: "/images/bw/bw-3.svg",  alt: "Black and white photograph 3",  width: 1600, height: 900  },
  { id: 4,  src: "/images/bw/bw-4.svg",  alt: "Black and white photograph 4",  width: 900,  height: 900  },
  { id: 5,  src: "/images/bw/bw-5.svg",  alt: "Black and white photograph 5",  width: 1200, height: 900  },
  { id: 6,  src: "/images/bw/bw-6.svg",  alt: "Black and white photograph 6",  width: 800,  height: 1067 },
  { id: 7,  src: "/images/bw/bw-7.svg",  alt: "Black and white photograph 7",  width: 1500, height: 1000 },
  { id: 8,  src: "/images/bw/bw-8.svg",  alt: "Black and white photograph 8",  width: 1000, height: 1000 },
];

// ─────────────────────────────────────────────────────────────────────────────
// COLOR
// Drop your images into: public/images/color/
// ─────────────────────────────────────────────────────────────────────────────
export const colorPhotos: Photo[] = [
  { id: 1,  src: "/images/color/color-1.svg",  alt: "Color photograph 1",  width: 1800, height: 1200 },
  { id: 2,  src: "/images/color/color-2.svg",  alt: "Color photograph 2",  width: 800,  height: 1200 },
  { id: 3,  src: "/images/color/color-3.svg",  alt: "Color photograph 3",  width: 1600, height: 900  },
  { id: 4,  src: "/images/color/color-4.svg",  alt: "Color photograph 4",  width: 900,  height: 900  },
  { id: 5,  src: "/images/color/color-5.svg",  alt: "Color photograph 5",  width: 1200, height: 900  },
  { id: 6,  src: "/images/color/color-6.svg",  alt: "Color photograph 6",  width: 800,  height: 1067 },
  { id: 7,  src: "/images/color/color-7.svg",  alt: "Color photograph 7",  width: 1500, height: 1000 },
  { id: 8,  src: "/images/color/color-8.svg",  alt: "Color photograph 8",  width: 1000, height: 1000 },
];
