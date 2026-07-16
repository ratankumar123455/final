const metrics = [
  { label: "Images / month", value: "12.4M", tone: "linear-gradient(150deg, rgba(143,188,148,0.5), rgba(253,246,233,0.92) 70%)" },
  { label: "Video renders", value: "480K", tone: "linear-gradient(150deg, rgba(168,216,232,0.35), rgba(253,246,233,0.92) 70%)" },
  { label: "GPU uptime", value: "99.9%", tone: "linear-gradient(150deg, rgba(244,169,136,0.4), rgba(253,246,233,0.92) 70%)", active: true },
  { label: "Avg. render time", value: "4.2s", tone: "linear-gradient(150deg, rgba(143,188,148,0.25), rgba(253,246,233,0.92) 70%)" },
];

const points = [22, 30, 26, 40, 46, 58, 54, 66, 72, 80, 88, 96];

export default function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md py-12 lg:mx-0">
      <div
        className="absolute -inset-16 -z-10 blur-3xl"
        style={{
          background:
            "radial-gradient(220px circle at 30% 20%, rgba(143,188,148,0.35), transparent 65%), radial-gradient(260px circle at 80% 70%, rgba(168,216,232,0.18), transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="glass-panel rounded-2xl p-5">
        <div className="flex items-center justify-between">
          <span className="mono-label text-[9px] text-muted-2">metabob / generation queue</span>
          <span className="flex items-center gap-1.5">
            <span className="status-dot" />
            <span className="mono-label text-[9px] text-scope">gpu online</span>
          </span>
        </div>

        <div className="mt-4 h-16 w-full">
          <svg viewBox="0 0 200 60" className="h-full w-full" preserveAspectRatio="none" role="img" aria-label="Generation volume trending upward">
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
                  boxShadow: metric.active ? "0 0 0 2px rgba(143,188,148,0.25)" : "none",
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
            <p className="mono-label text-[9px] text-muted-2">Now rendering</p>
            <p className="mt-1 max-w-[220px] text-[13px] text-paper">
              &quot;product shot, studio light&quot; → 6s video
            </p>
          </div>
          <div className="text-right">
            <p className="mono-label text-[9px] text-muted-2">status</p>
            <p className="font-display mt-1 text-sm text-generated">Rendering</p>
          </div>
        </div>
      </div>

      <div className="glass-panel absolute left-2 bottom-0 float-slow rounded-xl px-4 py-3">
        <p className="mono-label text-[9px] text-muted-2">Powered by</p>
        <p className="mt-1 text-sm text-paper">NVIDIA + AWS</p>
      </div>
      <div className="glass-panel absolute right-2 top-0 float-slow-delayed rounded-xl px-4 py-3">
        <p className="mono-label text-[9px] text-muted-2">Resolution</p>
        <p className="mt-1 text-sm text-paper">Up to 4K</p>
      </div>
    </div>
  );
}
