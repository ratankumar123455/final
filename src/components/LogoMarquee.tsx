const logos = [
  "NOVARA RETAIL",
  "ARCFORM REALTY",
  "PIXELWORKS HEALTH",
  "HALCYON FINANCE",
  "BLUEPRINT HOUSE",
  "ORBITAL LOGISTICS",
  "FIELDNOTE HOSPITALITY",
  "MERIDIAN GOODS",
];

export default function LogoMarquee() {
  const track = [...logos, ...logos];
  return (
    <section className="hairline-b py-14">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mono-label text-center text-[11px] text-muted">
          Trusted by growing businesses across industries
        </p>
        <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="marquee-track gap-16">
            {track.map((logo, i) => (
              <span
                key={`${logo}-${i}`}
                className="font-display shrink-0 text-lg tracking-wide text-muted-2 opacity-70 sm:text-xl"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
