import Link from "next/link";
import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

export default function CafeSection() {
  return (
    <section className="w-full bg-vl-dark py-24 px-5 sm:px-8 md:px-14">
      <div className="max-w-[1300px] mx-auto">

        <ScrollAnimation animation="fadeInUp" className="mb-16">
          <p className="font-body text-[11px] tracking-[4px] uppercase text-vl-cream/40 mb-4">03 & 04</p>
          <h2 className="font-heading text-[clamp(40px,5vw,64px)] text-vl-cream leading-[1em]">
            Find your<br />centre.
          </h2>
        </ScrollAnimation>

        {/* Yoga + Mobility cards side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

          {/* Yoga */}
          <ScrollAnimation animation="fadeInLeft" className="flex flex-col overflow-hidden border border-vl-cream/10">
            <div className="relative h-[280px] overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/8436684/pexels-photo-8436684.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&dpr=1"
                alt="Yoga class — move, breathe, reset"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vl-dark to-transparent" />
              <span className="absolute bottom-4 left-6 font-heading text-[28px] text-vl-cream leading-none">Yoga</span>
            </div>
            <div className="bg-vl-dark p-8 flex flex-col gap-4">
              <p className="font-body text-[16px] font-300 text-vl-terra italic">Move. Breathe. Reset.</p>
              <p className="font-body text-[14px] font-300 text-vl-cream/60 leading-relaxed">
                From Vinyasa to Yin, Hatha to Restorative — each approach meets the needs of your body and mind. Strength, mobility, relaxation.
              </p>
              <p className="font-body text-[12px] font-700 tracking-[2px] uppercase text-vl-light-terra mt-2 pt-4 border-t border-vl-cream/10">
                Come as you are. Leave different.
              </p>
            </div>
          </ScrollAnimation>

          {/* Mobility */}
          <ScrollAnimation animation="fadeInRight" className="flex flex-col overflow-hidden border border-vl-cream/10">
            <div className="relative h-[280px] overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/8436574/pexels-photo-8436574.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&dpr=1"
                alt="Mobility — restore range of motion"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vl-dark to-transparent" />
              <span className="absolute bottom-4 left-6 font-heading text-[28px] text-vl-cream leading-none">Mobility</span>
            </div>
            <div className="bg-vl-dark p-8 flex flex-col gap-4">
              <p className="font-body text-[16px] font-300 text-vl-terra italic">Slow down to move better.</p>
              <p className="font-body text-[14px] font-300 text-vl-cream/60 leading-relaxed">
                Release tension, restore range of motion and build a body that moves with ease. Through targeted mobility work — stronger, more resilient, injury-free.
              </p>
              <p className="font-body text-[12px] font-700 tracking-[2px] uppercase text-vl-light-terra mt-2 pt-4 border-t border-vl-cream/10">
                Your recovery is your training.
              </p>
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation animation="fadeInUp">
          <Link href="#book" className="btn-vl-light">Book Any Class</Link>
        </ScrollAnimation>
      </div>
    </section>
  );
}
