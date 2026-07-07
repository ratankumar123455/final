"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function AnimatedCounter({
  value,
  duration = 1.6,
}: {
  value: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  const match = value.match(/^([\d.]+)(.*)$/);
  const [display, setDisplay] = useState(
    match ? `${match[1].includes(".") ? "0.0" : "0"}${match[2]}` : value,
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || !match) return;

    const target = parseFloat(match[1]);
    const suffix = match[2];
    const decimals = match[1].includes(".") ? match[1].split(".")[1].length : 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration,
            ease: "power2.out",
            onUpdate: () => setDisplay(`${obj.val.toFixed(decimals)}${suffix}`),
            onComplete: () => setDisplay(`${match[1]}${suffix}`),
          });
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration]);

  return <span ref={ref}>{display}</span>;
}
