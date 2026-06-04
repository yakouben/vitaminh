import Link from "next/link";
import ScrollAnimation from "./ScrollAnimation";

export default function WelcomeOffer() {
  return (
    <section id="book" className="w-full bg-vl-dark py-24 px-5 sm:px-8 md:px-14 scroll-mt-24">
      <div className="max-w-[900px] mx-auto flex flex-col items-center text-center">
        <ScrollAnimation animation="fadeInUp">
          <p className="font-body text-[11px] font-700 tracking-[4px] uppercase text-vl-terra mb-6">New to Lagree?</p>
          <h2 className="font-heading text-[clamp(40px,6vw,72px)] text-vl-cream mb-6 leading-[1em]">
            Your first class<br />starts here.
          </h2>
          <p className="font-body text-[15px] font-300 text-vl-cream/70 leading-[1.9] mb-4 max-w-[620px]">
            New to Vitaminh? Try 2 weeks unlimited — try all 4 disciplines, no commitment.
          </p>
          <p className="font-heading text-[52px] text-vl-terra mb-8">Intro Pack — $69</p>
          <p className="font-body text-[12px] font-300 text-vl-cream/30 tracking-wide mb-10">
            Lagree · Hot Pilates · Yoga · Mobility — choose any discipline
          </p>
        </ScrollAnimation>
        <ScrollAnimation animation="fadeInUp" delay={0.2} className="flex flex-col sm:flex-row gap-4">
          <Link href="#" className="btn-vl-filled">Reserve Your Spot</Link>
          <Link href="#classes" className="btn-vl-light">See the Schedule</Link>
        </ScrollAnimation>
      </div>
    </section>
  );
}
