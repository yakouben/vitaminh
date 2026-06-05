"use client";
import Link from "next/link";

// Thin top bar — update copy here when running promos or location changes
export default function AnnouncementBar() {
  return (
    <div className="w-full bg-[#1c0f09] text-[#faf3e0] text-[11px] font-body tracking-[2px] uppercase py-3 px-4 text-center">
      Now open in Thao Dien, Ho Chi Minh City&nbsp;&nbsp;·&nbsp;&nbsp;
      <Link href="#book" className="underline underline-offset-2 hover:text-vl-light-terra transition-colors">
        Book your first class →
      </Link>
    </div>
  );
}
