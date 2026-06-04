"use client";
import { useState } from "react";
import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row min-h-[600px]">

        {/* Left — video panel, white bg, no padding */}
        <ScrollAnimation
          animation="fadeIn"
          className="w-full lg:w-[55%] relative bg-white overflow-hidden min-h-[320px] sm:min-h-[420px] lg:min-h-0"
        >
          <video
            src="https://www.pilates.com/static/Homepage-20ef67b99170367958670392fb55d712.webm"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Right-edge fade blends into the form panel */}
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none hidden lg:block" />
          {/* Bottom fade on mobile */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none lg:hidden" />
        </ScrollAnimation>

        {/* Right — form panel */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center px-5 sm:px-10 md:px-14 lg:px-16 py-16 lg:py-24">
          <ScrollAnimation animation="fadeInRight" className="flex flex-col gap-8 max-w-[480px]">

            {/* VL monogram */}
            <Image
              src="/logo.png"
              alt="VL"
              width={48}
              height={48}
              className="w-10 h-10 object-contain opacity-30"
            />

            <div className="flex flex-col gap-4">
              <p className="eyebrow">Stay in the loop</p>
              <h2 className="font-heading text-[clamp(32px,4vw,52px)] text-vl-terra leading-[1em]">
                Exclusive access.<br />First to know.
              </h2>
              <p className="font-body text-[14px] font-300 text-vl-muted/70 leading-[1.9]">
                Early access to new class launches, exclusive events, and curated wellness content. No noise — just what matters.
              </p>
            </div>

            {sent ? (
              <div className="border-l-2 border-vl-terra pl-6 py-2">
                <p className="font-heading text-[22px] text-vl-terra">You're in.</p>
                <p className="font-body text-[13px] font-300 text-vl-muted/50 mt-1">
                  Welcome to the Vitaminh inner circle.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="w-full bg-transparent border-b border-vl-terra/25 py-4 font-body text-[14px] text-vl-muted placeholder:text-vl-muted/30 focus:outline-none focus:border-vl-terra transition-colors duration-300"
                />
                <div className="flex items-center gap-6">
                  <button type="submit" className="btn-vl-filled">
                    Subscribe
                  </button>
                  <p className="font-body text-[11px] font-300 text-vl-muted/30 tracking-wide">
                    No spam. Unsubscribe anytime.
                  </p>
                </div>
              </form>
            )}

          </ScrollAnimation>
        </div>

      </div>
    </section>
  );
}
