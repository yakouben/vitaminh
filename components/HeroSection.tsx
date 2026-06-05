import Image from "next/image";
import Link from "next/link";

// Quick stats shown at the bottom of the hero text panel
const stats = [
  { n: "50 min", label: "Sessions" },
  { n: "4",      label: "Disciplines" },
  { n: "<12",    label: "Per class" },
];

export default function HeroSection() {
  return (
    // Mobile: image stacks above (flex-col-reverse); desktop: text left / image right
    <section className="w-full h-[calc(100svh-5rem)] bg-vl-cream flex flex-col-reverse lg:flex-row overflow-hidden">

      {/* Left — text panel */}
      <div className="w-full lg:w-[40%] shrink-0 flex flex-col justify-between px-5 sm:px-8 lg:px-14 py-8 lg:py-20">

        {/* Location eyebrow — desktop only (mobile version is inside the content block) */}
        <div className="hidden lg:flex items-center gap-3">
          <span className="w-8 h-px bg-vl-terra/40" />
          <p className="font-body text-[10px] tracking-[4px] uppercase text-vl-muted/50">Thao Dien · Ho Chi Minh City</p>
        </div>

        {/* Headline + CTA */}
        <div className="flex flex-col gap-5 lg:gap-7">
          <p className="eyebrow lg:hidden">Thao Dien · Ho Chi Minh City</p>
          <h1 className="font-heading text-[clamp(56px,9.5vw,120px)] text-vl-terra leading-[0.88em] uppercase">
            High<br />Intensity.<br />Low<br />Impact.
          </h1>
          <p className="font-body text-[14px] font-300 text-vl-muted/65 leading-relaxed max-w-[360px]">
            The first premium Lagree studio in Thao Dien — four disciplines, one space, a complete approach to body and mind.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="#book" className="btn-vl-filled">Book Your First Class</Link>
            <Link href="#classes" className="btn-vl">Explore Classes</Link>
          </div>
        </div>

        {/* Bottom bar — stats + scroll indicator */}
        <div className="flex items-end justify-between pt-6 border-t border-vl-terra/20">
          <div className="flex gap-7">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-heading text-[clamp(20px,2.5vw,28px)] text-vl-terra leading-none">{s.n}</p>
                <p className="font-body text-[9px] font-700 tracking-[2px] uppercase text-vl-muted/40 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="hidden lg:flex flex-col items-center gap-2">
            <div className="w-px h-10 bg-vl-terra/25" />
            <p className="font-body text-[8px] tracking-[3px] uppercase text-vl-muted/30 [writing-mode:vertical-rl] rotate-180">Scroll</p>
          </div>
        </div>
      </div>

      {/* Right — full-bleed hero image */}
      <div className="flex-1 lg:flex-none w-full lg:w-[60%] relative min-h-[42vh] lg:min-h-0">
        <Image
          src="/hero.png"
          alt="Two women performing synchronized Lagree on reformers — VITAMINH Lagree Body Lab"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover object-top"
        />
        {/* Discipline pill overlay — desktop only */}
        <div className="absolute bottom-6 left-6 hidden lg:block bg-vl-dark/75 backdrop-blur-sm px-5 py-3 rounded-full">
          <span className="font-body text-[9px] tracking-[3px] uppercase text-vl-cream">
            Lagree · Hot Pilates · Yoga · Mobility
          </span>
        </div>
      </div>
    </section>
  );
}
