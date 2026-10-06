import { useState } from 'react'
import PageTitle from '../components/PageTitle.jsx'
import Pagination from '../components/Pagination.jsx'
import { gallery } from '../data/projects.js'

const PER_PAGE = 10

export default function Galeria() {
  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(gallery.length / PER_PAGE)
  const items = gallery.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  const changePage = (next) => {
    setPage(next)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="page">
      <div className="container">
        <PageTitle light="Galeria de" bold="Fotos" />
        <hr className="divider" />

        <ul className="gallery">
          {items.map((photo) => (
            <li key={photo.id}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </li>
          ))}
        </ul>

        <Pagination page={page} totalPages={totalPages} onChange={changePage} />
      </div>
    </section>
  )
}
