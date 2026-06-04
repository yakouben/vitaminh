import Link from "next/link";
import ScrollAnimation from "./ScrollAnimation";

const disciplines = [
  {
    name: "Lagree",
    tag: "01",
    line: "High intensity, low impact.",
    desc: "Practised on the Microformer — sculpts your body in record time through constant muscular tension and slow, deliberate tempo. Joint-safe. Results you feel.",
  },
  {
    name: "Hot Pilates",
    tag: "02",
    line: "Our signature burn.",
    desc: "35°C. The heat hits. Your body responds. All intensity, full body — combining muscular strengthening and endurance while activating circulation and perspiration.",
  },
  {
    name: "Yoga",
    tag: "03",
    line: "Move. Breathe. Reset.",
    desc: "From Vinyasa to Yin, Hatha to Restorative — each approach meets the needs of your body and mind. Strength, mobility, relaxation. Come as you are. Leave different.",
  },
  {
    name: "Mobility",
    tag: "04",
    line: "Slow down to move better.",
    desc: "Release tension, restore range of motion and build a body that moves with ease. The foundation of longevity. Your recovery is your training.",
  },
];

export default function StorySection() {
  return (
    <section id="classes" className="w-full bg-vl-cream py-24 px-5 sm:px-8 md:px-14 scroll-mt-24">
      <div className="max-w-[1300px] mx-auto">

        <ScrollAnimation animation="fadeInUp" className="mb-16">
          <p className="eyebrow mb-4">4 Disciplines</p>
          <h2 className="font-heading text-[clamp(40px,6vw,72px)] text-vl-terra leading-[1em] max-w-[700px]">
            One space.<br />Every dimension<br />of your body.
          </h2>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-vl-terra/15">
          {disciplines.map((d, i) => (
            <ScrollAnimation key={d.name} animation="fadeInUp" delay={i * 0.1}
              className="bg-vl-cream p-10 flex flex-col gap-4 group hover:bg-vl-terra transition-colors duration-500">
              <span className="font-body text-[10px] tracking-[4px] uppercase text-vl-terra group-hover:text-vl-cream/60 transition-colors">{d.tag}</span>
              <h3 className="font-heading text-[32px] text-vl-terra group-hover:text-vl-cream transition-colors leading-none">{d.name}</h3>
              <p className="font-body text-[13px] font-700 tracking-wide text-vl-muted group-hover:text-vl-cream/80 transition-colors uppercase">{d.line}</p>
              <p className="font-body text-[14px] font-300 text-vl-muted/70 group-hover:text-vl-cream/70 transition-colors leading-relaxed">{d.desc}</p>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation animation="fadeInUp" className="mt-12 flex gap-4">
          <Link href="#book" className="btn-vl">View Full Schedule</Link>
          <Link href="#book" className="btn-vl-filled">Book a Class</Link>
        </ScrollAnimation>
      </div>
    </section>
  );
}
