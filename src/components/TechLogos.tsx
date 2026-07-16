"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Cpu,
  Boxes,
  Database,
  Server,
  Terminal,
  Zap,
  Image as ImageIcon,
  Clapperboard,
  Lock,
  Gauge,
  Globe,
  Layers,
  Code2,
  Webhook,
  BarChart3,
  Wand2,
  ShieldCheck,
  GitBranch,
  Network,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const stack: { name: string; icon: LucideIcon; color?: string }[] = [
  { name: "NVIDIA H100", icon: Cpu, color: "#76B900" },
  { name: "NVIDIA A100", icon: Zap, color: "#76B900" },
  { name: "CUDA", icon: Terminal, color: "#76B900" },
  { name: "AWS EC2", icon: Server, color: "#FF9900" },
  { name: "AWS S3", icon: Database, color: "#FF9900" },
  { name: "AWS SageMaker", icon: Boxes, color: "#FF9900" },
  { name: "AWS Bedrock", icon: Cloud, color: "#FF9900" },
  { name: "Diffusion Models", icon: ImageIcon },
  { name: "Video Diffusion", icon: Clapperboard },
  { name: "PyTorch", icon: Layers },
  { name: "REST API", icon: Code2 },
  { name: "Webhooks", icon: Webhook },
  { name: "Global CDN", icon: Globe },
  { name: "Auto-scaling", icon: Network },
  { name: "SOC 2-aligned", icon: ShieldCheck },
  { name: "Encryption", icon: Lock },
  { name: "Low Latency", icon: Gauge },
  { name: "Usage Analytics", icon: BarChart3 },
  { name: "CI/CD", icon: GitBranch },
  { name: "Style Control", icon: Wand2 },
];

export default function TechLogos() {
  return (
    <section className="hairline-b py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Technologies"
          title="The stack behind every render"
          description="NVIDIA GPUs, AWS infrastructure, and a generation pipeline engineered for speed and reliability at scale."
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
