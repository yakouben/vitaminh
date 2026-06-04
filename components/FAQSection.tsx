"use client";

import { useState } from "react";
import ScrollAnimation from "./ScrollAnimation";
import { StaggerGroup, StaggerItem } from "./ScrollAnimation";

const rules = [
  "Arrive 15 minutes before your first class — a coach will walk you through the equipment.",
  "Maximum 12 students per session — personal attention, every time.",
  "Grip socks are required. We have them available at the studio if needed.",
  "Bring a towel and a water bottle. We have a purified water system on site.",
  "No phones during class — out of respect for yourself and those around you.",
  "No heavy perfumes — some members have sensitivities.",
  "All fitness levels welcome. We offer modifications for every exercise.",
];

const faqs = [
  {
    q: "What is the Lagree method?",
    a: "The Lagree method is a full-body, low-impact, high-intensity training system practised on the Microformer — a sophisticated resistance machine. Invented by Sébastien Lagree in Los Angeles in 2001, it combines strength training and cardio through slow, controlled movements that keep muscles under constant tension. The result: deep muscle engagement, improved posture, and a sculpted physique — without stress on your joints.",
  },
  {
    q: "How many sessions per week do I need to see results?",
    a: "We recommend 2–3 sessions per week for visible results within 4–6 weeks. Consistency matters more than frequency — even 1–2 classes per week will produce meaningful changes in strength, posture and body composition over time.",
  },
  {
    q: "Is it suitable for beginners?",
    a: "Absolutely. All our classes are open to all levels and our coaches provide modifications for every exercise. On your first visit, arrive 15 minutes early — we'll make sure you feel confident before the class begins.",
  },
  {
    q: "What is the difference between Lagree and traditional Pilates?",
    a: "Both share the same philosophy of controlled, precise movement. Lagree is more intense — faster cardio response, heavier resistance, and continuous muscular tension throughout the session. Traditional Pilates is more gentle and restorative. At Vitaminh, we offer both: Lagree for intensity and Hot Pilates for a heated full-body challenge.",
  },
  {
    q: "What should I wear and bring?",
    a: "Wear fitted, comfortable athletic wear. Grip socks are mandatory (available in studio). Bring a water bottle and a small towel. Avoid eating a heavy meal 1–2 hours before class.",
  },
  {
    q: "Do you offer memberships and packages?",
    a: "Yes. We offer class packs, monthly memberships, and a 3-class intro package for new members. Contact us or check the pricing section for current rates. Members get priority booking and access to exclusive Surprise Class events.",
  },
  {
    q: "Where is Vitaminh located?",
    a: "We are in the heart of Thao Dien, Ho Chi Minh City — one of the most vibrant and internationally-minded neighbourhoods in the city. Full address and map available in the Find Us section below.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-full text-left border-b border-vl-terra/15 py-6 flex flex-col gap-0 group"
    >
      <div className="flex items-start justify-between gap-6">
        <span className="font-body text-[15px] font-400 text-vl-muted leading-snug group-hover:text-vl-terra transition-colors">
          {q}
        </span>
        <span className={`font-heading text-[22px] text-vl-terra leading-none shrink-0 mt-0.5 transition-transform duration-300 ${open ? "rotate-45" : ""}`}>
          +
        </span>
      </div>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-[400px] mt-5" : "max-h-0"}`}>
        <p className="font-body text-[14px] font-300 text-vl-muted/70 leading-[1.9]">{a}</p>
      </div>
    </button>
  );
}

export default function FAQSection() {
  return (
    <section className="w-full bg-vl-cream py-24 px-5 sm:px-8 md:px-14">
      <div className="max-w-[1300px] mx-auto">

        <ScrollAnimation animation="fadeInUp" className="mb-16">
          <p className="eyebrow mb-4">Before You Arrive</p>
          <h2 className="font-heading text-[clamp(40px,6vw,72px)] text-vl-terra leading-[1em]">
            FAQ & Studio Rules
          </h2>
        </ScrollAnimation>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Left — Rules */}
          <div className="w-full lg:w-[42%]">
            <ScrollAnimation animation="fadeInLeft">
              <p className="font-body text-[11px] tracking-[4px] uppercase text-vl-terra mb-8">What to expect</p>
              <div className="bg-vl-dark/5 p-8 flex flex-col gap-5">
                <StaggerGroup className="flex flex-col gap-5">
                  {rules.map((r, i) => (
                    <StaggerItem key={i}>
                      <div className="flex gap-4 items-start">
                        <span className="w-5 h-5 rounded-full bg-vl-terra flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-2.5 h-2.5 fill-vl-cream" viewBox="0 0 12 10">
                            <path d="M1 5l3.5 3.5L11 1" stroke="#faf3e0" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                        <p className="font-body text-[13px] font-300 text-vl-muted leading-relaxed">{r}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </div>
            </ScrollAnimation>
          </div>

          {/* Right — FAQ accordion */}
          <div className="w-full lg:w-[58%]">
            <ScrollAnimation animation="fadeInRight">
              <p className="font-body text-[11px] tracking-[4px] uppercase text-vl-terra mb-8">Frequently asked</p>
              <div className="flex flex-col">
                {faqs.map((item) => (
                  <FAQItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
