"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const testimonials = [
  {
    text: "Vitaminh is a completely different experience from any fitness class I've tried. The Lagree method on the Microformer is intense in the best possible way — slow, controlled, and you feel every muscle. After just 3 weeks I can see real changes.",
    name: "Camille L.",
    role: "Member since 2025",
  },
  {
    text: "Hot Pilates at 35°C is their signature class for a reason. I leave every session drenched and completely recharged. The instructors are incredibly attentive — they correct your form without breaking the flow. This is premium fitness.",
    name: "Anh T.",
    role: "Lagree & Hot Pilates member",
  },
  {
    text: "I was looking for something different in Thao Dien — a space that felt calm, sophisticated, and actually challenging. Vitaminh is exactly that. The studio itself is beautiful and the coaches know their craft inside out.",
    name: "Margaux D.",
    role: "Monthly member",
  },
  {
    text: "The Mobility class completely changed how I move. I came in with tight hips and a stiff lower back — two months later, both are completely different. It's not glamorous but it is transformative. Vitaminh understands the whole body.",
    name: "Sophie K.",
    role: "Yoga & Mobility member",
  },
];

export default function TestimonialsSection() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="w-full bg-vl-cream py-24 px-5 sm:px-8 md:px-14 relative overflow-hidden">

      {/* Logo watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Image src="/logo.png" alt="" width={500} height={500} className="w-[400px] h-[400px] object-contain opacity-[0.04]" />
      </div>

      <div className="max-w-[900px] mx-auto flex flex-col items-center text-center relative z-10">
        <p className="eyebrow mb-12">What they say</p>

        <div className="relative min-h-[340px] md:min-h-[280px] w-full flex items-center justify-center">
          {testimonials.map((t, i) => (
            <div key={i}
              className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
                i === idx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
              }`}>
              <p className="font-heading text-[clamp(18px,2.5vw,26px)] text-vl-terra leading-[1.5em] mb-8 italic">
                "{t.text}"
              </p>
              <p className="font-body text-[12px] font-700 tracking-[3px] uppercase text-vl-muted">{t.name}</p>
              <p className="font-body text-[11px] font-300 text-vl-muted/40 tracking-wider mt-1">{t.role}</p>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex gap-3 mt-8 mb-14">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)}
              className={`rounded-full transition-all duration-300 ${i === idx ? "w-6 h-1.5 bg-vl-terra" : "w-1.5 h-1.5 bg-vl-terra/25"}`} />
          ))}
        </div>

        <Link href="#book" className="btn-vl-filled">Join Vitaminh</Link>
      </div>
    </section>
  );
}
