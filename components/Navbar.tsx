"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Home",      href: "#" },
  { label: "Classes",   href: "#classes" },
  { label: "Timetable", href: "#timetable" },
  { label: "Pricing",   href: "#book" },
  { label: "Contact",   href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  // Turns solid after 60px scroll — keeps hero image visible on initial load
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-vl-cream/98 backdrop-blur-md shadow-[0_1px_0_0_rgba(196,98,62,0.12)]"
          : "bg-vl-cream/80 backdrop-blur-sm"
      }`}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

          {/* Logo */}
          <Link href="#" className="flex items-center gap-3 flex-shrink-0">
            <Image src="/logo.png" alt="VITAMINH" width={40} height={40} className="w-9 h-9 object-contain" />
            <div className="flex flex-col leading-tight">
              <span className="font-heading text-[15px] text-vl-terra tracking-wider">VITAMINH</span>
              <span className="font-body text-[9px] tracking-[3px] text-vl-terra uppercase opacity-70">Lagree Body Lab</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-10">
            {links.map((l) => (
              <Link key={l.label} href={l.href}
                className="font-body text-[11px] tracking-[2px] uppercase text-vl-terra relative group py-1">
                {l.label}
                {/* Underline slides in from left on hover */}
                <span className="absolute bottom-0 left-0 w-full h-px bg-vl-terra scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link href="#book" className="btn-vl-filled" style={{ padding: "12px 28px", fontSize: "11px", letterSpacing: "2px" }}>
              Login / Sign up
            </Link>
          </div>

          {/* Burger — 3 spans rotate into an × when open */}
          <button className="lg:hidden flex flex-col gap-1.5 p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            <span className={`w-7 h-[2px] bg-vl-terra transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`w-7 h-[2px] bg-vl-terra transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`w-7 h-[2px] bg-vl-terra transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>

        {/* Mobile menu — max-h animates 0 → 400px; CSS can't transition height:auto */}
        <div className={`lg:hidden overflow-hidden transition-all duration-400 ease-in-out ${open ? "max-h-[400px]" : "max-h-0"}`}>
          <div className="bg-vl-cream border-t border-vl-terra/10 px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <Link key={l.label} href={l.href} onClick={() => setOpen(false)}
                className="font-body text-[12px] tracking-[3px] uppercase text-vl-terra">
                {l.label}
              </Link>
            ))}
            <Link href="#book" className="btn-vl-filled self-start mt-2" onClick={() => setOpen(false)}>
              Login / Sign up
            </Link>
          </div>
        </div>
      </nav>

      {/* Spacer so content starts below the fixed nav bar */}
      <div className="h-20" />
    </>
  );
}
