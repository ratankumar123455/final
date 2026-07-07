import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const points = [18, 22, 20, 30, 28, 38, 42, 40, 52, 58, 63, 74];
const width = 640;
const height = 200;
const max = Math.max(...points);

function toPath() {
  const stepX = width / (points.length - 1);
  return points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${i * stepX} ${height - (p / max) * height}`)
    .join(" ");
}

function toAreaPath() {
  const stepX = width / (points.length - 1);
  const line = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${i * stepX} ${height - (p / max) * height}`)
    .join(" ");
  return `${line} L ${width} ${height} L 0 ${height} Z`;
}

const supporting = [
  "Automation pipelines that run around the clock, not just business hours",
  "AI agents that qualify leads before a human ever picks up the phone",
  "Dashboards that show ROI in real time, not at the end of the quarter",
];

export default function ScaleChart() {
  return (
    <section className="hairline-b py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Built for scale"
          title="Automation that compounds your output"
          description="Average growth in qualified leads for clients running Sutertai's AI automation and chatbot systems, indexed to month one."
        />
        <Reveal className="surface rounded-2xl p-6 sm:p-10">
          <div className="wide-chart" style={{ overflowX: "auto" }}>
            <svg
              viewBox={`0 0 ${width} ${height}`}
              className="w-full"
              style={{ minWidth: 480 }}
              role="img"
              aria-label="Qualified leads trending upward over twelve months"
            >
              <defs>
                <linearGradient id="scale-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--signal)" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="var(--signal)" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[0.25, 0.5, 0.75].map((f) => (
                <line
                  key={f}
                  x1="0"
                  x2={width}
                  y1={height * f}
                  y2={height * f}
                  stroke="var(--line)"
                  strokeWidth="1"
                />
              ))}
              <path d={toAreaPath()} fill="url(#scale-fill)" />
              <path d={toPath()} fill="none" stroke="var(--signal)" strokeWidth="2" />
              <circle
                cx={width}
                cy={height - (points[points.length - 1] / max) * height}
                r="4.5"
                fill="var(--signal)"
              />
            </svg>
          </div>
          <div className="mt-8 grid gap-4 border-t border-[var(--line)] pt-6 sm:grid-cols-3">
            {supporting.map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-muted">
                <span className="status-dot mt-1.5 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
