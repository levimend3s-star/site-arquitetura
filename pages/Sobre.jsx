import PageTitle from '../components/PageTitle.jsx'
import { about, certifications, lorem, loremLong } from '../data/projects.js'

export default function Sobre() {
  return (
    <section className="page">
      <div className="container">
        <PageTitle light="Sobre a" bold="Empresa" />

        <div className="about-page">
          <img src="https://picsum.photos/seed/sobre-empresa/720/520" alt="Equipe do escritório" />
          <div className="about-page__text">
            <p>{lorem}</p>
            <p>{loremLong}</p>
            <p>{about.text[1]}</p>
          </div>
        </div>

        <PageTitle as="h2" light="Certificações" />
        <ul className="certs">
          {certifications.map((c) => (
            <li key={c.id} className="cert">
              <span className="cert__year">{c.year}</span>
              <strong>{c.name}</strong>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
