import { VelocityRow } from "./VelocityMarquee";

export default function MarqueeSection() {
  return (
    <section className="w-full bg-vl-cream py-10 overflow-hidden border-y border-vl-terra/15 flex flex-col gap-3">
      {/* Row 1 — auto scrolls LEFT, scroll-down reverses to RIGHT */}
      <VelocityRow
        text="· LAGREE · HOT PILATES · YOGA · MOBILITY · SURPRISE CLASS · LAGREE · HOT PILATES · YOGA · MOBILITY · SURPRISE CLASS"
        baseVelocity={-5}
        className="font-heading text-[clamp(36px,6vw,80px)] text-vl-terra opacity-60 leading-none"
      />
      <VelocityRow
        text="HIGH INTENSITY · LOW IMPACT · TOTAL TRANSFORMATION · HIGH INTENSITY · LOW IMPACT · TOTAL TRANSFORMATION"
        baseVelocity={5}
        className="font-heading text-[clamp(36px,6vw,80px)] text-vl-terra opacity-30 leading-none"
      />
    </section>
  );
}
