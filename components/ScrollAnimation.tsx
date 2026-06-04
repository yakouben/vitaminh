"use client";

import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "fadeIn" | "scaleIn" | "slideUp";
  className?: string;
  delay?: number;
  duration?: number;
}

export default function ScrollAnimation({
  children,
  animation = "fadeInUp",
  className = "",
  delay = 0,
  duration = 0.9,
}: ScrollAnimationProps) {
  const variants: Record<string, Variants> = {
    fadeInUp: {
      hidden:  { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration, delay, ease: [0.22, 1, 0.36, 1] } },
    },
    slideUp: {
      hidden:  { opacity: 0, y: 80, clipPath: "inset(100% 0 0 0)" },
      visible: { opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)", transition: { duration, delay, ease: [0.22, 1, 0.36, 1] } },
    },
    fadeInLeft: {
      hidden:  { opacity: 0, x: -60 },
      visible: { opacity: 1, x: 0, transition: { duration, delay, ease: [0.22, 1, 0.36, 1] } },
    },
    fadeInRight: {
      hidden:  { opacity: 0, x: 60 },
      visible: { opacity: 1, x: 0, transition: { duration, delay, ease: [0.22, 1, 0.36, 1] } },
    },
    fadeIn: {
      hidden:  { opacity: 0 },
      visible: { opacity: 1, transition: { duration, delay, ease: "easeOut" } },
    },
    scaleIn: {
      hidden:  { opacity: 0, scale: 0.92 },
      visible: { opacity: 1, scale: 1, transition: { duration, delay, ease: [0.22, 1, 0.36, 1] } },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants[animation]}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Stagger container — wraps children with cascading delays */
export function StaggerGroup({ children, className = "", stagger = 0.12 }: {
  children: ReactNode; className?: string; stagger?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{ visible: { transition: { staggerChildren: stagger } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const StaggerItem = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <motion.div
    variants={{
      hidden:  { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

/* Parallax wrapper — element moves at a different scroll speed */
export function ParallaxLayer({ children, speed = 0.3, className = "" }: {
  children: ReactNode; speed?: number; className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`${speed * -60}px`, `${speed * 60}px`]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
