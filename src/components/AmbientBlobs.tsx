"use client";

import { motion, useReducedMotion } from "framer-motion";

type Blob = { size: number; top: string; left: string; color: string; duration: number };

const blobs: Blob[] = [
  { size: 420, top: "-10%", left: "5%", color: "rgba(91,33,255,0.28)", duration: 14 },
  { size: 360, top: "10%", left: "70%", color: "rgba(0,217,255,0.18)", duration: 18 },
  { size: 300, top: "55%", left: "35%", color: "rgba(20,241,149,0.12)", duration: 22 },
];

export default function AmbientBlobs({ className = "" }: { className?: string }) {
  const prefersReduced = useReducedMotion();

  return (
    <div className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`} aria-hidden="true">
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: blob.size,
            height: blob.size,
            top: blob.top,
            left: blob.left,
            background: blob.color,
            filter: "blur(60px)",
          }}
          animate={
            prefersReduced
              ? undefined
              : {
                  x: [0, 30, -20, 0],
                  y: [0, -25, 15, 0],
                  scale: [1, 1.08, 0.96, 1],
                }
          }
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
