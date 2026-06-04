import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "./ScrollAnimation";

export default function CycleSection() {
  return (
    <section className="w-full bg-vl-cream">
      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row">

        <div className="w-full lg:w-[42%] flex flex-col justify-center px-5 sm:px-10 md:px-16 py-20 lg:py-28">
          <ScrollAnimation animation="fadeInLeft" className="flex flex-col gap-6">
            <p className="eyebrow">01 — The Method</p>
            <h2 className="font-heading text-[clamp(40px,5vw,72px)] text-vl-terra leading-[0.95em]">Lagree</h2>
            <p className="font-body text-[15px] font-300 text-vl-muted leading-[1.9]">
              Invented by Sébastien Lagree in Los Angeles in 2001, the Lagree Method is practised on the Microformer — a sophisticated resistance machine that protects your joints while elevating your heart rate.
            </p>
            <p className="font-body text-[15px] font-300 text-vl-muted leading-[1.9]">
              Slow tempo, constant muscular tension. The perfect combination of strength and cardio to sculpt your entire body in record time. Once you try Lagree, you never go back.
            </p>

            <div className="flex gap-8 pt-4 border-t border-vl-terra/15">
              {[
                { n: "50", u: "min" },
                { n: "12", u: "max students" },
                { n: "100%", u: "certified" },
              ].map((s) => (
                <div key={s.u}>
                  <p className="font-heading text-[28px] text-vl-terra leading-none">{s.n}</p>
                  <p className="font-body text-[10px] tracking-[2px] uppercase text-vl-muted/40 mt-1">{s.u}</p>
                </div>
              ))}
            </div>

            <Link href="#book" className="btn-vl self-start mt-2">Book a Lagree Class</Link>
          </ScrollAnimation>
        </div>

        <div className="w-full lg:w-[58%] relative overflow-hidden min-h-[340px] sm:min-h-[460px] lg:min-h-[600px]">
          <Image
            src="/studio/reformer2.jpg"
            alt="Group Lagree class on reformers — VITAMINH studio"
            fill
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover object-center"
          />
          <div className="absolute top-6 right-6 bg-vl-terra px-4 py-2.5">
            <span className="font-heading text-[11px] text-vl-cream tracking-[3px] uppercase">50 min</span>
          </div>
        </div>

      </div>
    </section>
  );
}
