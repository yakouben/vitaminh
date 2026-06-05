import Link from "next/link";
import ScrollAnimation from "./ScrollAnimation";

// Exclusive recurring events — update when the monthly schedule changes
const surprises = [
  {
    date: "Monthly",
    name: "Sunrise Lagree",
    tag: "Limited · 8 spots",
    desc: "The studio before the city wakes up. 06:30. Reformers, golden light, silence. Reserved for early risers.",
  },
  {
    date: "Quarterly",
    name: "Mobility Reset Workshop",
    tag: "Workshop · 10 spots",
    desc: "A 90-minute deep dive into mobility and recovery. Release what you've been carrying. Leave different.",
  },
  {
    date: "Monthly",
    name: "Hot Pilates Masterclass",
    tag: "Masterclass · 12 spots",
    desc: "One coach. One focus. Elevated technique, elevated intensity. For members ready to go further.",
  },
];

export default function SurpriseClassesSection() {
  return (
    <section className="w-full bg-vl-dark py-24 px-5 sm:px-8 md:px-14">
      <div className="max-w-[1300px] mx-auto">

        <ScrollAnimation animation="fadeInUp" className="mb-16">
          <p className="font-body text-[11px] tracking-[4px] uppercase text-vl-cream/40 mb-4">Surprise Classes</p>
          <h2 className="font-heading text-[clamp(40px,5vw,64px)] text-vl-cream leading-[1em]">
            Something<br />unexpected.
          </h2>
          <p className="font-body text-[15px] font-300 text-vl-cream/50 max-w-[480px] leading-relaxed mt-6">
            Each month we launch exclusive events, masterclasses and early-morning sessions for members who like being surprised.
          </p>
        </ScrollAnimation>

        {/* Event list — divider lines create the row separators */}
        <div className="flex flex-col divide-y divide-vl-cream/10">
          {surprises.map((s, i) => (
            <ScrollAnimation key={s.name} animation="fadeInUp" delay={i * 0.1}
              className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10 py-8 group">
              <p className="font-heading text-[13px] tracking-[4px] uppercase text-vl-terra w-24 flex-shrink-0">{s.date}</p>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline gap-4 mb-2">
                  <h3 className="font-heading text-[22px] text-vl-cream leading-none group-hover:text-vl-terra transition-colors duration-300">{s.name}</h3>
                  <span className="font-body text-[10px] tracking-[3px] uppercase text-vl-light-terra/50 border border-vl-light-terra/20 px-3 py-1 rounded-full">{s.tag}</span>
                </div>
                <p className="font-body text-[14px] font-300 text-vl-cream/50 leading-relaxed">{s.desc}</p>
              </div>
              <Link href="#book" className="btn-vl-light flex-shrink-0 self-start sm:self-center">
                Reserve
              </Link>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation animation="fadeInUp" className="mt-10 pt-10 border-t border-vl-cream/10">
          <p className="font-body text-[12px] font-300 text-vl-cream/30 tracking-wide">
            New surprise classes drop every 1st of the month — newsletter subscribers get 24h early access.
          </p>
        </ScrollAnimation>
      </div>
    </section>
  );
}
