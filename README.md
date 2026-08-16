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

**Fase 1 — Técnica (revisada em 16 ago 2026)**
- 8 artigos no ar; sitemap com 15 URLs (sem duplicata `/index.html`) e canonical tags em todas as páginas.
- Linkagem interna "Leia também" entre artigos; `consulte.html` com referências dos 8 artigos, incluindo o bloco 8 — Antonio Candido ("O Direito à Literatura", in *Vários Escritos*, 1995).
- `robots.txt` bloqueia `/Rascunhos/` como proteção adicional; a pasta não faz parte do pacote publicável.
- Consentimento unificado com opções de aceitar e recusar tecnologias opcionais.
- Rascunhos e materiais de trabalho mantidos fora da pasta publicável.
- O antigo painel local de newsletter foi retirado por não representar inscrições reais de visitantes.

**Fase 1b — Linha Editorial v3.0 (concluída)**
- Reescritos com análise formal como núcleo (leitura simbólica/psicológica apenas como hipótese opcional, quando sustentada no texto): home e `sobre.html`, `machado-de-assis`, `clarice-lispector`, `a-arte-de-ler`, `10-livros-essenciais` e `guimaraes-rosa`.
- Títulos de artigos relacionados padronizados; sidebar "Hora do Café" passa a citar Antonio Candido.

**Fase 2 — SEO e monetização (em preparação)**
- AdSense: conta em análise (revisão em andamento).
- Search Console: sitemap "Processado" com 15 URLs descobertas; indexação solicitada para `candido-direito-a-literatura.html`.

## Pendência programável de segurança

- [ ] **Revogar o token antigo do GitHub que apareceu no pacote de 16/08/2026.**
  - Responsável: Pedro Morollo.
  - Data: a programar.
  - Prioridade: alta; realizar antes de reutilizar ou revisar credenciais de acesso ao repositório.
  - Observação: o token já foi removido dos arquivos e do remoto Git do projeto, mas somente a revogação na conta do GitHub o invalida definitivamente.

## Cronograma de publicações (18 ago – 11 set 2026)

Ritmo editorial: **2 artigos por semana** — terça-feira (atração) e sexta-feira (identidade), conforme a Linha Editorial v1.0 (ver `Downloads/Linha_Editorial_Pagina_Virada.txt`).

| Data | Dia · tipo | Tema (eixo) |
|---|---|---|
| 18/08 | Ter · atração | Por que *O Cortiço* ainda importa: o ambiente, o dinheiro e as vontades (draft Aluísio Azevedo — Brasil/desigualdade) |
| 21/08 | Sex · identidade | Estranhamento: quando a literatura nos faz ver de novo (Shklovsky — formação do leitor) |
| 25/08 | Ter · atração | A leitura profunda pode recuperar nossa atenção? (atualidade) |
| 28/08 | Sex · identidade | Baleia e o silêncio: a focalização em *Vidas Secas* (análise de obra) |
| 01/09 | Ter · atração | A obra por trás da tela: o que muda quando um livro vira filme (adaptação) |
| 04/09 | Sex · identidade | Aristóteles e a engenharia da persuasão (*Retórica*, draft — linguagem e poder) |
| 08/09 | Ter · atração | Machado de Assis entenderia as máscaras das redes sociais? (reaproveita o eixo "máscaras sociais") |
| 11/09 | Sex · identidade | Milan Kundera e o peso da liberdade (*A Insustentável Leveza do Ser*, draft — literatura e vida) |

Status dos rascunhos em `Rascunhos/`: `antonio-candido.md` já publicado (`candido-direito-a-literatura.html`); *Vidas Secas* e *O Cortiço* têm menções no artigo "10 Livros" — os artigos dedicados usam enquadramentos novos para evitar duplicação.

Entre publicações: conteúdo de circulação nas redes (pergunta + trecho da análise), conforme A.1 do documento editorial.

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
