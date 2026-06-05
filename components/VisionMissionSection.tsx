"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollAnimation from "./ScrollAnimation";
import { StaggerGroup, StaggerItem } from "./ScrollAnimation";

// Brand pillars — numbered list in the right column
const pillars = [
  { n: "01", word: "Strength",  line: "Build deep, functional strength that carries beyond the studio." },
  { n: "02", word: "Control",   line: "Slow, precise movement. Every rep deliberate, every muscle engaged." },
  { n: "03", word: "Breath",    line: "Connect breath to movement. Calm the nervous system. Reset." },
  { n: "04", word: "Recovery",  line: "Rest is part of training. Restoration is transformation." },
];

export default function VisionMissionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax: tagline drifts slightly down as you scroll, logo drifts up
  const taglineY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const logoY    = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section ref={sectionRef} className="w-full bg-vl-dark overflow-hidden relative">

      {/* ── PART 1: Giant editorial statement ── */}
      <div className="relative pt-24 pb-0 px-5 sm:px-10 md:px-16 overflow-hidden">

        {/* Floating logo watermark — moves at a different scroll speed */}
        <motion.div
          style={{ y: logoY }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        >
          <Image
            src="/logo.png"
            alt=""
            width={700}
            height={700}
            className="w-[480px] h-[480px] md:w-[700px] md:h-[700px] object-contain opacity-[0.04]"
          />
        </motion.div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <ScrollAnimation animation="fadeInUp">
            <p className="eyebrow mb-8 text-vl-terra">Our Vision</p>
          </ScrollAnimation>

          {/* Headline parallaxes independently of the logo */}
          <motion.h2
            style={{ y: taglineY }}
            className="font-heading text-[clamp(56px,12vw,160px)] text-vl-cream leading-[0.9em] uppercase select-none"
          >
            Body & Mind.
            &nbsp;Movement.
          </motion.h2>
        </div>
      </div>

      {/* ── PART 2: Quote + brand pillars ── */}
      <div className="px-5 sm:px-10 md:px-16 pt-20 pb-0 relative z-10">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

          {/* Left — vision quote */}
          <ScrollAnimation animation="fadeInLeft" className="w-full lg:w-[50%]">
            <blockquote className="border-l-2 border-vl-terra pl-8">
              <p className="font-heading text-[clamp(20px,2.5vw,28px)] text-vl-cream leading-[1.4em] italic mb-6">
                "True transformation goes beyond physical performance. It is born from the balance between strength, control, breath and recovery."
              </p>
            </blockquote>
            <p className="font-body text-[14px] font-300 text-vl-cream/50 leading-[1.9] mt-8">
              Our vision is to create a complete ecosystem where each practice — Lagree, Hot Pilates, Yoga, Mobility — works in synergy to deeply strengthen the body, calm the mind and elevate global wellbeing.
            </p>
            <p className="font-body text-[14px] font-300 text-vl-cream/50 leading-[1.9] mt-4">
              We advocate a conscious approach to movement: more precise, more masterful, more intelligent.
            </p>
            <p className="font-body text-[13px] tracking-[1px] text-vl-terra mt-6 font-400">
              Because feeling good in your head begins with feeling good in your body.
            </p>
          </ScrollAnimation>

          {/* Right — 4 pillars with hover line transitions */}
          <div className="w-full lg:w-[50%]">
            <StaggerGroup className="flex flex-col">
              {pillars.map((p) => (
                <StaggerItem key={p.word}>
                  <div className="group flex gap-6 items-start py-7 border-b border-vl-cream/8 cursor-default hover:border-vl-terra/40 transition-colors duration-500">
                    <span className="font-body text-[10px] tracking-[3px] text-vl-terra/40 mt-1.5 w-7 shrink-0">
                      {p.n}
                    </span>
                    <div>
                      <p className="font-heading text-[clamp(22px,2.5vw,32px)] text-vl-cream leading-none group-hover:text-vl-terra transition-colors duration-300 mb-2">
                        {p.word}
                      </p>
                      <p className="font-body text-[13px] font-300 text-vl-cream/35 leading-relaxed">
                        {p.line}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </div>

      {/* ── PART 3: Full-width terracotta statement bar ── */}
      <ScrollAnimation animation="scaleIn" className="mt-20">
        <div className="bg-vl-terra py-12 px-5 sm:px-10 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="font-heading text-[clamp(26px,4vw,52px)] text-vl-cream leading-tight max-w-[700px]">
            Reconnect body and mind<br className="hidden md:block" /> through movement.
          </p>
          <div className="shrink-0 flex flex-col items-start md:items-end gap-1">
            <p className="font-body text-[10px] tracking-[4px] uppercase text-vl-cream/60">Vitaminh Lagree Body Lab</p>
            <p className="font-body text-[10px] tracking-[3px] uppercase text-vl-cream/35">Thao Dien · Ho Chi Minh City</p>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
}
