
# SpeakAI Method — Landing Page de Alta Conversão

Landing page completa de infoproduto, no estilo do site de referência, em português, com foco em conversão para o checkout da Hotmart.

## Identidade Visual
- **Paleta**: Azul confiança (`#0c2340` fundo, `#1a4a6e` superfícies, `#2d8a9e` accent secundário) + **amarelo `#FBBF24`** como CTA principal (alto contraste = mais cliques)
- **Tipografia**: Bebas Neue para headlines impactantes (uppercase, tracking apertado) + Barlow para corpo de texto (legível, moderno)
- **Estilo**: Dark mode premium, glassmorphism sutil em cards, gradientes suaves, glow nos CTAs
- **Animações intensidade média (3/5)**: fade-in/slide-up no scroll (Intersection Observer), hover scale nos cards, pulse no botão de oferta, count-up nos números de prova social, gradient animado no hero

## Estrutura da Página (single page, todas as seções com scroll suave)

1. **Header fixo** — Logo "SpeakAI Method" + botão amarelo "Quero meu acesso R$57"
2. **Hero** — Headline "Destrave o inglês e fale naturalmente", subheadline, imagem do Professorzinho (`j8m8zcz`), CTA principal, badges (Hotmart, SSL, Garantia 7 dias)
3. **Cronômetro de oferta** — Countdown regressivo de 15 minutos (reseta no localStorage), bem visível, urgência
4. **Dor / Por que você trava** — 4 cards com os pontos de dor + imagem Professorzinho confuso (`BqMM7RF`)
5. **Por que SpeakAI é diferente** — 4 features numeradas (Frases Reais, Pronúncia Aportuguesada, Professorzinho, Aulas Curtas) + imagem (`PRrC41O`)
6. **Prova social** — "+60.000 alunos em 12 países" com count-up animado + grid de 8 depoimentos usando a imagem `tZMBlIK`
7. **Transformação** — 4 benefícios com checkmarks + imagem Professorzinho comemorando (`ztVDPzq`)
8. **O que você recebe por R$57** — Lista de entregáveis + bônus (E-book R$97, Aulas gravadas R$197) + imagem (`wwk5XFr`)
9. **Tabela comparativa** — Métodos Tradicionais vs SpeakAI (6 linhas)
10. **Exemplos práticos** — 4 cards (Aeroporto, Reunião, Restaurante, Networking) com inglês 🇺🇸 / português 🇧🇷 / pronúncia aportuguesada 🗣️
11. **Oferta final** — "De R$497 por R$57", CTA gigante amarelo pulsante, badges de garantia + imagem (`Oa5AeVw`)
12. **Garantia 7 dias** — Selo destacado
13. **Footer** — Links (Privacidade, Termos, Suporte), disclaimer de resultados, copyright

## Elementos de Conversão Persuasivos
- **Cronômetro regressivo** de 15 min no topo (sticky em mobile) — persiste no localStorage
- **Contador "X pessoas vendo agora"** — número entre 47–89 que oscila a cada 8s, canto inferior
- **2 notificações fake de compra** — toast no canto inferior esquerdo: aparece aos 30s ("Maria de São Paulo acabou de comprar") e aos 90s ("João do Rio de Janeiro garantiu sua vaga"), com avatar e tempo
- Todos os CTAs apontam para `https://go.hotmart.com/L103540759E?ap=b733` (abre em nova aba)
- Botão CTA flutuante mobile fixo no rodapé

## Scripts UTMify (Tracking)
Adicionar no `index.html` antes do `</head>`:
- Pixel UTMify com `pixelId = "6952d5f7e55fa9e99b678ddd"`
- Script de UTMs `cdn.utmify.com.br/scripts/utms/latest.js` com `data-utmify-prevent-subids`

## Configuração Técnica
- **Branch principal**: `speakai`
- Imagens do Imgur carregadas via URL direta (`i.imgur.com/{id}.jpg`)
- Fontes Google (Bebas Neue + Barlow) via `<link>` no index.html
- Tokens de cor adicionados ao `index.css` (HSL) e `tailwind.config.ts`
- 100% responsivo (mobile-first) — design otimizado para leitura no celular já que tráfego pago vem majoritariamente de mobile
- SEO: title, meta description, OG tags em português
