import { useState } from 'react'
import Button from './Button.jsx'

const initial = { nome: '', email: '', telefone: '', mensagem: '' }

export default function ContactSection() {
  const [form, setForm] = useState(initial)
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setSent(false)
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm(initial)
  }

  return (
    <div className="contact-section">
      <form className="form" onSubmit={handleSubmit}>
        <input
          name="nome"
          placeholder="Nome"
          aria-label="Nome"
          value={form.nome}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          aria-label="E-mail"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="telefone"
          placeholder="Telefone"
          aria-label="Telefone"
          value={form.telefone}
          onChange={handleChange}
        />
        <textarea
          name="mensagem"
          rows="6"
          placeholder="Mensagem"
          aria-label="Mensagem"
          value={form.mensagem}
          onChange={handleChange}
          required
        />
        <div>
          <Button type="submit" variant="dark">
            Enviar e-mail
          </Button>
        </div>
        {sent && (
          <p className="form__success" role="status">
            Mensagem enviada! Entraremos em contato em breve.
          </p>
        )}
      </form>

      <div className="contact-section__media">
        <img
          src="https://picsum.photos/seed/contato-telefone/760/560"
          alt="Pessoa falando ao telefone"
          loading="lazy"
        />
      </div>
    </div>
  )
}
