import { Link, useParams } from 'react-router-dom'
import PageTitle from '../components/PageTitle.jsx'
import Button from '../components/Button.jsx'
import { ArrowLeftIcon, ArrowRightIcon } from '../components/Icons.jsx'
import { projects, getProjectById } from '../data/projects.js'

export default function ProjetoDetalhe() {
  const { id } = useParams()
  const project = getProjectById(id)

  if (!project) {
    return (
      <section className="page">
        <div className="container notfound">
          <h1>Projeto não encontrado</h1>
          <p>Não existe nenhum projeto com o identificador “{id}”.</p>
          <Button to="/projetos" variant="dark">
            Voltar aos projetos
          </Button>
        </div>
      </section>
    )
  }

  const index = projects.findIndex((p) => p.id === project.id)
  const prev = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]

  return (
    <article className="page">
      <div className="container">
        <PageTitle light={project.light} bold={project.bold} />

        <img className="detail__cover" src={project.cover} alt={project.title} />

        <div className="detail__content">
          <img className="detail__side" src={project.side} alt={`${project.title} — ambiente`} loading="lazy" />
          <div className="detail__text">
            {project.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </div>

        <div className="detail__plans">
          {project.plans.map((src, i) => (
            <img key={src} src={src} alt={`${project.title} — planta ${i + 1}`} loading="lazy" />
          ))}
        </div>

        <nav className="detail__pager" aria-label="Navegação entre projetos">
          <Link to={`/projetos/${prev.id}`}>
            <ArrowLeftIcon width={14} height={14} /> {prev.title}
          </Link>
          <Link to="/projetos" className="detail__all">
            Todos os projetos
          </Link>
          <Link to={`/projetos/${next.id}`}>
            {next.title} <ArrowRightIcon width={14} height={14} />
          </Link>
        </nav>
      </div>
    </article>
  )
}
