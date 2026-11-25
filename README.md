# Goiânia 2030

Projeto escolar de planejamento municipal. O visitante conhece a cidade, compara sete problemas com propostas de melhoria e redistribui um orçamento hipotético de R$ 100.000. O site inclui 42 fotografias e imagens ilustrativas, mapa local, fontes, créditos e apresentação de 15 slides.

## Apresentar em sala

1. Extraia todo o conteúdo de `Goiania-2030.zip` para uma pasta.
2. Abra `APRESENTAR.html` no navegador. As fotos, o mapa, os gráficos, o simulador e os slides estão incluídos no pacote. Os links para fontes externas precisam de internet.
3. Clique em **Iniciar apresentação**. Avance e volte pelas setas do teclado, pelos botões da tela ou deslizando o dedo. Use **Esc** para sair. O slide 12 permite redistribuir o orçamento durante a apresentação.

O botão de tema alterna entre claro e escuro. O simulador aceita valores digitados em reais com centavos. Nos controles deslizantes, as setas do teclado ajustam R$ 100 por vez, e Shift com uma seta ajusta R$ 1.000. Ao iniciar, todo o orçamento já está distribuído. Reduza uma área para liberar saldo para outra.

**Salvar distribuição** guarda a proposta no navegador atual. **Exportar CSV** gera um arquivo que pode ser aberto no Excel ou no LibreOffice. Se o navegador restringir o armazenamento em arquivos locais, o CSV preserva os valores; também é possível executar o site pelo endereço local abaixo.

## Executar localmente

A pasta `site-pronto/` do pacote contém o site compilado. Para servi-lo em um computador com Python 3, abra um terminal dentro dessa pasta e execute um dos comandos abaixo.

No Windows:

```powershell
py -m http.server 8000
```

No macOS ou Linux:

```sh
python3 -m http.server 8000
```

Abra [localhost na porta 8000](http://localhost:8000).

## Editar o projeto

Use Node.js 22 ou superior e npm. Na pasta que contém `package.json`, execute:

```sh
npm ci
npm run dev
```

O terminal exibirá o endereço local. Para verificar os dados e gerar o site de produção:

```sh
npm run verificar
npm run build
npm run preview
```

O build cria `dist/` com caminhos relativos. A publicação funciona tanto no domínio principal quanto na subpasta de um projeto.

## Publicar no GitHub Pages

**Opção com o site pronto.** Abra um repositório no GitHub e coloque o conteúdo de `site-pronto/` na raiz da branch que você usará para publicar. Em **Settings → Pages**, escolha **Deploy from a branch**, selecione a branch e **/(root)** e salve. O GitHub mostrará a URL ao concluir.

**Opção com o código-fonte.** Envie para a branch `main` o projeto que contém `package.json`, `src/`, `public/` e `.github/workflows/pages.yml`. Em **Settings → Pages**, escolha **GitHub Actions**. Em **Actions**, execute **Publicar no GitHub Pages** ou faça um novo envio à branch `main`. O fluxo confere os valores, compila o projeto e publica `dist/`. As pastas `site-pronto/` e o arquivo `APRESENTAR.html` do pacote de distribuição são opcionais no repositório.

[Documentação do GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Estrutura

| Arquivo ou pasta | Conteúdo |
| --- | --- |
| `src/areas.json` | Diagnósticos, propostas, valores, detalhamentos e indicadores |
| `src/Finance.tsx` e `src/ledger.ts` | Gráficos, controles, validações em centavos e exportação |
| `src/Presentation.tsx` | Apresentação interativa de 15 slides |
| `src/*Credits.json` e `src/credits-*.json` | Autoria, licenças, descrições e fontes das imagens |
| `src/mapData.json` e `public/assets/map/` | Geometrias cartográficas locais e coordenadas |
| `src/references.json` | Referências institucionais e datas de consulta |
| `public/assets/images/` | 8 fotografias reais de Goiânia e 34 simulações ilustrativas |
| `scripts/verificar.mjs` | Conferência dos totais, detalhes, imagens e limites do simulador |
| `scripts/empacotar.py` | Monta o ZIP de apresentação a partir do build atual |

Para gerar outro pacote com o site editado, execute `npm run build` e depois `python3 scripts/empacotar.py` (ou `py scripts/empacotar.py` no Windows). O arquivo será criado na pasta atual.

## Orçamento e fontes

| Setor | Valor inicial | Participação |
| --- | ---: | ---: |
| Saúde | R$ 25.000 | 25% |
| Educação | R$ 20.000 | 20% |
| Moradia | R$ 15.000 | 15% |
| Transporte | R$ 15.000 | 15% |
| Saneamento | R$ 15.000 | 15% |
| Geração de empregos | R$ 10.000 | 10% |
| **Total** | **R$ 100.000** | **100%** |

Ações ambientais e educativas recebem R$ 3.000 da verba de saneamento. Os custos simulam o planejamento de intervenções pontuais. Os indicadores têm metas a definir no diagnóstico. As imagens de transformação identificadas como simulações foram geradas por IA. O projeto é educacional e independente da Prefeitura.

A seção **Transparência e referências** reúne os créditos das fotos, as licenças, a atribuição do mapa e as fontes oficiais consultadas em 25/11/2026. A fonte Manrope e sua licença acompanham o projeto.
