import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { CountdownTimer } from "@/components/CountdownTimer";
import { LiveViewers } from "@/components/LiveViewers";
import { PurchaseNotifications } from "@/components/PurchaseNotifications";
import { CTAButton } from "@/components/CTAButton";
import { OptimizedImage } from "@/components/OptimizedImage";
import {
  CheckCircle2,
  XCircle,
  Lock,
  ShieldCheck,
  Award,
  Sparkles,
  Brain,
  Mic,
  GraduationCap,
  Timer,
  BookOpen,
  Plane,
  Briefcase,
  UtensilsCrossed,
  Users,
  Star,
  Globe,
  Zap,
  Gift,
} from "lucide-react";

const IMG = {
  hero: "https://i.imgur.com/j8m8zcz.jpg",
  confused: "https://i.imgur.com/BqMM7RF.jpg",
  teaching: "https://i.imgur.com/PRrC41O.jpg",
  celebrating: "https://i.imgur.com/ztVDPzq.jpg",
  bonus: "https://i.imgur.com/wwk5XFr.jpg",
  offer: "https://i.imgur.com/Oa5AeVw.jpg",
  testimonials: "https://i.imgur.com/tZMBlIK.jpg",
};

const CHECKOUT = "https://go.hotmart.com/L103540759E?ap=b733";

