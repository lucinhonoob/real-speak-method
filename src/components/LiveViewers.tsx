import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export const LiveViewers = () => {
  const [count, setCount] = useState(() => Math.floor(Math.random() * 43) + 47);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => {
        const delta = Math.floor(Math.random() * 7) - 3;
        const next = c + delta;
        return Math.min(89, Math.max(47, next));
      });
    }, 8000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="fixed bottom-20 sm:bottom-4 right-3 sm:right-4 z-40 glass rounded-full px-3 py-1.5 sm:px-4 sm:py-2 flex items-center gap-1.5 sm:gap-2 shadow-card animate-fade-in max-w-[calc(100vw-1.5rem)]">
      <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-success"></span>
      </span>
      <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-foreground/80 flex-shrink-0" />
      <span className="text-xs sm:text-sm font-semibold whitespace-nowrap">
        <span className="text-primary">{count}</span> <span className="hidden xs:inline">pessoas </span>vendo agora
      </span>
    </div>
  );
};
