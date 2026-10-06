# Digital Project — Site de escritório de arquitetura

Recriação, em **React + Vite + React Router**, do site do protótipo do Figma
[Website of Architects](https://www.figma.com/community/file/891374608655348853/website-of-architects-free-website).
O layout (Roboto com títulos em duas linhas — leve em cinza + negrito —, blocos
cinza-claros, mosaico de projetos, formulário com foto e rodapé escuro) segue as
telas do protótipo: Principal, Galeria, Projetos, Detalhe do projeto e
Certificações/Contato.

## Integrantes

- Nome do integrante 1
- Nome do integrante 2
- Nome do integrante 3
- Nome do integrante 4

> Substituam pelos nomes reais do grupo antes da entrega.

## Rotas

| Rota            | Página                | Observação                                                  |
| --------------- | --------------------- | ----------------------------------------------------------- |
| `/`             | Home (Principal)      | Hero com slides, sobre, missão, mosaico de projetos, contato |
| `/galeria`      | Galeria de fotos      | Grade de 5 colunas com paginação (5 páginas)                |
| `/projetos`     | Projetos              | Lista com paginação (3 por página, 5 páginas)               |
| `/projetos/:id` | Detalhe do projeto    | **Rota dinâmica** (`useParams`), 15 projetos                |
| `/sobre`        | Sobre / Certificações | História da empresa e certificações                         |
| `/contato`      | Contato               | Dados da empresa, formulário e foto                         |
| `*`             | 404                   | Página não encontrada                                       |

A rota `/projetos/:id` busca o projeto em `src/data/projects.js` pelo `id` da
URL. Se o `id` não existir, aparece a mensagem "Projeto não encontrado". A
página também tem links para o projeto anterior e o próximo.

## Tecnologias

- React 18
- Vite 5
- React Router DOM 6 (`BrowserRouter`, `Routes`, `Route`, `NavLink`, `Link`,
  `Outlet`, `useParams`, `useLocation`)
- CSS puro (variáveis, grid, flexbox e media queries)

## Estrutura de pastas

```
src/
├── components/            # Componentes reutilizáveis
│   ├── Button.jsx         # Botão com seta (dark / white / outline)
│   ├── ContactSection.jsx # Formulário + foto (Home e Contato)
│   ├── Footer.jsx
│   ├── Header.jsx         # NavLink + menu mobile
│   ├── Icons.jsx          # Ícones SVG
│   ├── Layout.jsx         # Header + <Outlet /> + Footer
│   ├── Logo.jsx
│   ├── PageTitle.jsx      # Título leve + negrito
│   ├── Pagination.jsx     # 01 / 05 ← →
│   ├── ProjectRow.jsx     # Linha da lista de projetos
│   ├── ScrollToTop.jsx
│   └── SocialLinks.jsx
├── data/
│   └── projects.js        # Projetos, galeria, textos e links de navegação
├── pages/                 # Uma página por rota
│   ├── Home.jsx
│   ├── Galeria.jsx
│   ├── Projetos.jsx
│   ├── ProjetoDetalhe.jsx
│   ├── Sobre.jsx
│   ├── Contato.jsx
│   └── NotFound.jsx
├── styles/
│   ├── global.css
│   ├── components.css
│   └── pages.css
├── App.jsx                # Definição das rotas
└── main.jsx               # Ponto de entrada + BrowserRouter
```

## Como executar

Pré-requisito: Node.js 18 ou superior.

```bash
npm install
npm run dev       # servidor de desenvolvimento
npm run build     # build de produção
npm run preview   # visualizar o build
```

## Recursos adicionais

- Hero da Home com slides (setas anterior/próximo).
- Paginação funcional na Galeria e em Projetos.
- Menu responsivo (hambúrguer no celular) e layouts adaptados a tablet e celular.
- Formulário de contato com validação nativa (envio apenas demonstrativo).
- Página 404 e tratamento de projeto inexistente.

## Observações

- As imagens são ilustrativas (`picsum.photos`). Para ficar idêntico ao
  protótipo, exporte as imagens do Figma para `public/` e troque os endereços em
  `src/data/projects.js`, `src/pages/Sobre.jsx` e `src/components/ContactSection.jsx`.
- Ao publicar, configure o redirecionamento de todas as rotas para `index.html`
  para que o acesso direto a `/projetos/1` funcione.
