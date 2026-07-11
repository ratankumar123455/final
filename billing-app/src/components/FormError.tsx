export function FormError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <div
      className="text-sm rounded-lg px-3 py-2 mb-4"
      style={{ background: "rgba(220, 38, 38, 0.1)", color: "var(--danger)" }}
    >
      {message}
    </div>
  );
}
