import { useEffect, useState } from "react";
import { CheckCircle2, X } from "lucide-react";

type Notif = { id: number; name: string; city: string; time: string };

const NOTIFS: Notif[] = [
  { id: 1, name: "Maria S.", city: "São Paulo, SP", time: "agora mesmo" },
  { id: 2, name: "João P.", city: "Rio de Janeiro, RJ", time: "há 1 minuto" },
];

export const PurchaseNotifications = () => {
  const [active, setActive] = useState<Notif | null>(null);

  useEffect(() => {
    const t1 = setTimeout(() => {
      setActive(NOTIFS[0]);
      setTimeout(() => setActive(null), 7000);
    }, 30000);
    const t2 = setTimeout(() => {
      setActive(NOTIFS[1]);
      setTimeout(() => setActive(null), 7000);
    }, 90000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (!active) return null;

  return (
    <div className="fixed bottom-20 left-4 z-40 max-w-xs animate-slide-in-left">
      <div className="glass rounded-xl shadow-card p-4 flex gap-3 items-start border-success/40">
        <div className="w-10 h-10 rounded-full gradient-cta flex items-center justify-center flex-shrink-0">
          <CheckCircle2 className="w-5 h-5 text-primary-foreground" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-foreground">
            {active.name} acabou de comprar! 🎉
          </p>
          <p className="text-xs text-muted-foreground mt-0.5">{active.city}</p>
          <p className="text-xs text-success mt-1 font-medium">{active.time}</p>
        </div>
        <button
          onClick={() => setActive(null)}
          className="text-muted-foreground hover:text-foreground"
          aria-label="Fechar"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
