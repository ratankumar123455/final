"use client";

import { motion } from "framer-motion";
import {
  Atom,
  Triangle,
  FileCode,
  Server,
  Terminal,
  Sparkles,
  Brain,
  Cloud,
  Box,
  Database,
  Palette,
  Wand2,
  Smartphone,
  Flame,
  PenTool,
  Target,
  Share2,
  BarChart3,
  Users,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const stack: { name: string; icon: LucideIcon; color?: string }[] = [
  { name: "React", icon: Atom },
  { name: "Next.js", icon: Triangle },
  { name: "TypeScript", icon: FileCode },
  { name: "Tailwind CSS", icon: Palette },
  { name: "Node.js", icon: Server },
  { name: "Python", icon: Terminal },
  { name: "PostgreSQL", icon: Database },
  { name: "MongoDB", icon: Database },
  { name: "OpenAI", icon: Sparkles },
  { name: "LangChain", icon: Brain },
  { name: "AWS", icon: Cloud, color: "#FF9900" },
  { name: "Docker", icon: Box },
  { name: "React Native", icon: Smartphone },
  { name: "Firebase", icon: Flame },
  { name: "Figma", icon: PenTool },
  { name: "Google Ads", icon: Target },
  { name: "Meta Ads", icon: Share2 },
  { name: "Google Analytics", icon: BarChart3 },
  { name: "HubSpot", icon: Users },
  { name: "Framer Motion", icon: Wand2 },
];

export default function TechLogos() {
  return (
    <section className="hairline-b py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Technologies"
          title="Tools across every service we deliver"
          description="From marketing and design to engineering, AI, and cloud infrastructure — this is what we build, launch, and grow your business with."
          align="center"
        />
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-5">
          {stack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 5) * 0.06, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="glass-panel flex flex-col items-center gap-3 rounded-2xl p-5 text-center"
            >
              <tech.icon
                className={tech.color ? "h-6 w-6" : "h-6 w-6 text-accent"}
                style={tech.color ? { color: tech.color } : undefined}
                strokeWidth={1.5}
              />
              <span className="mono-label text-[10px] text-muted">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
