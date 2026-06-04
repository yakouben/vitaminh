import Link from "next/link";
import ScrollAnimation from "./ScrollAnimation";
import { StaggerGroup, StaggerItem } from "./ScrollAnimation";

const experiences = [
  { label: "Deep Recovery",     desc: "Infrared sauna, stretching rituals and guided breathwork to restore and repair." },
  { label: "Workshops",         desc: "Immersive sessions led by expert guests — movement, nutrition, mindset." },
  { label: "Sound Bath",        desc: "Guided sound healing to decompress the nervous system and reset fully." },
  { label: "Community Events",  desc: "Exclusive member experiences — rooftop sessions, morning rituals, and more." },
];

export default function SurpriseClassSection() {
  return (
    <section className="w-full bg-vl-dark py-24 px-5 sm:px-8 md:px-14">
      <div className="max-w-[1300px] mx-auto">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">
          <ScrollAnimation animation="fadeInLeft" className="max-w-[620px]">
            <p className="font-body text-[11px] tracking-[4px] uppercase text-vl-terra mb-6">05 — Exclusive</p>
            <h2 className="font-heading text-[clamp(44px,7vw,80px)] text-vl-cream leading-[0.95em] uppercase">
              Surprise<br />Classes
            </h2>
          </ScrollAnimation>
          <ScrollAnimation animation="fadeInRight" className="max-w-[340px]">
            <p className="font-body text-[14px] font-300 text-vl-cream/50 leading-relaxed">
              Because your body needs more than just a workout. Every month, Vitaminh introduces something new — you won't always know what's coming. But you'll feel the difference.
            </p>
          </ScrollAnimation>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-vl-cream/10 mb-16" />

        {/* Experiences grid */}
        <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-vl-cream/8 mb-16">
          {experiences.map((e, i) => (
            <StaggerItem key={e.label}>
              <div className="bg-vl-dark p-8 md:p-10 flex flex-col gap-4 border border-vl-cream/8 h-full group hover:border-vl-terra/40 transition-colors duration-500">
                <span className="font-body text-[10px] tracking-[4px] uppercase text-vl-terra/60">0{i + 1}</span>
                <h3 className="font-heading text-[28px] text-vl-cream leading-none group-hover:text-vl-terra transition-colors duration-300">
                  {e.label}
                </h3>
                <p className="font-body text-[13px] font-300 text-vl-cream/50 leading-relaxed mt-auto">
                  {e.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* CTA bar */}
        <ScrollAnimation animation="fadeInUp">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-10 border-t border-vl-cream/10">
            <div>
              <p className="font-heading text-[clamp(20px,2.5vw,30px)] text-vl-cream leading-snug">
                Stay curious.<br className="sm:hidden" /> Stay connected.
              </p>
              <p className="font-body text-[12px] font-300 text-vl-cream/30 tracking-wide mt-2">
                Each month brings something new.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link href="#book" className="btn-vl-light">Join as Member</Link>
              <Link href="#" className="btn-vl-filled">See This Month</Link>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
