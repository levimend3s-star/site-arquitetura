import Button from './Button.jsx'

export default function ProjectRow({ project }) {
  return (
    <article className="project-row">
      <div className="project-row__media">
        <img src={project.image} alt={project.title} loading="lazy" />
      </div>
      <div className="project-row__body">
        <h3 className="project-row__title">{project.title}</h3>
        <p className="project-row__text">{project.summary}</p>
        <Button to={`/projetos/${project.id}`} variant="white">
          Ver mais
        </Button>
      </div>
    </article>
  )
}
