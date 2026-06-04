import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "./ScrollAnimation";

const features = [
  "50-minute full body session",
  "Infrared heat at 35°C",
  "Activates circulation & burns toxins",
  "Controlled rhythm — every muscle engaged",
  "All levels welcome",
];

export default function VisionSection() {
  return (
    <section className="w-full bg-vl-cream py-24 px-5 sm:px-8 md:px-14">
      <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">

        {/* Left — fill image with heat overlay */}
        <ScrollAnimation animation="fadeInLeft" className="w-full lg:w-[55%] relative min-h-[460px] lg:min-h-[580px] overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/8769163/pexels-photo-8769163.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1000&dpr=1"
            alt="Hot Pilates group class — women working out together in 35°C heat"
            fill
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#8b2500]/30 via-transparent to-vl-dark/40" />
          <div className="absolute top-6 right-6 bg-vl-terra px-5 py-4">
            <p className="font-heading text-[32px] text-vl-cream leading-none">35°C</p>
            <p className="font-body text-[9px] tracking-[3px] uppercase text-vl-cream/70 mt-1">Infrared heat</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-vl-dark/60 to-transparent">
            <p className="font-heading text-[13px] tracking-[4px] uppercase text-vl-cream/80">Hot Pilates · Vitaminh</p>
          </div>
        </ScrollAnimation>

        {/* Right — text */}
        <ScrollAnimation animation="fadeInRight" className="w-full lg:w-[45%] flex flex-col justify-center gap-6">
          <p className="eyebrow">02 — The Burn</p>
          <h2 className="font-heading text-[clamp(40px,5vw,64px)] text-vl-terra leading-[1em]">Hot Pilates</h2>
          <p className="font-body text-[19px] font-300 text-vl-terra italic leading-snug">
            &quot;Our signature burn.&quot;
          </p>
          <p className="font-body text-[15px] font-300 text-vl-muted leading-[1.9]">
            35°C. The heat hits. Your body responds. All intensity, full body — combining muscular strengthening and endurance while activating circulation and perspiration.
          </p>
          <p className="font-body text-[15px] font-300 text-vl-muted leading-[1.9]">
            Our infrared heat goes deeper than traditional heat — it penetrates directly into your muscles, accelerating recovery and helping your body release toxins more efficiently. You don't just sweat. You transform.
          </p>

          <div className="flex flex-col gap-3 pt-6 border-t border-vl-terra/20">
            {features.map((f) => (
              <div key={f} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-vl-terra flex-shrink-0" />
                <span className="font-body text-[13px] font-300 text-vl-muted">{f}</span>
              </div>
            ))}
          </div>

          <Link href="#book" className="btn-vl self-start mt-2">Come Sweat With Us</Link>
        </ScrollAnimation>
      </div>
    </section>
  );
}
