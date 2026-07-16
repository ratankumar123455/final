import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the team behind Metabob Private Limited's generative AI platform.",
};

const team = [
  {
    name: "Aarav Mehta",
    role: "Founder & CEO",
    qualification: "B.Tech Computer Science",
    experience: "10+ Years",
    bio: "Leads product strategy and enterprise partnerships, with a background in scaling infrastructure-heavy AI products.",
  },
  {
    name: "Sanya Kapoor",
    role: "Co-Founder & Chief AI Officer",
    qualification: "M.S. Machine Learning",
    experience: "9+ Years",
    bio: "Leads generative model research — diffusion architectures for image and video generation, and the fine-tuning pipeline behind them.",
  },
  {
    name: "Rohan Verma",
    role: "Head of Infrastructure",
    qualification: "B.Tech Information Technology",
    experience: "8+ Years",
    bio: "Owns the NVIDIA GPU and AWS infrastructure that keeps generation fast and available at 99.9% uptime.",
  },
  {
    name: "Ishita Bose",
    role: "Lead ML Engineer, Image",
    qualification: "M.Tech Artificial Intelligence",
    experience: "6+ Years",
    bio: "Trains and fine-tunes the text-to-image diffusion models, focused on photorealism, style range, and prompt fidelity.",
  },
  {
    name: "Vikram Desai",
    role: "Lead ML Engineer, Video",
    qualification: "B.Tech Computer Science",
    experience: "6+ Years",
    bio: "Builds the image-to-video pipeline, with a focus on temporal consistency, camera motion control, and render speed.",
  },
  {
    name: "Meera Iyer",
    role: "Head of Product Design",
    qualification: "Bachelor of Design",
    experience: "7+ Years",
    bio: "Designs the generation workspace and API developer experience, grounded in how creators actually iterate on a prompt.",
  },
  {
    name: "Karthik Rao",
    role: "Head of Customer Success",
    qualification: "MBA Business Management",
    experience: "5+ Years",
    bio: "Manages enterprise onboarding, API integrations, and support for Studio and Enterprise customers.",
  },
];

export default function TeamPage() {
  return (
    <div>
      <PageHero
        eyebrow="Team"
        title={
          <>
            The people building <span className="text-generated">Metabob</span>
          </>
        }
        description="A focused team of ML researchers, infrastructure engineers, and product designers working on generative image and video AI."
      />

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Leadership & Team" title="Meet the team" />
          <div className="hairline-t grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 60} className="hairline-b py-8">
                <div
                  className="font-display flex h-16 w-16 items-center justify-center rounded-full text-xl text-pure"
                  style={{
                    backgroundImage:
                      "linear-gradient(150deg, rgba(143,188,148,0.9), rgba(253,246,233,0.9))",
                  }}
                  aria-hidden="true"
                >
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="font-display mt-4 text-lg text-paper">{member.name}</h3>
                <p className="mono-label mt-1 text-[11px] text-accent">{member.role}</p>
                <p className="mono-label mt-2 text-[10px] text-muted-2">
                  {member.qualification} · {member.experience}
                </p>
                <p className="mt-3 text-sm text-muted">{member.bio}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Want to work with us?"
        description="Reach out if you're interested in joining Metabob or partnering with us."
        primaryHref="/contact"
        primaryLabel="Contact us"
        secondaryHref="/about"
        secondaryLabel="Learn about Metabob"
      />
    </div>
  );
}
