import { Link } from 'react-router-dom'
import { ArrowRightIcon } from './Icons.jsx'

/**
 * Botão do protótipo: texto em caixa alta com seta.
 * variant: 'dark' (fundo escuro) | 'white' (fundo branco) | 'outline'
 */
export default function Button({
  to,
  children,
  variant = 'dark',
  type = 'button',
  onClick,
  arrow = true,
}) {
  const className = `btn btn--${variant}`
  const content = (
    <>
      <span>{children}</span>
      {arrow && <ArrowRightIcon width={14} height={14} />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={className}>
        {content}
      </Link>
    )
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {content}
    </button>
  )
}