const useCountUp = (target: number, duration = 2000, start = false) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    const t0 = performance.now();
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      setVal(Math.floor(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return val;
};

const Index = () => {
  useReveal();
  const [statsVisible, setStatsVisible] = useState(false);
  const students = useCountUp(60000, 2200, statsVisible);
  const countries = useCountUp(12, 1500, statsVisible);

  useEffect(() => {
    const el = document.getElementById("social-proof");
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setStatsVisible(true),
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/30">
        <div className="container flex items-center justify-between py-2.5 sm:py-3 px-3 sm:px-6">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg gradient-cta flex items-center justify-center flex-shrink-0">
              <Mic className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl sm:text-2xl tracking-wider truncate">SpeakAI</span>
          </div>
          <a
            href={CHECKOUT}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 sm:gap-2 gradient-cta text-primary-foreground font-bold px-3 py-2 sm:px-5 sm:py-2.5 rounded-lg text-xs sm:text-sm uppercase tracking-wide hover:scale-105 transition-transform shadow-cta whitespace-nowrap flex-shrink-0"
          >
            <span className="hidden sm:inline">Quero meu acesso </span>R$57
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-36 md:pb-24 gradient-hero animate-gradient overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(188_56%_40%_/_0.25),transparent_60%)]" />
        <div className="container relative grid md:grid-cols-2 gap-8 md:gap-10 items-center px-4 sm:px-6">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-3 py-1 sm:px-4 sm:py-1.5 mb-4 sm:mb-6 animate-fade-in">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
              <span className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold text-primary">Método SpeakAI</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] mb-4 sm:mb-6 break-words">
              Destrave o inglês e <span className="text-gradient-cta">fale naturalmente</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 mb-6 sm:mb-8 max-w-xl mx-auto md:mx-0">
              Aprenda com frases reais, tradução e <strong className="text-primary">pronúncia aportuguesada</strong> — em poucos minutos por dia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-center md:justify-start mb-6 sm:mb-8">
              <CTAButton size="xl" pulse className="w-full sm:w-auto">Quero meu acesso por R$57</CTAButton>
            </div>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start text-xs sm:text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-success" /> Compra Segura</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-success" /> Hotmart</span>
              <span className="flex items-center gap-1.5"><Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-success" /> Garantia 7 Dias</span>
            </div>
          </div>
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <OptimizedImage
              src={IMG.hero}
              alt="Professorzinho SpeakAI"
              width={400}
              height={400}
              priority
              className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md mx-auto drop-shadow-2xl"
            />
          </div>
        </div>

        <div className="container mt-8 sm:mt-12 max-w-2xl px-4 sm:px-6">
          <CountdownTimer />
        </div>
      </section>

      {/* DOR */}
      <section className="py-12 sm:py-16 md:py-24 cv-auto">
        <div className="container px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-10 sm:mb-16">
            <div className="reveal order-2 md:order-1">
              <OptimizedImage
                src={IMG.confused}
                alt="Professorzinho confuso"
                width={400}
                height={400}
                className="w-full max-w-[260px] sm:max-w-sm mx-auto"
              />
            </div>
            <div className="reveal order-1 md:order-2">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4">
                O verdadeiro motivo de você ainda <span className="text-destructive">travar</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Você não travou por falta de dom — travou porque te ensinaram errado.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 max-w-5xl mx-auto">
            {[
              { t: "Anos decorando gramática inútil", d: "Regras complexas que você nunca usa na vida real" },
              { t: "Aulas longas e cansativas", d: "Métodos tradicionais que consomem horas do seu dia" },
              { t: "Você entende, mas trava pra falar", d: "Sabe a teoria, mas na hora H as palavras não saem" },
              { t: "Pronúncia impossível", d: "Fonética que parece outro idioma e te deixa inseguro" },
            ].map((p, i) => (
              <div key={i} className="reveal gradient-card border border-border/50 rounded-2xl p-4 sm:p-6 flex gap-3 sm:gap-4 hover:border-destructive/40 transition-colors">
                <XCircle className="w-6 h-6 sm:w-7 sm:h-7 text-destructive flex-shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <h3 className="font-display text-xl sm:text-2xl tracking-wide mb-1">{p.t}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-12 sm:py-16 md:py-24 bg-card/40 relative cv-auto">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(188_56%_40%_/_0.15),transparent_70%)]" />
        <div className="container relative px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16 reveal">
            <span className="text-primary font-semibold uppercase tracking-widest text-xs sm:text-sm">Por que SpeakAI é diferente</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-3 max-w-3xl mx-auto">
              O método que ensina seu cérebro a <span className="text-gradient-cta">falar inglês de verdade</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="reveal">
              <OptimizedImage
                src={IMG.teaching}
                alt="Professorzinho ensinando"
                width={500}
                height={500}
                className="w-full max-w-[280px] sm:max-w-md mx-auto animate-float"
              />
            </div>
            <div className="space-y-4 sm:space-y-5">
              {[
                { n: "1", icon: BookOpen, t: "Frases Reais e Úteis", d: 'Nada de "the book is on the table". Aprenda o que realmente se fala no dia a dia.' },
                { n: "2", icon: Mic, t: "Pronúncia Aportuguesada", d: "Fale como o ouvido entende. Sem complicações fonéticas impossíveis." },
                { n: "3", icon: GraduationCap, t: "Professorzinho Guiando", d: "Aprendizado leve, divertido e sem estresse. Você aprende brincando." },
                { n: "4", icon: Timer, t: "Aulas Curtas (5-15 min)", d: "Rotina simples que cabe em qualquer agenda. Progressão diária garantida." },
              ].map((f, i) => (
                <div key={i} className="reveal gradient-card border border-border/50 rounded-2xl p-4 sm:p-5 flex gap-3 sm:gap-4 hover:border-primary/40 hover:scale-[1.02] transition-all">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl gradient-cta flex items-center justify-center font-display text-xl sm:text-2xl text-primary-foreground">
                    {f.n}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <f.icon className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0" />
                      <h3 className="font-display text-xl sm:text-2xl tracking-wide">{f.t}</h3>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground">{f.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section id="social-proof" className="py-12 sm:py-16 md:py-24 cv-auto">
        <div className="container px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12 reveal">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto mb-8 sm:mb-10">
              <div className="gradient-card border border-border/50 rounded-2xl p-4 sm:p-6">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2" />
                <div className="font-display text-2xl sm:text-4xl md:text-5xl text-gradient-cta break-all">+{students.toLocaleString("pt-BR")}</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Alunos transformados</div>
              </div>
              <div className="gradient-card border border-border/50 rounded-2xl p-4 sm:p-6">
                <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2" />
                <div className="font-display text-2xl sm:text-4xl md:text-5xl text-gradient-cta">+{countries}</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Países atendidos</div>
              </div>
              <div className="col-span-2 md:col-span-1 gradient-card border border-border/50 rounded-2xl p-4 sm:p-6">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2 fill-primary" />
                <div className="font-display text-2xl sm:text-4xl md:text-5xl text-gradient-cta">4.9/5</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Avaliação dos alunos</div>
              </div>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-3xl mx-auto">
              Mais de <span className="text-gradient-cta">60.000 alunos</span> já destravaram o inglês
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              Alunos em mais de 12 países já estão aprendendo inglês de forma leve, prática e divertida.
            </p>
          </div>

          <div className="reveal max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-card">
              <OptimizedImage
                src={IMG.testimonials}
                alt="Depoimentos de alunos"
                width={1200}
                height={800}
                className="w-full"
              />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-1 mt-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-primary text-primary" />
              ))}
              <span className="ml-2 text-sm sm:text-base text-muted-foreground font-semibold text-center">Avaliações reais de alunos SpeakAI</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSFORMAÇÃO */}
      <section className="py-12 sm:py-16 md:py-24 bg-card/40 cv-auto">
        <div className="container px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="reveal">
              <span className="text-primary font-semibold uppercase tracking-widest text-xs sm:text-sm">Sua transformação</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-3 mb-4 sm:mb-6">
                Você vai sentir a diferença em <span className="text-gradient-cta">poucos dias</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
                Transforme sua relação com o inglês e alcance seus objetivos.
              </p>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  "Fala frases completas com naturalidade",
                  "Perde o medo de errar ao conversar",
                  "Entende expressões de filmes e viagens",
                  "Ganha confiança e autoestima ao se comunicar",
                ].map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-base sm:text-lg">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-success flex-shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal">
              <img src={IMG.celebrating} alt="Professorzinho comemorando" className="w-full max-w-[280px] sm:max-w-md mx-auto animate-float" />
            </div>
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ RECEBE */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12 reveal">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              O que você recebe por <span className="text-gradient-cta">apenas R$57</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mt-4">
              Tudo o que você precisa para falar inglês com confiança
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center max-w-6xl mx-auto">
            <div className="reveal">
              <img src={IMG.bonus} alt="Conteúdo SpeakAI" className="w-full max-w-[280px] sm:max-w-md mx-auto" />
            </div>
            <div className="space-y-4 reveal">
              {[
                { t: "Método SpeakAI completo", d: "Acesso vitalício a todo conteúdo", icon: Brain },
                { t: "Módulos práticos por situações reais", d: "Aeroporto, reuniões, viagens e mais", icon: Plane },
                { t: "Aulas curtas e visuais", d: "5-15 minutos por dia", icon: Timer },
              ].map((item, i) => (
                <div key={i} className="gradient-card border border-border/50 rounded-xl p-4 sm:p-5 flex gap-3 sm:gap-4">
                  <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-secondary flex-shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <h3 className="font-display text-xl sm:text-2xl tracking-wide">{item.t}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{item.d}</p>
                  </div>
                </div>
              ))}

              <div className="border-t border-border/50 pt-6 mt-6">
                <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-3 py-1.5 sm:px-4 rounded-full text-xs sm:text-sm uppercase tracking-wider mb-4">
                  <Gift className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Bônus exclusivos
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-3 gradient-card border border-primary/30 rounded-xl p-3 sm:p-4">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                      <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                      <div className="min-w-0">
                        <h4 className="font-semibold text-sm sm:text-base">E-book 500 Frases Essenciais + áudio</h4>
                        <p className="text-[11px] sm:text-xs text-muted-foreground">Bônus 1</p>
                      </div>
                    </div>
                    <span className="font-display text-base sm:text-xl text-muted-foreground line-through flex-shrink-0">R$ 97</span>
                  </div>
                  <div className="flex items-center justify-between gap-3 gradient-card border border-primary/30 rounded-xl p-3 sm:p-4">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                      <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                      <div className="min-w-0">
                        <h4 className="font-semibold text-sm sm:text-base">Aulas gravadas com professora humana</h4>
                        <p className="text-[11px] sm:text-xs text-muted-foreground">Bônus 2</p>
                      </div>
                    </div>
                    <span className="font-display text-base sm:text-xl text-muted-foreground line-through flex-shrink-0">R$ 197</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <CTAButton size="lg" className="w-full">Quero tudo isso por R$57</CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARATIVO */}
      <section className="py-12 sm:py-16 md:py-24 bg-card/40">
        <div className="container max-w-5xl px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12 reveal">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Por que SpeakAI é o <span className="text-gradient-cta">caminho mais rápido</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mt-4">Compare e veja a diferença</p>
          </div>

          {/* MOBILE: cards empilhados */}
          <div className="reveal sm:hidden space-y-4">
            {[
              ["Foco", "Gramática teórica", "Frases reais e práticas"],
              ["Tempo para resultados", "3+ anos", "30 dias para primeiras conversas"],
              ["Duração das aulas", "1-2 horas", "5-15 minutos"],
              ["Investimento", "R$ 2.000+", "R$ 57 (pagamento único)"],
              ["Metodologia", "Decorar regras", "Repetição contextual"],
              ["Pronúncia", "Fonética complexa", "Aportuguesada e natural"],
            ].map(([cat, trad, ai], i) => (
              <div key={i} className="gradient-card border border-border/50 rounded-xl p-4">
                <h4 className="font-display text-lg tracking-wide mb-3 text-center">{cat}</h4>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-muted/30 rounded-lg p-3">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5">Tradicional</div>
                    <div className="flex items-start gap-1.5 text-muted-foreground">
                      <XCircle className="w-3.5 h-3.5 text-destructive/70 flex-shrink-0 mt-0.5" />
                      <span>{trad}</span>
                    </div>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-3">
                    <div className="text-[10px] uppercase tracking-wider text-primary mb-1.5">SpeakAI ⚡</div>
                    <div className="flex items-start gap-1.5 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-success flex-shrink-0 mt-0.5" />
                      <span>{ai}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* DESKTOP: tabela */}
          <div className="reveal hidden sm:block overflow-x-auto rounded-2xl border border-border/50 shadow-card">
            <table className="w-full text-sm md:text-base">
              <thead>
                <tr className="bg-card">
                  <th className="text-left p-4 md:p-5 font-display text-lg tracking-wide"></th>
                  <th className="text-center p-4 md:p-5 font-display text-lg md:text-xl tracking-wide text-muted-foreground">
                    Métodos Tradicionais
                  </th>
                  <th className="text-center p-4 md:p-5 font-display text-xl md:text-2xl tracking-wide text-primary bg-primary/10">
                    SpeakAI ⚡
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {[
                  ["Foco", "Gramática teórica", "Frases reais e práticas"],
                  ["Tempo para resultados", "3+ anos", "30 dias para primeiras conversas"],
                  ["Duração das aulas", "1-2 horas", "5-15 minutos"],
                  ["Investimento", "R$ 2.000+", "R$ 57 (pagamento único)"],
                  ["Metodologia", "Decorar regras", "Repetição contextual"],
                  ["Pronúncia", "Fonética complexa", "Aportuguesada e natural"],
                ].map(([cat, trad, ai], i) => (
                  <tr key={i} className="hover:bg-card/40 transition-colors">
                    <td className="p-4 md:p-5 font-semibold">{cat}</td>
                    <td className="p-4 md:p-5 text-center text-muted-foreground">
                      <XCircle className="w-4 h-4 inline mr-1.5 text-destructive/70" />
                      {trad}
                    </td>
                    <td className="p-4 md:p-5 text-center bg-primary/5 font-medium">
                      <CheckCircle2 className="w-4 h-4 inline mr-1.5 text-success" />
                      {ai}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* EXEMPLOS PRÁTICOS */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12 reveal">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-3xl mx-auto">
              Veja o tipo de inglês que você <span className="text-gradient-cta">realmente vai falar</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mt-4">Frases práticas para situações do dia a dia</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 max-w-5xl mx-auto">
            {[
              { icon: Plane, ctx: "Aeroporto", en: "Excuse me, where is gate B12?", pt: "Com licença, onde fica o portão B12?", pa: "Êskiúz mi, wér is guêit bi tuélv?" },
              { icon: Briefcase, ctx: "Reunião", en: "I'd like to share a quick update.", pt: "Eu gostaria de compartilhar uma atualização rápida.", pa: "Áid laik tu shér a kuík âpdêit." },
              { icon: UtensilsCrossed, ctx: "Restaurante", en: "I'll have the salmon, please.", pt: "Vou querer o salmão, por favor.", pa: "Áil révi dâ sãlmon, plíz." },
              { icon: Users, ctx: "Networking", en: "Nice to meet you!", pt: "Prazer em conhecê-lo!", pa: "Náis tu mít iú!" },
            ].map((ex, i) => (
              <div key={i} className="reveal gradient-card border border-border/50 rounded-2xl p-4 sm:p-6 hover:border-primary/40 hover:scale-[1.01] transition-all">
                <div className="flex items-center gap-2 mb-4 sm:mb-5">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <ex.icon className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl tracking-wide">{ex.ctx}</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground mb-1">🇺🇸 Inglês</div>
                    <p className="text-base sm:text-lg font-semibold break-words">{ex.en}</p>
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground mb-1">🇧🇷 Português</div>
                    <p className="text-sm sm:text-base text-foreground/85 break-words">{ex.pt}</p>
                  </div>
                  <div className="pt-2 border-t border-border/50">
                    <div className="text-[10px] sm:text-xs uppercase tracking-wider text-primary mb-1">🗣️ Pronúncia Aportuguesada</div>
                    <p className="font-display text-lg sm:text-xl text-primary tracking-wide break-words">{ex.pa}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFERTA FINAL */}
      <section className="py-12 sm:py-16 md:py-24 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(45_96%_56%_/_0.15),transparent_70%)]" />
        <div className="container relative max-w-4xl px-4 sm:px-6">
          <div className="text-center reveal">
            <div className="inline-flex items-center gap-2 bg-destructive text-destructive-foreground font-bold px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm uppercase tracking-widest mb-4 sm:mb-6 animate-pulse">
              <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Oferta especial
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-4">
              De <span className="line-through text-muted-foreground">R$ 497</span> por apenas
            </h2>
            <div className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-gradient-cta mb-2 leading-none">
              R$ 57
            </div>
            <p className="text-base sm:text-lg md:text-xl text-foreground/85 mb-6 sm:mb-8">
              Pagamento único. Acesso vitalício. <strong className="text-primary">Zero mensalidades.</strong>
            </p>

            <div className="max-w-md mx-auto mb-6 sm:mb-8">
              <CountdownTimer />
            </div>

            <CTAButton size="xl" pulse className="w-full sm:w-auto">
              Garantir meu acesso agora
            </CTAButton>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mt-6 sm:mt-8 text-xs sm:text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-success" /> Compra Segura</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-success" /> Hotmart</span>
              <span className="flex items-center gap-1.5"><Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-success" /> Garantia 7 Dias</span>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 reveal">
            <div className="gradient-card border-2 border-success/30 rounded-2xl p-6 sm:p-8 md:p-10 max-w-2xl mx-auto text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-success/15 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8 sm:w-9 sm:h-9 text-success" />
              </div>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl mb-3">Garantia de 7 Dias</h3>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                Teste o método por 7 dias. Se não gostar, devolvemos <strong className="text-success">100% do valor</strong>.
                Sem perguntas, sem burocracia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/30 py-10 sm:py-12 pb-24 sm:pb-12 bg-card/40">
        <div className="container px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg gradient-cta flex items-center justify-center">
                <Mic className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl sm:text-2xl tracking-wider">SpeakAI Method</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-success" /> SSL Seguro</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-success" /> Hotmart</span>
              <span className="flex items-center gap-1.5"><Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-success" /> Garantia 7 Dias</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-x-3 sm:gap-x-4 gap-y-2 text-xs sm:text-sm text-muted-foreground mb-6">
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">Suporte</a>
          </div>

          <p className="text-center text-[11px] sm:text-xs text-muted-foreground/80 mb-4">
            © 2025 SpeakAI Method. Todos os direitos reservados.
          </p>
          <p className="text-center text-[11px] sm:text-xs text-muted-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Resultados variam conforme o ritmo de estudo. O SpeakAI ensina inglês de forma prática e contextual,
            com base em frases reais e repetição guiada. Este produto não garante resultados específicos, mas oferece
            um método comprovado usado por mais de 60.000 alunos.
          </p>
        </div>
      </footer>

      {/* MOBILE STICKY CTA */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-background/95 backdrop-blur-md border-t border-border/50">
        <a
          href={CHECKOUT}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center gradient-cta text-primary-foreground font-bold py-3.5 rounded-xl uppercase tracking-wide shadow-cta pulse-cta text-sm"
        >
          Quero meu acesso por R$57
        </a>
      </div>

      <LiveViewers />
      <PurchaseNotifications />
    </div>
  );
};

export default Index;
