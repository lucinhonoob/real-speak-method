# Adicionar tracking de eventos (InitiateCheckout + ViewContent)

Implementação de tracking via UTMify e Meta Pixel (fbq) em pontos-chave da landing page.

## Mudanças

### 1. `src/hooks/useTracking.ts` (novo)
- Hook `useTracking` que retorna `{ track }`
- `track(eventName)` chama `window.utmify?.track(eventName)` e `window.fbq?.("track", eventName)` com try/catch silencioso em cada chamada
- Declaração global de tipos para `window.utmify` e `window.fbq`
- Export default + named export

### 2. `src/components/CTAButton.tsx`
- Adicionar `onClick` no `<a>` que dispara `track("InitiateCheckout")` via hook `useTracking`
- Sem `preventDefault` — link continua redirecionando normalmente para Hotmart
- Tipos globais já vêm do hook (sem duplicar)

### 3. `src/pages/Index.tsx`
- Importar `useTracking`
- `useEffect(() => { track("ViewContent"); }, [])` no topo do componente

## Notas
- Sem alterações visuais ou de comportamento existente
- Silent fail caso scripts de tracking ainda não tenham carregado
- Tipos globais declarados uma única vez no hook para evitar conflito
