
# Tornar o site 100% responsivo (mobile-first)

Revisão completa de responsividade do landing page SpeakAI, garantindo experiência perfeita em telas de 320px até 1920px+. Foco em mobile (320–414px) já que tráfego pago vem majoritariamente de celular.

## Áreas de ajuste

### 1. Header fixo (`Index.tsx`)
- Logo com tamanho reduzido em mobile (`text-lg` → `md:text-xl`)
- Botão CTA do header: encurtar texto em mobile ("R$57" só) ou ocultar até `sm:`
- Padding horizontal responsivo (`px-3 md:px-6`)

### 2. Cronômetro (`CountdownTimer.tsx`)
- Blocos de tempo menores em mobile (`w-12 md:w-16`)
- Texto "Oferta termina em" com quebra adequada
- Garantir que não estoure largura em telas 320px

### 3. Hero Section
- Imagem do Professorzinho: `max-w-[280px] md:max-w-md lg:max-w-lg`
- Headline: escalonar `text-4xl sm:text-5xl md:text-6xl lg:text-7xl`
- Badges (Hotmart/SSL/Garantia): wrap com `flex-wrap gap-2`
- CTA full-width em mobile (`w-full sm:w-auto`)

### 4. Grids de cards (Dor, Features, Depoimentos, Bônus, Exemplos)
- Padronizar: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`
- Depoimentos (8 cards): `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`
- Gap responsivo: `gap-4 md:gap-6`
- Padding interno dos cards: `p-4 md:p-6`

### 5. Tabela comparativa
- Em mobile: converter para cards empilhados (Tradicional vs SpeakAI lado a lado em cada linha) OU adicionar `overflow-x-auto` com largura mínima
- Texto reduzido `text-sm md:text-base`

### 6. Exemplos práticos (cards Aeroporto/Reunião/etc.)
- Frases longas em inglês/pronúncia: `break-words` e `text-sm md:text-base`
- Espaçamento interno reduzido em mobile

### 7. Seção de oferta final
- "De R$497 por R$57": números enormes escalonados (`text-5xl md:text-7xl lg:text-8xl`)
- CTA gigante: `w-full sm:w-auto` com padding reduzido em mobile
- Imagem com `max-w` apropriado

### 8. Componentes flutuantes
- **LiveViewers**: posicionar `bottom-20 md:bottom-4` em mobile (não sobrepor CTA flutuante), texto menor
- **PurchaseNotifications**: largura `max-w-[calc(100vw-2rem)] md:max-w-sm`, posição `bottom-20 md:bottom-4` em mobile
- **CTA flutuante mobile**: já existe, garantir z-index correto e backdrop blur

### 9. Tipografia global
- Headlines de seção: `text-3xl sm:text-4xl md:text-5xl`
- Body: `text-base md:text-lg`
- Line-height ajustado para leitura mobile

### 10. Espaçamento de seções
- Padding vertical: `py-12 md:py-20 lg:py-24`
- Container: `px-4 sm:px-6 lg:px-8`

### 11. Footer
- Links empilhados em mobile (`flex-col sm:flex-row`)
- Disclaimer com `text-xs md:text-sm`

## Detalhes técnicos
- Breakpoints Tailwind: `sm:640px`, `md:768px`, `lg:1024px`, `xl:1280px`
- Estratégia mobile-first: classes base = mobile, prefixos `md:`/`lg:` para telas maiores
- Testar em viewports: 320px (iPhone SE), 375px (iPhone padrão), 414px (iPhone Plus), 768px (tablet), 1024px+ (desktop)
- Garantir `min-w-0` em flex children para evitar overflow
- Imagens com `w-full h-auto object-contain` onde aplicável
- Verificar `overflow-x-hidden` no `body` para evitar scroll horizontal acidental
