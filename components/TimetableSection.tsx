import Link from "next/link";
import ScrollAnimation from "./ScrollAnimation";
import { StaggerGroup, StaggerItem } from "./ScrollAnimation";

const schedule = [
  { day: "Monday", classes: [
    { time: "07:00", name: "Lagree",      coach: "Nhut" },
    { time: "09:00", name: "Hot Pilates", coach: "Sophie" },
    { time: "11:00", name: "Yoga",        coach: "Marie" },
    { time: "17:30", name: "Lagree",      coach: "Nhut" },
    { time: "19:00", name: "Mobility",    coach: "Marie" },
  ]},
  { day: "Tuesday", classes: [
    { time: "07:00", name: "Mobility",    coach: "Marie" },
    { time: "09:00", name: "Lagree",      coach: "Nhut" },
    { time: "11:00", name: "Hot Pilates", coach: "Sophie" },
    { time: "17:30", name: "Yoga",        coach: "Marie" },
    { time: "19:00", name: "Lagree",      coach: "Nhut" },
  ]},
  { day: "Wednesday", classes: [
    { time: "07:00", name: "Lagree",      coach: "Nhut" },
    { time: "09:00", name: "Yoga",        coach: "Sophie" },
    { time: "11:00", name: "Hot Pilates", coach: "Sophie" },
    { time: "17:30", name: "Lagree",      coach: "Nhut" },
    { time: "19:00", name: "Mobility",    coach: "Marie" },
  ]},
  { day: "Thursday", classes: [
    { time: "07:00", name: "Hot Pilates", coach: "Sophie" },
    { time: "09:00", name: "Lagree",      coach: "Nhut" },
    { time: "11:00", name: "Mobility",    coach: "Marie" },
    { time: "17:30", name: "Hot Pilates", coach: "Sophie" },
    { time: "19:00", name: "Lagree",      coach: "Nhut" },
  ]},
  { day: "Friday", classes: [
    { time: "07:00", name: "Lagree",      coach: "Nhut" },
    { time: "09:00", name: "Hot Pilates", coach: "Sophie" },
    { time: "11:00", name: "Yoga",        coach: "Marie" },
    { time: "17:30", name: "Lagree",      coach: "Nhut" },
    { time: "19:00", name: "Mobility",    coach: "Marie" },
  ]},
  { day: "Saturday", classes: [
    { time: "08:00", name: "Lagree",      coach: "Nhut" },
    { time: "10:00", name: "Hot Pilates", coach: "Sophie" },
    { time: "12:00", name: "Yoga",        coach: "Marie" },
    { time: "14:00", name: "Mobility",    coach: "Marie" },
  ]},
];

const dot: Record<string, string> = {
  "Lagree":      "bg-vl-terra",
  "Hot Pilates": "bg-[#e8a87c]",
  "Yoga":        "bg-[#a8b87c]",
  "Mobility":    "bg-vl-light-terra",
};

const label: Record<string, string> = {
  "Lagree":      "text-vl-terra",
  "Hot Pilates": "text-[#c07040]",
  "Yoga":        "text-[#607040]",
  "Mobility":    "text-[#8a6050]",
};

export default function TimetableSection() {
  return (
    <section id="timetable" className="w-full bg-vl-cream py-24 px-5 sm:px-8 md:px-14 scroll-mt-24">
      <div className="max-w-[1300px] mx-auto">

        <ScrollAnimation animation="fadeInUp" className="mb-14">
          <p className="eyebrow mb-5">Weekly Schedule</p>
          <h2 className="font-heading text-[clamp(36px,5vw,60px)] text-vl-terra leading-[1em] mb-4">
            Find your class.
          </h2>
          <p className="font-body text-[12px] font-300 text-vl-muted/50 tracking-[2px] uppercase">
            Mon – Sat · 07:00 – 20:00 · 50 min · Max 12 students
          </p>
        </ScrollAnimation>

        {/* Discipline legend */}
        <ScrollAnimation animation="fadeInUp" className="flex flex-wrap gap-4 mb-10">
          {Object.entries(dot).map(([name, cls]) => (
            <div key={name} className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full shrink-0 ${cls}`} />
              <span className="font-body text-[11px] tracking-[2px] uppercase text-vl-muted/50">{name}</span>
            </div>
          ))}
        </ScrollAnimation>

        {/*
          Grid layout:
          - mobile (default):  2 columns  → 3 rows of 2 days
          - md (768px+):       3 columns  → 2 rows of 3 days
          - lg (1024px+):      6 columns  → 1 row of all 6 days
        */}
        <StaggerGroup className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-vl-terra/10">
          {schedule.map((col) => (
            <StaggerItem key={col.day}>
              <div className="bg-vl-cream p-4 sm:p-5 flex flex-col h-full">

                {/* Day header */}
                <p className="font-body text-[10px] font-700 tracking-[3px] uppercase text-vl-dark mb-4 pb-3 border-b border-vl-terra/15">
                  {col.day}
                </p>

                {/* Class slots */}
                <div className="flex flex-col gap-0">
                  {col.classes.map((cls, i) => (
                    <div key={i} className="py-3 border-b border-vl-dark/8 last:border-0 flex items-start gap-2.5">
                      <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${dot[cls.name]}`} />
                      <div>
                        <p className="font-body text-[10px] tracking-[1px] text-vl-muted/40">{cls.time}</p>
                        <p className={`font-body text-[12px] sm:text-[13px] font-400 uppercase tracking-[0.5px] mt-0.5 ${label[cls.name]}`}>
                          {cls.name}
                        </p>
                        <p className="font-body text-[10px] font-300 text-vl-muted/40 mt-0.5">{cls.coach}</p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <ScrollAnimation animation="fadeInUp" delay={0.1} className="mt-10">
          <Link href="#book" className="btn-vl">Book a Class</Link>
        </ScrollAnimation>

      </div>
    </section>
  );
}
