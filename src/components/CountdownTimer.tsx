import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

const STORAGE_KEY = "speakai_offer_end";
const DURATION_MS = 15 * 60 * 1000;

function getEndTime() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    const t = parseInt(stored, 10);
    if (!isNaN(t) && t > Date.now()) return t;
  }
  const t = Date.now() + DURATION_MS;
  localStorage.setItem(STORAGE_KEY, String(t));
  return t;
}

export const CountdownTimer = () => {
  const [remaining, setRemaining] = useState(DURATION_MS);

  useEffect(() => {
    const end = getEndTime();
    const tick = () => {
      const r = Math.max(0, end - Date.now());
      setRemaining(r);
      if (r === 0) localStorage.removeItem(STORAGE_KEY);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const m = Math.floor(remaining / 60000);
  const s = Math.floor((remaining % 60000) / 1000);
  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-destructive/15 border border-destructive/40 rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-destructive animate-pulse flex-shrink-0" />
        <span className="text-xs sm:text-sm md:text-base font-semibold text-foreground/90 uppercase tracking-wider">
          Oferta acaba em
        </span>
      </div>
      <div className="flex items-center gap-1 font-display text-xl sm:text-2xl md:text-3xl text-primary">
        <span className="bg-background/60 rounded-md px-1.5 sm:px-2 py-0.5 min-w-[2rem] sm:min-w-[2.5rem] text-center">{pad(m)}</span>
        <span className="text-foreground/50">:</span>
        <span className="bg-background/60 rounded-md px-1.5 sm:px-2 py-0.5 min-w-[2rem] sm:min-w-[2.5rem] text-center">{pad(s)}</span>
      </div>
    </div>
  );
};
