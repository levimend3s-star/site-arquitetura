import { Link } from 'react-router-dom'

export default function Logo({ light = false }) {
  return (
    <Link
      to="/"
      className={`logo ${light ? 'logo--light' : ''}`}
      aria-label="Digital Project — página inicial"
    >
      <svg className="logo__mark" viewBox="0 0 30 34" aria-hidden="true">
        <rect x="2" y="3" width="3.2" height="26" fill="currentColor" />
        <rect x="8" y="3" width="3.2" height="26" fill="currentColor" />
        <path d="M14 30 L20.5 3 L27 30" fill="none" stroke="currentColor" strokeWidth="3" />
        <line x1="16" y1="21" x2="25" y2="21" stroke="currentColor" strokeWidth="2.4" />
      </svg>
      <span className="logo__text">Digital Project</span>
    </Link>
  )
}
