"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  { src: "/studio/reformer2.jpg",                                              alt: "Lagree reformer class — woman in terracotta, group session", label: "LAGREE" },
  { src: "/pilates1.png",                                                       alt: "Reformer detail — hands on the machine, precision movement",  label: "REFORMER" },
  { src: "https://images.pexels.com/photos/8436684/pexels-photo-8436684.jpeg", alt: "Yoga class — calm and focused movement",                      label: "YOGA" },
  { src: "https://images.pexels.com/photos/8436574/pexels-photo-8436574.jpeg", alt: "Mobility — restore range of motion",                          label: "MOBILITY" },
];

export default function GalleryCarousel() {
  const [idx, setIdx] = useState(0);

  // Auto-advance every 4.5s; interval clears on unmount to avoid memory leaks
  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % images.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="w-full relative h-[60vw] max-h-[720px] min-h-[420px] bg-vl-dark overflow-hidden">
      {/* Slides — all stacked absolutely; active one fades in */}
      {images.map((img, i) => (
        <div key={img.src}
          className={`absolute inset-0 transition-opacity duration-1200 ease-in-out ${i === idx ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
          <Image src={img.src} alt={img.alt} fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-vl-dark/70 via-transparent to-transparent" />
        </div>
      ))}

      {/* Slide label + dot navigation */}
      <div className="absolute bottom-8 left-8 right-8 z-20 flex items-end justify-between">
        <span className="font-heading text-[clamp(32px,4vw,52px)] text-vl-cream/90 leading-none">
          {images[idx].label}
        </span>
        <div className="flex gap-2 items-center">
          {images.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${i === idx ? "w-8 h-1.5 bg-vl-terra" : "w-1.5 h-1.5 bg-vl-cream/30"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
