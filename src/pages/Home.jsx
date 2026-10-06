import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageTitle from '../components/PageTitle.jsx'
import Button from '../components/Button.jsx'
import ContactSection from '../components/ContactSection.jsx'
import SocialLinks from '../components/SocialLinks.jsx'
import { ArrowLeftIcon, ArrowRightIcon } from '../components/Icons.jsx'
import { heroSlides, about, mission, projects } from '../data/projects.js'

export default function Home() {
  const [slide, setSlide] = useState(0)
  const current = heroSlides[slide]
  const go = (step) =>
    setSlide((s) => (s + step + heroSlides.length) % heroSlides.length)

  const tiles = projects.slice(0, 5)

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__content">
            <p className="hero__eyebrow">{current.eyebrow}</p>
            <h1 className="hero__title">{current.title}</h1>

            <div className="hero__controls">
              <button type="button" aria-label="Slide anterior" onClick={() => go(-1)}>
                <ArrowLeftIcon width={14} height={14} />
              </button>
              <button type="button" aria-label="Próximo slide" onClick={() => go(1)}>
                <ArrowRightIcon width={14} height={14} />
              </button>
            </div>

            <div className="hero__social">
              <SocialLinks />
            </div>
          </div>

          <div className="hero__media">
            <img key={current.id} src={current.image} alt={`Projeto ${current.title}`} />
            <div className="hero__cta">
              <Button to={`/projetos/${current.projectId}`} variant="white">
                Ver mais
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Sobre ---------- */}
      <section className="section">
        <div className="container about-box">
          <div className="about-box__images">
            <img src={about.images[0]} alt="Edifício moderno" loading="lazy" />
            <img src={about.images[1]} alt="Detalhe de arquitetura" loading="lazy" />
          </div>
          <div className="about-box__text">
            <PageTitle as="h2" light="Sobre" />
            {about.text.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <Button to="/sobre" variant="white">
              Ler mais
            </Button>
          </div>
        </div>
      </section>

      {/* ---------- Missão ---------- */}
      <section className="section section--tight">
        <div className="container">
          <PageTitle as="h2" light="Missão e Foco Principal" />
          <div className="mission">
            {mission.map((m) => (
              <div key={m.number} className="mission__item">
                <span className="mission__number">{m.number}</span>
                <p>{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Projetos ---------- */}
      <section className="section">
        <div className="container">
          <PageTitle as="h2" light="Nossos Projetos" />
          <div className="tiles">
            {tiles.map((p, i) => (
              <Link
                key={p.id}
                to={`/projetos/${p.id}`}
                className={`tile tile--${i + 1} ${i === 0 ? 'tile--dark' : ''}`}
                aria-label={p.title}
              >
                <img src={p.image} alt={p.title} loading="lazy" />
                {i === 0 && (
                  <span className="tile__label">
                    <strong>{p.light}</strong>
                    <strong>{p.bold}</strong>
                    <small>Ver detalhes</small>
                  </span>
                )}
              </Link>
            ))}
          </div>
          <div className="tiles__action">
            <Button to="/projetos" variant="dark">
              Ver todos os projetos
            </Button>
          </div>
        </div>
      </section>

      {/* ---------- Contato ---------- */}
      <section className="section section--tight">
        <div className="container">
          <PageTitle as="h2" light="Fale Conosco" />
          <ContactSection />
        </div>
      </section>
    </>
  )
}
