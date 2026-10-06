import { ArrowLeftIcon, ArrowRightIcon } from './Icons.jsx'

const pad = (n) => String(n).padStart(2, '0')

export default function Pagination({ page, totalPages, onChange }) {
  return (
    <nav className="pagination" aria-label="Paginação">
      <div className="pagination__count">
        <span className="pagination__current">{pad(page)}</span>
        <span className="pagination__slash" aria-hidden="true" />
        <span className="pagination__total">{pad(totalPages)}</span>
      </div>

      <div className="pagination__buttons">
        <button
          type="button"
          aria-label="Página anterior"
          disabled={page <= 1}
          onClick={() => onChange(page - 1)}
        >
          <ArrowLeftIcon />
        </button>
        <button
          type="button"
          aria-label="Próxima página"
          disabled={page >= totalPages}
          onClick={() => onChange(page + 1)}
        >
          <ArrowRightIcon />
        </button>
      </div>
    </nav>
  )
}
