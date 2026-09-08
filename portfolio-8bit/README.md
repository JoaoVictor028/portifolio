# Portfólio 8-bit — João Victor Cunha

Landing page profissional bilíngue para apresentar a atuação de João Victor Cunha como Desenvolvedor de Software. O projeto usa uma linguagem visual retrofuturista, mas foi estruturado para leitura rápida por recrutadores: proposta de valor, stack, formações, destaques de atuação, trajetória e formas de contato.

## Visão geral

- Interface em português e inglês, com alternância imediata de conteúdo, título e descrição da página.
- Conteúdo profissional centralizado em uma única fonte de dados, sem textos de demonstração ou projetos fictícios.
- Experiência em PHP, controle de acesso e biometria facial descrita de forma profissional, sem divulgar informações internas.
- Organização enxuta: perfil, tecnologias, formações e certificações, destaques técnicos, experiência e contato.
- Layout responsivo, navegação por âncoras e suporte a preferência de movimento reduzido.
- Terminal interativo apenas no navegador, com comandos informativos e sem comunicação com servidores externos.
- Favicon próprio em estilo pixel art, disponível em `public/favicon-jv.png`.

## Tecnologias

| Área | Solução |
| --- | --- |
| Aplicação | Angular 21 com componentes standalone |
| Linguagem | TypeScript |
| Estado e idioma | Angular Signals |
| Estilos | SCSS responsivo |
| Tipografia | Press Start 2P e Space Mono via Fontsource |
| Testes | Vitest integrado ao Angular CLI |

## Executar localmente

### Pré-requisitos

- Node.js em versão compatível com Angular CLI 21
- npm 11 ou superior

### Instalação

```bash
npm install
npm start
```

Com o servidor iniciado, abra [http://localhost:4200](http://localhost:4200).

## Comandos disponíveis

| Comando | Finalidade |
| --- | --- |
| `npm start` | Inicia o ambiente de desenvolvimento com recarga automática. |
| `npm run build` | Gera a versão otimizada para produção em `dist/portfolio-8bit/browser`. |
| `npm run build:pages` | Gera a versão pronta para o caminho público do GitHub Pages. |
| `npm test` | Executa os testes unitários. |
| `npm run watch` | Gera builds contínuos em modo de desenvolvimento. |

## Estrutura do projeto

```text
src/app/
├── core/services/             # Serviço de conteúdo, idioma e metadados
├── data/portfolio.data.ts     # Conteúdo completo em PT e EN
├── sections/                  # Seções da landing page
│   ├── hero/
│   ├── about/
│   ├── skills/
│   ├── certifications/
│   ├── projects/
│   ├── experience/
│   ├── terminal/
│   └── contact/
└── shared/                    # Componentes e diretivas reutilizáveis

public/
└── favicon-jv.png             # Favicon da marca pessoal
```

## Atualizar o conteúdo

Todas as informações editáveis ficam em [`src/app/data/portfolio.data.ts`](src/app/data/portfolio.data.ts). O arquivo possui dois blocos, `pt` e `en`, para manter os idiomas coerentes.

Use-o para atualizar:

- apresentação, disponibilidade e localização;
- tecnologias e nível de experiência;
- formações e certificações;
- destaques técnicos e experiência profissional;
- canais de contato.

Ao incluir uma experiência, priorize contexto, tecnologias e contribuição. Não inclua dados de clientes, credenciais, regras internas ou detalhes proprietários.

## Qualidade e acessibilidade

- O conteúdo das seções permanece visível mesmo se a animação de entrada não estiver disponível, evitando páginas vazias em acesso direto.
- A navegação principal usa âncoras, há atalho para pular ao conteúdo e rótulos acessíveis em português e inglês.
- O projeto respeita `prefers-reduced-motion`.
- Antes de publicar, execute:

```bash
npm run build
npm test
```

## Publicação

Para o GitHub Pages deste repositório, execute `npm run build:pages` e publique o conteúdo da pasta `dist/portfolio-8bit/browser` na branch `gh-pages`. Como a página não depende de uma API própria, não há variáveis de ambiente obrigatórias.

---

Desenvolvido com Angular para apresentar experiências e competências de engenharia de software de forma direta e memorável.
