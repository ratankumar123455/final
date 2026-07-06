import MagneticLink from "./MagneticLink";
import Reveal from "./Reveal";

export default function CtaBanner({
  title = "Ready to transform your business?",
  description = "Talk to our team about AI-powered marketing, a new website, or a custom software build — get a free consultation, no obligation.",
  primaryHref = "/contact",
  primaryLabel = "Get Started",
  secondaryHref = "/contact",
  secondaryLabel = "Book Free Consultation",
}: {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="hairline-t py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="surface relative overflow-hidden rounded-2xl p-10 text-center sm:p-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(600px circle at 50% 0%, rgba(79,70,229,0.25), transparent 60%)",
            }}
            aria-hidden="true"
          />
          <div className="relative flex flex-col items-center gap-6">
            <p className="font-display text-3xl text-paper sm:text-5xl">
              {title}
            </p>
            <p className="max-w-xl text-muted">{description}</p>
            <div className="mt-2 flex flex-col gap-4 sm:flex-row">
              <MagneticLink href={primaryHref} variant="primary">
                {primaryLabel}
              </MagneticLink>
              <MagneticLink href={secondaryHref} variant="secondary">
                {secondaryLabel}
              </MagneticLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
