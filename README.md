# Página Virada — Blog de Literatura

Blog de literatura com resenhas, ensaios, entrevistas e listas sobre os maiores nomes da literatura brasileira e mundial.

## Deploy

Este site é estático (HTML/CSS/JS) e pode ser hospedado gratuitamente no GitHub Pages.

## Funcionalidades

- 8 artigos completos sobre literatura
- Imagens reais do Unsplash
- Dark/Light mode
- Busca de artigos
- Sidebar com artigos populares
- Botões de compartilhamento
- Slots para Google AdSense
- Design responsivo
- Linkagem interna entre artigos (blocos "Leia também")

## Tecnologias

- HTML5
- CSS3
- JavaScript vanilla
- Unsplash (imagens)
- Google Fonts (Playfair Display, Inter, Lora)

## Estado Atual (12 ago 2026)

- **AdSense**: conta em análise (revisão em andamento)
- **Search Console**: sitemap com 15 URLs descobertas; artigo mais recente (`candido-direito-a-literatura.html`) com indexação solicitada
- **consulte.html**: página de referências atualizada com os 8 artigos, incluindo o bloco 8 — Antonio Candido ("O Direito à Literatura", in *Vários Escritos*, 1995)
- **robots.txt**: bloqueia `/Rascunhos/`
- **admin.html**: marcado `noindex, nofollow` (não deve ser indexado)

## Como publicar um novo artigo

1. Criar `artigos/slug.html` seguindo o template existente:
   - `meta name="description"` único
   - `link rel="canonical"` apontando para `https://pmorollo.com/artigos/slug.html`
   - Schema.org `Article` (headline, author, datePublished/Modified)
2. Adicionar a entrada no array `articles` de `app.js` (o hero da home é sempre `articles[0]`).
3. Adicionar o card estático correspondente em `index.html` (para crawlers sem JavaScript).
4. Adicionar a URL em `sitemap.xml` (manter apenas a raiz `/` na home, sem duplicar `index.html`).
5. Inserir/atualizar os blocos "Leia também" / "Continue lendo" nos artigos relacionados (linkagem interna obrigatória).
6. Commit + push para `origin/main` (GitHub Pages publica automaticamente).
7. No Search Console: **Inspetor de URL** → colar a URL nova → **Solicitar indexação**.
8. Atualizar a página `consulte.html` com as novas fontes/referências do artigo.

## Linha Editorial

- **Método Página Virada v3.0**: skill do opencode em `.opencode/skills/pagina-virada/SKILL.md` (três etapas centrais + leitura simbólica opcional).
- **Linha Editorial v1.0**: texto extraído em `Downloads/Linha_Editorial_Pagina_Virada.txt` (ritmo de 2 artigos/semana, eixos de conteúdo, checklist de aprovação).