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
    <div className="fixed bottom-4 right-4 z-40 glass rounded-full px-4 py-2 flex items-center gap-2 shadow-card animate-fade-in">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success"></span>
      </span>
      <Eye className="w-4 h-4 text-foreground/80" />
      <span className="text-sm font-semibold">
        <span className="text-primary">{count}</span> pessoas vendo agora
      </span>
    </div>
  );
};
