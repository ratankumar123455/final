export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <div className="animate-pulse space-y-8">
        <div className="h-4 w-32 rounded-full bg-white/10" />
        <div className="h-14 w-3/4 rounded-2xl bg-white/10" />
        <div className="h-14 w-1/2 rounded-2xl bg-white/10" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-48 rounded-2xl bg-white/5" />
          ))}
        </div>
      </div>
    </div>
  );
}
