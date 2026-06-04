"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

function wrap(min: number, max: number, v: number): number {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

interface VelocityRowProps {
  text: string;
  baseVelocity?: number; // positive = right, negative = left
  className?: string;
}

export function VelocityRow({ text, baseVelocity = -4, className = "" }: VelocityRowProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  // Smooth out the scroll velocity so it feels fluid, not jerky
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  // Map scroll velocity to a factor that amplifies or reverses the marquee
  const velocityFactor = useTransform(smoothVelocity, [-3000, 3000], [-8, 8], {
    clamp: false,
  });

  // Wrap x percentage so the 4 repeated text spans loop seamlessly
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(baseVelocity < 0 ? -1 : 1);

  useAnimationFrame((_, delta) => {
    const vf = velocityFactor.get();

    // Scroll down (vf > 0) → flip direction to forward; scroll up → reverse
    if (vf < -0.2) directionFactor.current = -1;
    else if (vf > 0.2) directionFactor.current = 1;

    // Base movement + scroll-amplified movement
    let moveBy = directionFactor.current * Math.abs(baseVelocity) * (delta / 1000);
    moveBy += directionFactor.current * moveBy * Math.abs(vf) * 0.6;

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        style={{ x }}
        className="flex whitespace-nowrap will-change-transform"
      >
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className="shrink-0 pr-4">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
