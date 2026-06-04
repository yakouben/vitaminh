import { VelocityRow } from "./VelocityMarquee";

export default function MarqueeSection2() {
  return (
    <section className="w-full bg-vl-cream py-8 overflow-hidden border-y border-vl-terra/15 flex flex-col gap-3">
      <VelocityRow
        text="· BODY · MIND · MOVEMENT · BODY · MIND · MOVEMENT · BODY · MIND · MOVEMENT · BODY · MIND · MOVEMENT"
        baseVelocity={-4}
        className="font-heading text-[clamp(36px,6vw,72px)] text-vl-dark opacity-10 leading-none"
      />
      <VelocityRow
        text="SCULPT · STRENGTHEN · RESTORE · SCULPT · STRENGTHEN · RESTORE · SCULPT · STRENGTHEN · RESTORE"
        baseVelocity={4}
        className="font-heading text-[clamp(36px,6vw,72px)] text-vl-terra opacity-30 leading-none"
      />
    </section>
  );
}
