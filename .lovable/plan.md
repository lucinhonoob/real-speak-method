
# Adicionar Vercel Speed Insights

Integração do `@vercel/speed-insights` para coletar métricas de performance (Core Web Vitals) da landing page.

## Observação importante
O projeto é **Vite + React** (não Next.js). Por isso vamos usar o import correto para React/Vite: `@vercel/speed-insights/react`, e não o `/next`. O componente funciona de forma equivalente.

## Mudanças

### 1. Instalar dependência
- Adicionar `@vercel/speed-insights` ao `package.json`

### 2. `src/App.tsx`
- Importar: `import { SpeedInsights } from "@vercel/speed-insights/react"`
- Renderizar `<SpeedInsights />` dentro do `<TooltipProvider>` (junto aos outros providers globais como `Toaster` e `Sonner`), garantindo que seja montado em todas as rotas

## Notas
- O Speed Insights só coleta dados em ambiente de produção (URL publicada `.lovable.app` ou domínio customizado), não no preview de desenvolvimento
- Após publicar, pode levar até 30 segundos para os primeiros dados aparecerem no dashboard da Vercel
- Se estiver usando bloqueador de anúncios, pode interferir na coleta — recomendado testar em aba anônima sem extensões
