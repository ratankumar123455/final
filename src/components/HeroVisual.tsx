const metrics = [
  { label: "Organic traffic", value: "+186%", tone: "linear-gradient(150deg, rgba(5,150,105,0.5), rgba(18,18,18,0.92) 70%)" },
  { label: "Qualified leads", value: "+240%", tone: "linear-gradient(150deg, rgba(34,197,94,0.35), rgba(18,18,18,0.92) 70%)" },
  { label: "Conversion rate", value: "4.8x", tone: "linear-gradient(150deg, rgba(20,241,149,0.4), rgba(18,18,18,0.92) 70%)", active: true },
  { label: "Time to launch", value: "-62%", tone: "linear-gradient(150deg, rgba(5,150,105,0.25), rgba(18,18,18,0.92) 70%)" },
];

const points = [22, 30, 26, 40, 46, 58, 54, 66, 72, 80, 88, 96];

export default function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md py-12 lg:mx-0">
      <div
        className="absolute -inset-16 -z-10 blur-3xl"
        style={{
          background:
            "radial-gradient(220px circle at 30% 20%, rgba(5,150,105,0.35), transparent 65%), radial-gradient(260px circle at 80% 70%, rgba(34,197,94,0.18), transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="glass-panel rounded-2xl p-5">
        <div className="flex items-center justify-between">
          <span className="mono-label text-[9px] text-muted-2">sutertai / growth dashboard</span>
          <span className="flex items-center gap-1.5">
            <span className="status-dot" />
            <span className="mono-label text-[9px] text-scope">live</span>
          </span>
        </div>

        <div className="mt-4 h-16 w-full">
          <svg viewBox="0 0 200 60" className="h-full w-full" preserveAspectRatio="none" role="img" aria-label="Growth trending upward">
            <polyline
              points={points.map((p, i) => `${(i * 200) / (points.length - 1)},${60 - (p / 100) * 60}`).join(" ")}
              fill="none"
              stroke="var(--green)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="mt-2 grid grid-cols-2 gap-2">
          {metrics.map((metric) => (
            <div key={metric.label} className="relative">
              <div
                className="h-16 rounded-md border p-2.5"
                style={{
                  backgroundImage: metric.tone,
                  borderColor: metric.active ? "var(--signal)" : "var(--line)",
                  boxShadow: metric.active ? "0 0 0 2px rgba(5,150,105,0.25)" : "none",
                }}
              >
                <p className="font-display text-sm text-paper">{metric.value}</p>
              </div>
              <p className="mono-label mt-1.5 text-[8.5px] text-muted-2">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-[var(--line)] pt-4">
          <div>
            <p className="mono-label text-[9px] text-muted-2">Active project</p>
            <p className="mt-1 max-w-[220px] text-[13px] text-paper">
              Q3 growth campaign — SEO + performance ads
            </p>
          </div>
          <div className="text-right">
            <p className="mono-label text-[9px] text-muted-2">status</p>
            <p className="font-display mt-1 text-sm text-generated">On track</p>
          </div>
        </div>
      </div>

      <div className="glass-panel absolute left-2 bottom-0 float-slow rounded-xl px-4 py-3">
        <p className="mono-label text-[9px] text-muted-2">Response time</p>
        <p className="mt-1 text-sm text-paper">Under 24h</p>
      </div>
      <div className="glass-panel absolute right-2 top-0 float-slow-delayed rounded-xl px-4 py-3">
        <p className="mono-label text-[9px] text-muted-2">Uptime</p>
        <p className="mt-1 text-sm text-paper">99.9%</p>
      </div>
    </div>
  );
}
