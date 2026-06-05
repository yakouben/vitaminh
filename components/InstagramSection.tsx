import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "./ScrollAnimation";
import { StaggerGroup, StaggerItem } from "./ScrollAnimation";

// Instagram feed preview — update src/caption when new content goes live
const posts = [
  { src: "/studio/reformer2.jpg",                                                  caption: "Lagree. The method that changes everything." },
  { src: "/pilates1.png",                                                           caption: "Every rep. Intentional. Controlled. Precise." },
  { src: "https://images.pexels.com/photos/33360042/pexels-photo-33360042.jpeg",   caption: "Hot Pilates. 35°C. Come sweat with us." },
  { src: "https://images.pexels.com/photos/8436684/pexels-photo-8436684.jpeg",     caption: "Yoga. Move. Breathe. Reset." },
  { src: "https://images.pexels.com/photos/25596894/pexels-photo-25596894.jpeg",   caption: "The studio. Thao Dien, Ho Chi Minh City." },
  { src: "https://images.pexels.com/photos/8436574/pexels-photo-8436574.jpeg",     caption: "Mobility. Slow down to move better." },
];

export default function InstagramSection() {
  return (
    <section className="w-full bg-vl-dark py-24 px-5 sm:px-8 md:px-14">
      <div className="max-w-[1300px] mx-auto">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <ScrollAnimation animation="fadeInLeft">
            <p className="font-body text-[11px] font-700 tracking-[4px] uppercase text-vl-terra mb-4">Follow the journey</p>
            <h2 className="font-heading text-[clamp(36px,5vw,60px)] text-vl-cream leading-[1em]">
              @vitaminh.studio
            </h2>
          </ScrollAnimation>
          <ScrollAnimation animation="fadeInRight">
            <Link href="https://www.instagram.com/vitaminh.studio/" target="_blank" className="btn-vl-light">
              Follow on Instagram
            </Link>
          </ScrollAnimation>
        </div>

        {/* 2-col on mobile, 3-col on md+ — caption fades in on hover */}
        <StaggerGroup className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {posts.map((p, i) => (
            <StaggerItem key={i}>
              <Link href="https://www.instagram.com/vitaminh.studio/" target="_blank"
                className="relative aspect-square block overflow-hidden group bg-vl-dark">
                <Image
                  src={p.src}
                  alt={p.caption}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-vl-dark/0 group-hover:bg-vl-dark/55 transition-all duration-500 flex items-end p-4 md:p-5">
                  <p className="font-body text-[10px] md:text-[11px] tracking-[2px] uppercase text-vl-cream opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-3 group-hover:translate-y-0 leading-relaxed">
                    {p.caption}
                  </p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
