import ScrollAnimation from "./ScrollAnimation";
import Image from "next/image";

// Contact info rows — label / value pairs
const info: [string, string][] = [
  ["Classes",   "Mon – Sat · 07:00 – 20:00"],
  ["Email",     "hello@vitaminh.studio"],
  ["Instagram", "@vitaminh.studio"],
];

export default function LocationSection() {
  return (
    <section id="contact" className="w-full bg-vl-cream py-24 px-5 sm:px-8 md:px-14 scroll-mt-24">
      <div className="max-w-[1300px] mx-auto">

        <ScrollAnimation animation="fadeInUp" className="mb-16">
          <p className="eyebrow mb-4">Find Us</p>
          <h2 className="font-heading text-[clamp(40px,6vw,72px)] text-vl-terra leading-[1em]">
            The way back<br />to yourself.
          </h2>
        </ScrollAnimation>

        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* Left — address + contact info */}
          <ScrollAnimation animation="fadeInLeft" className="w-full lg:w-[35%] flex flex-col gap-8">
            <div>
              <p className="eyebrow mb-3">VITAMINH LAGREE BODY LAB</p>
              <p className="font-body text-[15px] font-300 text-vl-muted leading-[1.9]">
                Thao Dien District<br />
                Ho Chi Minh City, Vietnam
              </p>
            </div>
            <div className="w-full h-px bg-vl-terra/15" />
            <div className="flex flex-col gap-3">
              {info.map(([k, v]) => (
                <div key={k} className="flex justify-between items-center">
                  <span className="font-body text-[11px] tracking-[3px] uppercase text-vl-muted/40">{k}</span>
                  <span className="font-body text-[13px] font-300 text-vl-muted">{v}</span>
                </div>
              ))}
            </div>

            {/* Decorative brand card */}
            <div className="relative bg-vl-terra p-8 overflow-hidden mt-4">
              <Image src="/logo.png" alt="" width={120} height={120}
                className="absolute -right-4 -bottom-4 opacity-10 w-28 h-28" />
              <p className="font-heading text-[22px] text-vl-cream relative z-10 leading-snug">
                More than a studio. A body lab.
              </p>
            </div>
          </ScrollAnimation>

          {/* Right — embedded Google Map */}
          <ScrollAnimation animation="fadeInRight" className="w-full lg:w-[65%]">
            <div className="w-full h-[420px]">
              <iframe
                title="VITAMINH Thao Dien"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0!2d106.7335!3d10.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVGhhbyBEaWVuLCBIbyBDaGkgTWluaCBDaXR5!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(20%) sepia(10%)" }}
                allowFullScreen={false}
                loading="lazy"
              />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
