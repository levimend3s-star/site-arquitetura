import PageTitle from '../components/PageTitle.jsx'
import ContactSection from '../components/ContactSection.jsx'
import { PinIcon, PhoneIcon, MailIcon } from '../components/Icons.jsx'
import { company } from '../data/projects.js'

export default function Contato() {
  return (
    <section className="page">
      <div className="container">
        <PageTitle light="Entre em" bold="Contato" />

        <ul className="contact-info">
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

        <ContactSection />
      </div>
    </section>
  )
}
