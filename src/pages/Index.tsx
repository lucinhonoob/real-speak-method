import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { CountdownTimer } from "@/components/CountdownTimer";
import { LiveViewers } from "@/components/LiveViewers";
import { PurchaseNotifications } from "@/components/PurchaseNotifications";
import { CTAButton } from "@/components/CTAButton";
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
        <div className="container flex items-center justify-between py-3">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg gradient-cta flex items-center justify-center">
              <Mic className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-2xl tracking-wider">SpeakAI</span>
          </div>
          <a
            href={CHECKOUT}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 gradient-cta text-primary-foreground font-bold px-5 py-2.5 rounded-lg text-sm uppercase tracking-wide hover:scale-105 transition-transform shadow-cta"
          >
            Quero meu acesso R$57
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 gradient-hero animate-gradient overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(188_56%_40%_/_0.25),transparent_60%)]" />
        <div className="container relative grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs uppercase tracking-widest font-semibold text-primary">Método SpeakAI</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-6">
              Destrave o inglês e <span className="text-gradient-cta">fale naturalmente</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-xl mx-auto md:mx-0">
              Aprenda com frases reais, tradução e <strong className="text-primary">pronúncia aportuguesada</strong> — em poucos minutos por dia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start mb-8">
              <CTAButton size="xl" pulse>Quero meu acesso por R$57</CTAButton>
            </div>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-success" /> Compra 100% Segura</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-success" /> Hotmart</span>
              <span className="flex items-center gap-1.5"><Award className="w-4 h-4 text-success" /> Garantia 7 Dias</span>
            </div>
          </div>
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <img src={IMG.hero} alt="Professorzinho SpeakAI" className="relative w-full max-w-md mx-auto drop-shadow-2xl" />
          </div>
        </div>

        <div className="container mt-12 max-w-2xl">
          <CountdownTimer />
        </div>
      </section>

      {/* DOR */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="reveal order-2 md:order-1">
              <img src={IMG.confused} alt="Professorzinho confuso" className="w-full max-w-sm mx-auto" />
            </div>
            <div className="reveal order-1 md:order-2">
              <h2 className="font-display text-4xl md:text-6xl mb-4">
                O verdadeiro motivo de você ainda <span className="text-destructive">travar</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Você não travou por falta de dom — travou porque te ensinaram errado.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {[
              { t: "Anos decorando gramática inútil", d: "Regras complexas que você nunca usa na vida real" },
              { t: "Aulas longas e cansativas", d: "Métodos tradicionais que consomem horas do seu dia" },
              { t: "Você entende, mas trava pra falar", d: "Sabe a teoria, mas na hora H as palavras não saem" },
              { t: "Pronúncia impossível", d: "Fonética que parece outro idioma e te deixa inseguro" },
            ].map((p, i) => (
              <div key={i} className="reveal gradient-card border border-border/50 rounded-2xl p-6 flex gap-4 hover:border-destructive/40 transition-colors">
                <XCircle className="w-7 h-7 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display text-2xl tracking-wide mb-1">{p.t}</h3>
                  <p className="text-muted-foreground">{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-20 md:py-28 bg-card/40 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(188_56%_40%_/_0.15),transparent_70%)]" />
        <div className="container relative">
          <div className="text-center mb-16 reveal">
            <span className="text-primary font-semibold uppercase tracking-widest text-sm">Por que SpeakAI é diferente</span>
            <h2 className="font-display text-4xl md:text-6xl mt-3 max-w-3xl mx-auto">
              O método que ensina seu cérebro a <span className="text-gradient-cta">falar inglês de verdade</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <img src={IMG.teaching} alt="Professorzinho ensinando" className="w-full max-w-md mx-auto animate-float" />
            </div>
            <div className="space-y-5">
              {[
                { n: "1", icon: BookOpen, t: "Frases Reais e Úteis", d: 'Nada de "the book is on the table". Aprenda o que realmente se fala no dia a dia.' },
                { n: "2", icon: Mic, t: "Pronúncia Aportuguesada", d: "Fale como o ouvido entende. Sem complicações fonéticas impossíveis." },
                { n: "3", icon: GraduationCap, t: "Professorzinho Guiando", d: "Aprendizado leve, divertido e sem estresse. Você aprende brincando." },
                { n: "4", icon: Timer, t: "Aulas Curtas (5-15 min)", d: "Rotina simples que cabe em qualquer agenda. Progressão diária garantida." },
              ].map((f, i) => (
                <div key={i} className="reveal gradient-card border border-border/50 rounded-2xl p-5 flex gap-4 hover:border-primary/40 hover:scale-[1.02] transition-all">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl gradient-cta flex items-center justify-center font-display text-2xl text-primary-foreground">
                    {f.n}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <f.icon className="w-5 h-5 text-secondary" />
                      <h3 className="font-display text-2xl tracking-wide">{f.t}</h3>
                    </div>
                    <p className="text-muted-foreground">{f.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section id="social-proof" className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-12 reveal">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
              <div className="gradient-card border border-border/50 rounded-2xl p-6">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="font-display text-4xl md:text-5xl text-gradient-cta">+{students.toLocaleString("pt-BR")}</div>
                <div className="text-sm text-muted-foreground mt-1">Alunos transformados</div>
              </div>
              <div className="gradient-card border border-border/50 rounded-2xl p-6">
                <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="font-display text-4xl md:text-5xl text-gradient-cta">+{countries}</div>
                <div className="text-sm text-muted-foreground mt-1">Países atendidos</div>
              </div>
              <div className="col-span-2 md:col-span-1 gradient-card border border-border/50 rounded-2xl p-6">
                <Star className="w-8 h-8 text-primary mx-auto mb-2 fill-primary" />
                <div className="font-display text-4xl md:text-5xl text-gradient-cta">4.9/5</div>
                <div className="text-sm text-muted-foreground mt-1">Avaliação dos alunos</div>
              </div>
            </div>
            <h2 className="font-display text-4xl md:text-6xl max-w-3xl mx-auto">
              Mais de <span className="text-gradient-cta">60.000 alunos</span> já destravaram o inglês
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              Alunos em mais de 12 países já estão aprendendo inglês de forma leve, prática e divertida.
            </p>
          </div>

          <div className="reveal max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-card">
              <img src={IMG.testimonials} alt="Depoimentos de alunos" className="w-full" />
            </div>
            <div className="flex items-center justify-center gap-1 mt-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
              <span className="ml-2 text-muted-foreground font-semibold">Avaliações reais de alunos SpeakAI</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSFORMAÇÃO */}
      <section className="py-20 md:py-28 bg-card/40">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <span className="text-primary font-semibold uppercase tracking-widest text-sm">Sua transformação</span>
              <h2 className="font-display text-4xl md:text-6xl mt-3 mb-6">
                Você vai sentir a diferença em <span className="text-gradient-cta">poucos dias</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Transforme sua relação com o inglês e alcance seus objetivos.
              </p>
              <ul className="space-y-4">
                {[
                  "Fala frases completas com naturalidade",
                  "Perde o medo de errar ao conversar",
                  "Entende expressões de filmes e viagens",
                  "Ganha confiança e autoestima ao se comunicar",
                ].map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-lg">
                    <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal">
              <img src={IMG.celebrating} alt="Professorzinho comemorando" className="w-full max-w-md mx-auto animate-float" />
            </div>
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ RECEBE */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-12 reveal">
            <h2 className="font-display text-4xl md:text-6xl">
              O que você recebe por <span className="text-gradient-cta">apenas R$57</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-4">
              Tudo o que você precisa para falar inglês com confiança
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
            <div className="reveal">
              <img src={IMG.bonus} alt="Conteúdo SpeakAI" className="w-full max-w-md mx-auto" />
            </div>
            <div className="space-y-4 reveal">
              {[
                { t: "Método SpeakAI completo", d: "Acesso vitalício a todo conteúdo", icon: Brain },
                { t: "Módulos práticos por situações reais", d: "Aeroporto, reuniões, viagens e mais", icon: Plane },
                { t: "Aulas curtas e visuais", d: "5-15 minutos por dia", icon: Timer },
              ].map((item, i) => (
                <div key={i} className="gradient-card border border-border/50 rounded-xl p-5 flex gap-4">
                  <item.icon className="w-7 h-7 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display text-2xl tracking-wide">{item.t}</h3>
                    <p className="text-muted-foreground">{item.d}</p>
                  </div>
                </div>
              ))}

              <div className="border-t border-border/50 pt-6 mt-6">
                <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-4 py-1.5 rounded-full text-sm uppercase tracking-wider mb-4">
                  <Gift className="w-4 h-4" /> Bônus exclusivos
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between gradient-card border border-primary/30 rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-6 h-6 text-primary" />
                      <div>
                        <h4 className="font-semibold">E-book 500 Frases Essenciais + áudio</h4>
                        <p className="text-xs text-muted-foreground">Bônus 1</p>
                      </div>
                    </div>
                    <span className="font-display text-xl text-muted-foreground line-through">R$ 97</span>
                  </div>
                  <div className="flex items-center justify-between gradient-card border border-primary/30 rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <GraduationCap className="w-6 h-6 text-primary" />
                      <div>
                        <h4 className="font-semibold">Aulas gravadas com professora humana</h4>
                        <p className="text-xs text-muted-foreground">Bônus 2</p>
                      </div>
                    </div>
                    <span className="font-display text-xl text-muted-foreground line-through">R$ 197</span>
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
      <section className="py-20 md:py-28 bg-card/40">
        <div className="container max-w-5xl">
          <div className="text-center mb-12 reveal">
            <h2 className="font-display text-4xl md:text-6xl">
              Por que SpeakAI é o <span className="text-gradient-cta">caminho mais rápido</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-4">Compare e veja a diferença</p>
          </div>

          <div className="reveal overflow-x-auto rounded-2xl border border-border/50 shadow-card">
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
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-12 reveal">
            <h2 className="font-display text-4xl md:text-6xl max-w-3xl mx-auto">
              Veja o tipo de inglês que você <span className="text-gradient-cta">realmente vai falar</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-4">Frases práticas para situações do dia a dia</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {[
              { icon: Plane, ctx: "Aeroporto", en: "Excuse me, where is gate B12?", pt: "Com licença, onde fica o portão B12?", pa: "Êskiúz mi, wér is guêit bi tuélv?" },
              { icon: Briefcase, ctx: "Reunião", en: "I'd like to share a quick update.", pt: "Eu gostaria de compartilhar uma atualização rápida.", pa: "Áid laik tu shér a kuík âpdêit." },
              { icon: UtensilsCrossed, ctx: "Restaurante", en: "I'll have the salmon, please.", pt: "Vou querer o salmão, por favor.", pa: "Áil révi dâ sãlmon, plíz." },
              { icon: Users, ctx: "Networking", en: "Nice to meet you!", pt: "Prazer em conhecê-lo!", pa: "Náis tu mít iú!" },
            ].map((ex, i) => (
              <div key={i} className="reveal gradient-card border border-border/50 rounded-2xl p-6 hover:border-primary/40 hover:scale-[1.01] transition-all">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <ex.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="font-display text-2xl tracking-wide">{ex.ctx}</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">🇺🇸 Inglês</div>
                    <p className="text-lg font-semibold">{ex.en}</p>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">🇧🇷 Português</div>
                    <p className="text-foreground/85">{ex.pt}</p>
                  </div>
                  <div className="pt-2 border-t border-border/50">
                    <div className="text-xs uppercase tracking-wider text-primary mb-1">🗣️ Pronúncia Aportuguesada</div>
                    <p className="font-display text-xl text-primary tracking-wide">{ex.pa}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFERTA FINAL */}
      <section className="py-20 md:py-28 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(45_96%_56%_/_0.15),transparent_70%)]" />
        <div className="container relative max-w-4xl">
          <div className="text-center reveal">
            <div className="inline-flex items-center gap-2 bg-destructive text-destructive-foreground font-bold px-4 py-1.5 rounded-full text-sm uppercase tracking-widest mb-6 animate-pulse">
              <Zap className="w-4 h-4" /> Oferta especial
            </div>
            <h2 className="font-display text-5xl md:text-7xl mb-4">
              De <span className="line-through text-muted-foreground">R$ 497</span> por apenas
            </h2>
            <div className="font-display text-7xl md:text-9xl text-gradient-cta mb-2 leading-none">
              R$ 57
            </div>
            <p className="text-lg md:text-xl text-foreground/85 mb-8">
              Pagamento único. Acesso vitalício. <strong className="text-primary">Zero mensalidades.</strong>
            </p>

            <div className="max-w-md mx-auto mb-8">
              <CountdownTimer />
            </div>

            <CTAButton size="xl" pulse className="w-full sm:w-auto">
              Garantir meu acesso agora
            </CTAButton>

            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-success" /> Compra 100% Segura</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-success" /> Hotmart</span>
              <span className="flex items-center gap-1.5"><Award className="w-4 h-4 text-success" /> Garantia 7 Dias</span>
            </div>
          </div>

          <div className="mt-16 reveal">
            <div className="gradient-card border-2 border-success/30 rounded-2xl p-8 md:p-10 max-w-2xl mx-auto text-center">
              <div className="w-16 h-16 rounded-full bg-success/15 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-9 h-9 text-success" />
              </div>
              <h3 className="font-display text-3xl md:text-4xl mb-3">Garantia de 7 Dias</h3>
              <p className="text-muted-foreground text-lg">
                Teste o método por 7 dias. Se não gostar, devolvemos <strong className="text-success">100% do valor</strong>.
                Sem perguntas, sem burocracia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/30 py-12 bg-card/40">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg gradient-cta flex items-center justify-center">
                <Mic className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-2xl tracking-wider">SpeakAI Method</span>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-success" /> SSL Seguro</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-success" /> Hotmart</span>
              <span className="flex items-center gap-1.5"><Award className="w-4 h-4 text-success" /> Garantia 7 Dias</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-muted-foreground mb-6">
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">Suporte</a>
          </div>

          <p className="text-center text-xs text-muted-foreground/80 mb-4">
            © 2025 SpeakAI Method. Todos os direitos reservados.
          </p>
          <p className="text-center text-xs text-muted-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Resultados variam conforme o ritmo de estudo. O SpeakAI ensina inglês de forma prática e contextual,
            com base em frases reais e repetição guiada. Este produto não garante resultados específicos, mas oferece
            um método comprovado usado por mais de 60.000 alunos.
          </p>
        </div>
      </footer>

      {/* MOBILE STICKY CTA */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-background/95 backdrop-blur-md border-t border-border/50">
        <a
          href={CHECKOUT}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center gradient-cta text-primary-foreground font-bold py-3.5 rounded-xl uppercase tracking-wide shadow-cta pulse-cta"
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
