import Button from '../components/Button.jsx'

export default function NotFound() {
  return (
    <section className="page">
      <div className="container notfound">
        <h1>404</h1>
        <p>A página que você procura não existe.</p>
        <Button to="/" variant="dark">
          Voltar ao início
        </Button>
      </div>
    </section>
  )
}
