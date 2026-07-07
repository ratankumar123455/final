import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the team behind Sutertai Private Limited.",
};

const team = [
  {
    name: "Ramesh Sharma",
    role: "Founder & CEO",
    qualification: "B.Tech Computer Science",
    experience: "10+ Years",
    bio: "Leads AI strategy, business development, digital transformation, and enterprise consulting with expertise in scalable technology solutions.",
  },
  {
    name: "Karan Kumar",
    role: "Senior Software Engineer",
    qualification: "B.Tech Information Technology",
    experience: "8+ Years",
    bio: "Specializes in full-stack development, enterprise software, cloud applications, APIs, and system architecture.",
  },
  {
    name: "Rohit Singh",
    role: "Digital Marketing Manager",
    qualification: "MBA Marketing",
    experience: "7+ Years",
    bio: "Expert in SEO, PPC, social media campaigns, content strategy, analytics, and lead generation.",
  },
  {
    name: "Aman Singh",
    role: "UI/UX Designer",
    qualification: "Bachelor of Design",
    experience: "6+ Years",
    bio: "Designs intuitive user experiences with modern interfaces, accessibility standards, and interactive prototypes.",
  },
  {
    name: "Raunit Kumar",
    role: "AI & Automation Engineer",
    qualification: "B.Tech Artificial Intelligence",
    experience: "5+ Years",
    bio: "Builds AI-powered chatbots, automation workflows, machine learning integrations, and intelligent business systems.",
  },
  {
    name: "Nisha Singh",
    role: "HR & Client Success Manager",
    qualification: "MBA Human Resources",
    experience: "6+ Years",
    bio: "Manages talent acquisition, client relationships, onboarding, and long-term customer success.",
  },
  {
    name: "Mayank Yadav",
    role: "Business Development Executive",
    qualification: "MBA Business Management",
    experience: "5+ Years",
    bio: "Drives partnerships, identifies growth opportunities, manages enterprise sales, and develops strategic business relationships.",
  },
];

export default function TeamPage() {
  return (
    <div>
      <PageHero
        eyebrow="Team"
        title={
          <>
            The people building <span className="text-generated">Sutertai</span>
          </>
        }
        description="A focused team of engineers, marketers, designers, and strategists working across AI, software, and digital marketing."
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
                      "linear-gradient(150deg, rgba(5,150,105,0.9), rgba(18,18,18,0.9))",
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
        description="Reach out if you're interested in joining Sutertai or partnering with us."
        primaryHref="/contact"
        primaryLabel="Contact us"
        secondaryHref="/about"
        secondaryLabel="Learn about Sutertai"
      />
    </div>
  );
}
