const img = (seed, w = 900, h = 700, extra = '') =>
  `https://picsum.photos/seed/${seed}/${w}/${h}${extra}`

export const lorem =
  'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos. O Lorem Ipsum é o texto-padrão da indústria desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.'

export const loremLong =
  'Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Foi popularizado na década de 1960 com o lançamento das folhas de Letraset contendo passagens de Lorem Ipsum e, mais recentemente, com programas de editoração eletrônica como o Aldus PageMaker, que incluem versões do Lorem Ipsum.'

/* ---------- Projetos (15 → 5 páginas de 3) ---------- */
export const projects = Array.from({ length: 15 }, (_, i) => {
  const n = i + 1
  return {
    id: n,
    light: 'Projeto',
    bold: `Exemplo ${n}`,
    title: `Projeto Exemplo ${n}`,
    summary: lorem,
    paragraphs: [lorem + ' ' + loremLong, loremLong],
    image: img(`projeto-${n}`, 1000, 680),
    cover: img(`capa-${n}`, 1400, 520),
    side: img(`lateral-${n}`, 600, 460),
    plans: [
      img(`planta-${n}-a`, 800, 600, '?grayscale'),
      img(`planta-${n}-b`, 800, 600, '?grayscale'),
    ],
  }
})

export const getProjectById = (id) =>
  projects.find((p) => String(p.id) === String(id))

/* ---------- Galeria (50 fotos → 5 páginas de 10) ---------- */
export const gallery = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  src: img(`galeria-${i + 1}`, 420, 440),
  alt: `Foto ${i + 1} da galeria`,
}))

/* ---------- Home ---------- */
export const heroSlides = [
  { id: 1, eyebrow: 'Projeto', title: 'Lorum', image: img('hero-1', 900, 640), projectId: 1 },
  { id: 2, eyebrow: 'Projeto', title: 'Ipsum', image: img('hero-2', 900, 640), projectId: 2 },
  { id: 3, eyebrow: 'Projeto', title: 'Dolor', image: img('hero-3', 900, 640), projectId: 3 },
]

export const about = {
  images: [img('sobre-a', 360, 480), img('sobre-b', 360, 360, '?grayscale')],
  text: [
    'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos. O Lorem Ipsum é o texto-padrão da indústria desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.',
    'Ele sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.',
  ],
}

export const mission = [
  { number: 1, text: lorem },
  { number: 2, text: lorem },
]

/* ---------- Sobre / Certificações ---------- */
export const certifications = [
  { id: 1, name: 'Certificação ISO 9001', year: 2019 },
  { id: 2, name: 'Selo de Qualidade AsBEA', year: 2020 },
  { id: 3, name: 'Construção Sustentável', year: 2021 },
  { id: 4, name: 'Registro CAU/BR', year: 2018 },
]

/* ---------- Contato (usado no rodapé e na página) ---------- */
export const company = {
  name: 'Digital Project',
  address: ['Rua Exemplo, 1234', 'São Paulo, SP — 01000-000'],
  phone: '(11) 4002-8922',
  email: 'contato@digitalproject.com',
}

export const navLinks = [
  { to: '/', label: 'Principal', end: true },
  { to: '/galeria', label: 'Galeria' },
  { to: '/projetos', label: 'Projetos' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/contato', label: 'Contato' },
]
