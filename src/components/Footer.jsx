import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import SocialLinks from './SocialLinks.jsx'
import { PinIcon, PhoneIcon, MailIcon } from './Icons.jsx'
import { company, navLinks } from '../data/projects.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo light />
        </div>

        <div>
          <h4 className="footer__title">Informações</h4>
          <ul className="footer__list">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="footer__title">Contatos</h4>
          <ul className="footer__contacts">
            <li>
              <PinIcon />
              <span>
                {company.address[0]}
                <br />
                {company.address[1]}
              </span>
            </li>
            <li>
              <PhoneIcon />
              <span>{company.phone}</span>
            </li>
            <li>
              <MailIcon />
              <span>{company.email}</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="footer__title">Redes sociais</h4>
          <SocialLinks />
        </div>
      </div>

      <div className="footer__bottom">
        © {new Date().getFullYear()} Digital Project. Todos os direitos reservados.
      </div>
    </footer>
  )
}
