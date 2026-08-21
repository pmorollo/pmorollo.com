# Homologação local — Integração do Hub Literário

**Data:** 20 de agosto de 2026
**Branch:** `integrar-hub-literario`
**Escopo:** Página Virada + área Estudar Literatura + percurso de Dom Casmurro
**Publicação:** não realizada

## Resultado

**Homologação local aprovada para criação de commit, com bloqueios de publicação registrados abaixo.**

## Verificações concluídas

- portal educacional e painel de Dom Casmurro renderizados em composição desktop;
- comportamento responsivo simulado em largura móvel de 390 px;
- cabeçalho, chamadas, percurso, cartões e rodapé reorganizados em uma coluna no celular;
- 28 páginas HTML analisadas sem erros estruturais;
- exatamente um título e um `h1` por página;
- nenhum ID duplicado;
- nenhum link ou imagem local ausente;
- sitemap XML válido, com 27 URLs, incluindo 13 da área educacional;
- 13 páginas educacionais liberadas para indexação após a homologação;
- nenhum endereço antigo do GitHub Pages ou menção residual ao Hub Literário nas páginas migradas;
- links recíprocos entre o ensaio sobre Machado de Assis e o percurso de Dom Casmurro;
- nenhuma credencial ou token encontrado nos arquivos rastreados;
- nenhum formulário, login ou pagamento introduzido na área educacional;
- links externos que abrem nova guia possuem `noopener`;
- link institucional do MEC para Dom Casmurro confirmado;
- conteúdo das 11 lições preservado na migração;
- imagens convertidas de JPG para WebP, reduzindo o total aproximado de 2,30 MB para 281 KB.

## Integrações concluídas

- “Estudar Literatura” no menu e no rodapé da página inicial;
- chamada contextual no artigo sobre Machado de Assis;
- apresentação da área educacional na página Sobre;
- Política de Privacidade atualizada sem declarar serviços ainda não integrados;
- Termos de Uso ampliados para materiais educacionais e prevenção de fraude acadêmica;
- contato editorial padronizado;
- URLs finais e canonicals preparados em `pmorollo.com/estudar/`.

## Bloqueios antes da publicação

1. executar teste final em navegador real, especialmente Safari e Chrome em celular;
2. confirmar a estratégia de redirecionamento do Hub antigo para as novas URLs;
3. publicar somente após validação da versão enviada ao GitHub.

## Escopo mantido fora desta versão

- segunda obra;
- busca avançada por títulos;
- cadastro e login;
- pagamentos;
- assinatura;
- migração do formulário para o Cloudflare Worker;
- redirecionamento do domínio antigo antes da nova seção estar pública e validada.
