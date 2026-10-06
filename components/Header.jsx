import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'
import { navLinks } from '../data/projects.js'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="header">
      <div className="container header__inner">
        <Logo />

        <nav className={`nav ${open ? 'nav--open' : ''}`} aria-label="Navegação principal">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="header__toggle"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
