import { useState } from 'react'
import PageTitle from '../components/PageTitle.jsx'
import ProjectRow from '../components/ProjectRow.jsx'
import Pagination from '../components/Pagination.jsx'
import { projects } from '../data/projects.js'

const PER_PAGE = 3

export default function Projetos() {
  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(projects.length / PER_PAGE)
  const items = projects.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  const changePage = (next) => {
    setPage(next)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="page">
      <div className="container">
        <PageTitle light="Nossos" bold="Projetos" />

        <div className="project-list">
          {items.map((p) => (
            <ProjectRow key={p.id} project={p} />
          ))}
        </div>

        <Pagination page={page} totalPages={totalPages} onChange={changePage} />
      </div>
    </section>
  )
}
