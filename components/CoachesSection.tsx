import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "./ScrollAnimation";

// Coach roster — update specialty tag and image when coaches change
const coaches = [
  {
    name: "Nhut",
    title: "Head Coach — Lagree",
    bio: "Lagree-certified. Trained directly on the Megaformer methodology. Nhut's sessions are precise, demanding and transformative — every rep has a reason.",
    specialty: "Lagree · Strength",
    image: "/pilates.png",
  },
  {
    name: "Sophie",
    title: "Hot Pilates & Yoga",
    bio: "200h RYT certified. Sophie's classes sit at the intersection of heat, breath and control — demanding enough to challenge, grounded enough to restore.",
    specialty: "Hot Pilates · Yoga",
    image: "/pilates1.png",
  },
  {
    name: "Marie",
    title: "Yoga & Mobility",
    bio: "Mobility specialist and yoga teacher. Marie's work is slow by design — and the results are not. The recovery work your body has quietly been asking for.",
    specialty: "Yoga · Mobility",
    image: "/pilates2.png",
  },
];

export default function CoachesSection() {
  return (
    <section className="w-full bg-vl-cream py-24 px-5 sm:px-8 md:px-14">
      <div className="max-w-[1300px] mx-auto">

        <ScrollAnimation animation="fadeInUp" className="mb-16">
          <p className="eyebrow mb-6">Our Coaches</p>
          <h2 className="font-heading text-[clamp(36px,5vw,60px)] text-vl-terra leading-[1em]">
            The people behind the practice.
          </h2>
        </ScrollAnimation>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {coaches.map((coach, i) => (
            <ScrollAnimation key={coach.name} animation="fadeInUp" delay={i * 0.15}>
              <div className="flex flex-col">
                <Image
                  src={coach.image}
                  alt={`${coach.name} — ${coach.title}`}
                  width={600}
                  height={700}
                  loading="lazy"
                  className="w-full h-[380px] object-cover object-top"
                />
                <div className="pt-6 flex flex-col gap-3">
                  <p className="font-heading text-[22px] text-vl-terra leading-none">{coach.name}</p>
                  <p className="eyebrow">{coach.title}</p>
                  <p className="font-body text-[14px] font-300 text-vl-muted/70 leading-relaxed">{coach.bio}</p>
                  <span className="self-start mt-2 px-4 py-1.5 border border-vl-terra/30 font-body text-[11px] font-400 tracking-[2px] uppercase text-vl-terra rounded-full">
                    {coach.specialty}
                  </span>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation animation="fadeInUp" delay={0.2} className="mt-14">
          <Link href="#book" className="btn-vl">Meet them in class</Link>
        </ScrollAnimation>

      </div>
    </section>
  );
}
