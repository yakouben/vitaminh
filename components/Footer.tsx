import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-vl-dark pt-16 pb-10 px-8 md:px-14 relative overflow-hidden">

      {/* Logo watermark */}
      <div className="absolute right-0 bottom-0 pointer-events-none">
        <Image src="/logo.png" alt="" width={300} height={300}
          className="w-64 h-64 object-contain opacity-[0.04]" />
      </div>

      <div className="max-w-[1300px] mx-auto relative z-10">

        {/* Top — brand + tagline */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 pb-14 border-b border-vl-cream/10">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="VITAMINH" width={44} height={44} className="w-10 h-10 object-contain" />
              <div className="flex flex-col">
                <span className="font-heading text-[16px] text-vl-cream tracking-wider">VITAMINH</span>
                <span className="font-body text-[9px] tracking-[3px] text-vl-cream/40 uppercase">Lagree Body Lab</span>
              </div>
            </div>
            <p className="font-body text-[13px] font-300 text-vl-cream/40 max-w-[280px] leading-relaxed">
              The first premium Lagree studio in Thao Dien, Ho Chi Minh City.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-3">
            {[
              ["Home", "#"],
              ["Classes", "#classes"],
              ["Timetable", "#"],
              ["Pricing", "#book"],
              ["Contact", "#contact"],
              ["FAQ", "#"],
              ["Lagree", "#classes"],
              ["Hot Pilates", "#classes"],
              ["Yoga", "#classes"],
            ].map(([label, href]) => (
              <Link key={label} href={href}
                className="font-body text-[12px] font-300 text-vl-cream/40 hover:text-vl-cream transition-colors tracking-wide">
                {label}
              </Link>
            ))}
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4">
            <p className="font-body text-[10px] tracking-[3px] uppercase text-vl-cream/30">Social</p>
            <div className="flex gap-3">
              {[
                {
                  href: "https://www.instagram.com/vitaminh.studio/",
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  ),
                },
                {
                  href: "https://www.tiktok.com/@vitaminh.studio",
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.22 8.22 0 004.81 1.55V6.79a4.85 4.85 0 01-1.04-.1z"/>
                    </svg>
                  ),
                },
              ].map(({ href, icon }) => (
                <Link key={href} href={href} target="_blank"
                  className="w-9 h-9 rounded-full border border-vl-cream/20 flex items-center justify-center text-vl-cream/40 hover:text-vl-cream hover:border-vl-cream/60 transition-all">
                  {icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8">
          <p className="font-body text-[11px] font-300 text-vl-cream/25 tracking-wide">
            ©2025 VITAMINH LAGREE BODY LAB — All rights reserved
          </p>
          <div className="flex gap-8">
            {["Privacy Policy", "Terms & Conditions", "Legal Notice"].map((l) => (
              <Link key={l} href="#" className="font-body text-[11px] font-300 text-vl-cream/25 hover:text-vl-cream/60 transition-colors">
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
