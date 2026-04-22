
# Auditoria de Performance — SpeakAI Landing Page

Otimização focada em **LCP, CLS e tempo de carregamento percebido**, mantendo a identidade visual e todos os elementos de conversão atuais.

## Diagnóstico — gargalos identificados

1. **Imagens do Imgur sem otimização** (maior impacto)
   - 7 imagens carregadas em `<img>` simples, sem `width/height`, `loading="lazy"`, `decoding="async"`, nem `fetchpriority`
   - Imgur entrega JPG pesado; podemos forçar variantes menores (`i.imgur.com/{id}m.jpg` = 320px, `l.jpg` = 640px, `h.jpg` = 1024px) e usar `<picture>` com WebP
   - Hero (LCP) não tem `fetchpriority="high"` nem preload → atrasa o LCP
   - Faltam `width` e `height` → causa **CLS**

2. **Google Fonts bloqueando render**
   - `<link rel="stylesheet">` síncrono; Barlow carrega 5 pesos (400–800)
   - Sem `font-display: swap` explícito (já tem `&display=swap` ✅) mas sem preload da fonte do hero (Bebas Neue)

3. **Scripts de terceiros bloqueantes no `<head>`**
   - Pixel Utmify e UTMs carregam no `<head>` antes do conteúdo
   - Já têm `async/defer`, mas o `document.createElement` inline executa durante o parse → mover para após `DOMContentLoaded` ou para fim do `<body>`

4. **JavaScript bundle**
   - `recharts`, `embla-carousel`, `react-day-picker`, `cmdk`, `vaul`, ~25 componentes Radix instalados mas **não usados** na landing
   - Tree-shaking funciona, mas adicionar **manualChunks** no Vite separa vendor e melhora cache
   - `lucide-react` importa 19 ícones — já é tree-shakeable, ok

5. **Animações custosas**
   - `animate-gradient` (8s background-position) e `pulse-cta` rodam infinitamente → pintura constante na GPU
   - `animate-float` em 3 imagens simultâneas
   - Solução: pausar animações fora do viewport via `content-visibility: auto` nas seções abaixo da dobra; respeitar `prefers-reduced-motion`

6. **CSS / layout**
   - `App.css` (legado do template Vite) ainda incluso mas não é importado — verificar e remover
   - `overflow-x-hidden` duplicado em html/body/wrapper

7. **Build / deploy**
   - Sem `vite build` com `target: 'es2020'` explícito; SWC já é rápido
   - Falta `<link rel="preconnect">` para `i.imgur.com` e `cdn.utmify.com.br`

## Mudanças propostas

### `index.html`
- Adicionar `<link rel="preconnect">` e `<link rel="dns-prefetch">` para `i.imgur.com` e `cdn.utmify.com.br`
- Adicionar `<link rel="preload" as="image" href="https://i.imgur.com/j8m8zczl.jpg" fetchpriority="high">` (variante 640px do hero)
- Reduzir pesos do Barlow para `400;600;700` (remover 500 e 800 não usados)
- Mover scripts Utmify para o **fim do `<body>`** com `defer`, eliminando execução no `<head>`
- Adicionar `<meta name="theme-color" content="#0c2340">`

### `src/pages/Index.tsx`
- Substituir todas as `<img>` por componente `<OptimizedImage>` que:
  - Usa `<picture>` com `srcset` Imgur (variantes `m`, `l`, `h`)
  - Aplica `loading="lazy"` + `decoding="async"` (exceto hero: `loading="eager"` + `fetchpriority="high"`)
  - Define `width` e `height` (ratio fixo) para zerar CLS
- Hero: imagem com prioridade alta, demais lazy
- Adicionar `content-visibility: auto` + `contain-intrinsic-size` nas seções abaixo da dobra

### Novo `src/components/OptimizedImage.tsx`
- Wrapper que constrói srcset do Imgur automaticamente a partir do ID

### `src/index.css`
- Adicionar `@media (prefers-reduced-motion: reduce)` desabilitando `animate-float`, `animate-gradient`, `pulse-cta`
- Adicionar utility `.cv-auto { content-visibility: auto; contain-intrinsic-size: 800px; }`
- Remover regras não usadas

### `src/App.css`
- Excluir (arquivo legado não importado)

### `vite.config.ts`
- Adicionar `build.rollupOptions.output.manualChunks` separando: `react-vendor` (react, react-dom, react-router), `ui-vendor` (radix usados), `icons` (lucide)
- `build.cssCodeSplit: true` (default) e `build.minify: 'esbuild'`
- `build.target: 'es2020'`

### `src/components/PurchaseNotifications.tsx` & `LiveViewers.tsx`
- Atrasar montagem com `requestIdleCallback` (fallback `setTimeout`) para não competir com o LCP
- `LiveViewers` aparece só após 3s de idle

### `src/App.tsx`
- Lazy-load do `NotFound` com `React.lazy` (menos prioritário)
- Manter `Index` eager (rota principal)

## Resultado esperado
- **LCP**: -40 a -60% (preload + srcset + fetchpriority no hero)
- **CLS**: ~0 (width/height nas imagens)
- **TBT**: -30% (scripts terceiros no fim do body, idle scheduling)
- **Tamanho transferido**: -50% nas imagens (variantes Imgur menores)
- **JS inicial**: -10–15% (manualChunks + lazy NotFound)

## Notas
- Sem mudança visual perceptível — apenas performance
- Métricas só aparecerão na URL publicada (Speed Insights da Vercel já está integrado)
- Animações continuam ativas para usuários sem `prefers-reduced-motion`
