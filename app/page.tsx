import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen pt-12">
      {/* Black & White half */}
      <Link
        href="/black-and-white"
        className="group relative flex-1 bg-black flex flex-col justify-end p-10 overflow-hidden"
      >
        <div className="transition-opacity duration-500 group-hover:opacity-60">
          <p className="text-white/30 text-[10px] tracking-[0.25em] uppercase mb-3">
            01
          </p>
          <h2 className="text-white text-[11px] tracking-[0.2em] uppercase">
            Black &amp; White
          </h2>
        </div>
      </Link>

      {/* Divider */}
      <div className="w-px bg-black/10" />

      {/* Color half */}
      <Link
        href="/color"
        className="group relative flex-1 bg-white flex flex-col justify-end p-10 overflow-hidden"
      >
        <div className="transition-opacity duration-500 group-hover:opacity-40">
          <p className="text-black/30 text-[10px] tracking-[0.25em] uppercase mb-3">
            02
          </p>
          <h2 className="text-black text-[11px] tracking-[0.2em] uppercase">
            Color
          </h2>
        </div>
      </Link>
    </div>
  );
}
