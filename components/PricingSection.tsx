import Link from "next/link";
import ScrollAnimation from "./ScrollAnimation";

// highlight: true = terracotta background, used for the featured "Most Popular" plan
const plans = [
  {
    tag: "New Members",
    name: "Intro Pack",
    price: "$69",
    period: "2 weeks unlimited",
    desc: "The best way to discover all 4 disciplines. Unlimited classes for 2 weeks. No commitment.",
    features: ["All 4 disciplines", "Unlimited sessions", "Valid 2 weeks", "First-timer welcome"],
    cta: "Start Now",
    highlight: false,
  },
  {
    tag: "Most Popular",
    name: "Class Pack",
    price: "$200",
    period: "10 classes",
    desc: "Flexible access to any discipline. Use at your own pace, valid for 3 months.",
    features: ["Any discipline", "10 sessions", "Valid 3 months", "Book anytime"],
    cta: "Buy Pack",
    highlight: true,
  },
  {
    tag: "Members",
    name: "Unlimited",
    price: "$180",
    period: "per month",
    desc: "Full access. Every class, every day. The Vitaminh lifestyle, without limits.",
    features: ["All disciplines", "Unlimited sessions", "Priority booking", "Member events"],
    cta: "Become a Member",
    highlight: false,
  },
];

export default function PricingSection() {
  return (
    <section className="w-full bg-vl-dark py-24 px-5 sm:px-8 md:px-14">
      <div className="max-w-[1300px] mx-auto">

        <ScrollAnimation animation="fadeInUp" className="mb-4">
          <p className="eyebrow mb-6">Pricing</p>
          <h2 className="font-heading text-[clamp(36px,5vw,60px)] text-vl-cream leading-[1em] mb-6">
            Choose your practice.
          </h2>
          <p className="font-body text-[13px] font-300 text-vl-cream/40 tracking-[2px] uppercase mb-14">
            All classes 50 minutes · Max 12 students · 100% certified coaches
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <ScrollAnimation key={plan.name} animation="fadeInUp" delay={i * 0.1}>
              <div className={`flex flex-col h-full ${plan.highlight ? "bg-vl-terra p-10" : "border border-vl-cream/15 p-10"}`}>
                <span className="self-start mb-6 px-3 py-1 font-body text-[10px] font-700 tracking-[3px] uppercase rounded-full border border-vl-cream/30 text-vl-cream">
                  {plan.tag}
                </span>
                <p className="font-heading text-[36px] text-vl-cream leading-none mb-2">{plan.name}</p>
                <p className="font-heading text-[52px] text-vl-cream leading-none mb-1">{plan.price}</p>
                <p className="font-body text-[12px] font-300 text-vl-cream/60 tracking-[2px] uppercase mb-6">{plan.period}</p>
                <p className="font-body text-[14px] font-300 text-vl-cream/70 leading-relaxed mb-8">{plan.desc}</p>
                <ul className="flex flex-col gap-3 mb-10 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="font-body text-[13px] font-300 text-vl-cream/80 flex items-center gap-3">
                      <span className="text-vl-cream/40">·</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="#book" className="btn-vl-light self-start">{plan.cta}</Link>
              </div>
            </ScrollAnimation>
          ))}
        </div>

      </div>
    </section>
  );
}
