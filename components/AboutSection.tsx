import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

export default function AboutSection() {
  return (
    <section id="studio" className="w-full bg-vl-cream py-24 px-5 sm:px-8 md:px-14 scroll-mt-24">
      <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row items-center gap-20">

        {/* Left */}
        <ScrollAnimation animation="fadeInLeft" className="w-full lg:w-1/2">
          <p className="eyebrow mb-6">The Studio</p>
          <h2 className="font-heading text-[clamp(36px,5vw,60px)] text-vl-terra mb-8 leading-[1em]">
            More than a studio.<br />A body lab.
          </h2>
          <p className="font-body text-[15px] font-300 text-vl-muted leading-[1.9] mb-5">
            Vitaminh is the first premium Lagree studio in the heart of Thao Dien, Ho Chi Minh City — combining Lagree, Hot Pilates, Yoga and Mobility in one space. A complete approach dedicated to body and mind.
          </p>
          <p className="font-body text-[15px] font-300 text-vl-muted leading-[1.9]">
            50-minute immersive classes designed to deeply strengthen your body, improve posture and build endurance through precise, controlled movement. Every session led by 100% certified coaches — expert, safe, and personalised.
          </p>
        </ScrollAnimation>

        {/* Right — image with editorial frame */}
        <ScrollAnimation animation="fadeInRight" className="w-full lg:w-1/2 relative">
          <Image
            src="/studio/reformer2.jpg"
            alt="Lagree group class — woman in terracotta leading reformer session, natural light"
            width={1280}
            height={853}
            loading="lazy"
            className="w-full h-auto object-cover"
          />
          <div className="absolute -bottom-5 -left-5 bg-vl-terra px-6 py-4 hidden md:block">
            <p className="font-heading text-[13px] text-vl-cream tracking-widest uppercase">Ho Chi Minh City</p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
