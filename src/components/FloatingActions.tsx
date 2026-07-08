"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { getLenis } from "@/lib/lenis";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShowTop(window.scrollY > 600);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {showTop && (
        <button
          type="button"
          aria-label="Back to top"
          onClick={() => {
            const lenis = getLenis();
            if (lenis) lenis.scrollTo(0);
            else window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="glass-panel flex h-11 w-11 items-center justify-center rounded-full text-paper transition-transform hover:-translate-y-0.5"
        >
          <ArrowUp className="h-5 w-5" strokeWidth={1.5} />
        </button>
      )}
      <a
        href="https://wa.me/917459887412"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-pure shadow-[0_8px_30px_-8px_rgba(37,211,102,0.6)] transition-transform hover:-translate-y-0.5"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.92C21.95 6.45 17.5 2 12.04 2Zm0 18.14h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.37c0-4.54 3.7-8.24 8.26-8.24 2.2 0 4.28.86 5.84 2.42a8.19 8.19 0 0 1 2.42 5.83c0 4.54-3.7 8.22-8.27 8.22Zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.24-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.45-1.37-1.7-.14-.24-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.44.06-.67.31-.23.24-.87.86-.87 2.09 0 1.23.9 2.42 1.02 2.59.12.17 1.77 2.71 4.29 3.8.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.19.21-.58.21-1.08.15-1.19-.06-.11-.23-.17-.48-.29Z" />
        </svg>
      </a>
    </div>
  );
}
