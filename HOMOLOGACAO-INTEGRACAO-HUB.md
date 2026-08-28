# Fechamento — Integração do Hub Literário

**Data da homologação inicial:** 20 de agosto de 2026
**Data do fechamento:** 28 de agosto de 2026
**Destino definitivo:** `https://pmorollo.com/estudar/`
**Estado:** integração publicada e migração concluída

## Decisão consolidada

O Página Virada é a marca e o portal principal. O Hub Literário foi incorporado como a área **Estudar Literatura**, preservando o percurso:

**Obter → Preparar → Ler → Compreender → Aprofundar → Revisar → Testar**

## Resultado publicado

- portal educacional disponível em `/estudar/`;
- *Dom Casmurro* mantido como única obra-modelo;
- 13 URLs educacionais indexáveis;
- navegação integrada à página inicial, ao artigo sobre Machado de Assis, à página Sobre e ao rodapé;
- páginas institucionais, privacidade, termos e contato consolidados no Página Virada;
- canonicals definitivos em `https://pmorollo.com/estudar/...`;
- sitemap e robots do domínio principal atualizados;
- imagens convertidas para WebP;
- conteúdo das 11 lições preservado.

## Validação final

- 28 páginas HTML analisadas;
- exatamente um título e um `h1` por página;
- descrições e canonicals presentes e coerentes;
- nenhum ID duplicado;
- nenhum link ou recurso local ausente;
- sitemap XML válido, com 27 URLs totais e 13 educacionais;
- nenhuma URL antiga do GitHub Pages nas páginas migradas;
- nenhuma credencial ou token nos arquivos rastreados;
- nenhuma busca, conta, cobrança ou promessa de serviço ainda inexistente.

## Migração do endereço antigo

O repositório `pmorollo/hub-literario` permanece publicado exclusivamente para redirecionar cada URL antiga à equivalente nova. Os redirecionamentos usam os mecanismos compatíveis com GitHub Pages:

- atualização imediata por `meta refresh`;
- `window.location.replace` como reforço no navegador;
- canonical apontando para o destino definitivo;
- página 404 direcionando acessos residuais à área Estudar Literatura.

Os redirecionamentos devem permanecer ativos por pelo menos 12 meses e, preferencialmente, enquanto houver acessos ou resultados de busca nas URLs antigas.

## Próximas ações externas

1. confirmar no Search Console que `https://pmorollo.com/sitemap.xml` continua processado;
2. inspecionar e solicitar indexação de `/estudar/` e `/estudar/dom-casmurro/`;
3. acompanhar a substituição gradual das URLs antigas pelas novas;
4. não arquivar nem desativar o GitHub Pages antigo durante a transição.

## Fora deste fechamento

- segunda obra;
- busca avançada;
- cadastro, login e pagamentos;
- assinatura;
- newsletter Página Virada Leitores, mantida em espera por falha de validação do Turnstile.

Esses itens não bloqueiam nem reabrem a integração concluída.
