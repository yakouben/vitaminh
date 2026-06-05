import ScrollAnimation from "./ScrollAnimation";

// Key studio differentiators shown as a 4-column stat grid
const pillars = [
  { n: "50 min", label: "Immersive classes",       desc: "Every session fully programmed — no filler, no fluff. Just precise, intentional movement from minute one." },
  { n: "100%",   label: "Certified coaches",        desc: "Every coach at Vitaminh is fully certified and trained to guide you safely, whatever your level." },
  { n: "4",      label: "Disciplines under one roof", desc: "Lagree · Hot Pilates · Yoga · Mobility. The complete toolkit for your body, in one premium space." },
  { n: "<12",    label: "Students per class",       desc: "Small groups, personal attention. You are never lost in the crowd. Every rep matters." },
];

export default function FeaturedIn() {
  return (
    <section className="w-full bg-vl-dark py-24 px-5 sm:px-8 md:px-14">
      <div className="max-w-[1300px] mx-auto">

        <ScrollAnimation animation="fadeInUp" className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="font-heading text-[clamp(36px,5vw,64px)] text-vl-cream leading-[1em]">
            Why Vitaminh?
          </h2>
          <p className="font-body text-[14px] font-300 text-vl-cream/50 max-w-[340px] leading-relaxed">
            We built Vitaminh to be the premium studio Thao Dien deserves — where every detail is intentional and every class delivers.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <ScrollAnimation key={p.label} animation="fadeInUp" delay={i * 0.1}
              className="bg-vl-dark p-8 border border-vl-cream/10 border-b border-b-vl-cream/10 flex flex-col gap-3">
              <p className="font-heading text-[48px] text-vl-terra leading-none">{p.n}</p>
              <p className="font-body text-[11px] font-700 tracking-[3px] uppercase text-vl-cream/50">{p.label}</p>
              <p className="font-body text-[13px] font-300 text-vl-cream/60 leading-relaxed mt-2">{p.desc}</p>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
