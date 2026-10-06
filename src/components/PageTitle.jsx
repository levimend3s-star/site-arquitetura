/**
 * Título no estilo do protótipo: palavra leve em cinza + palavra em negrito.
 * Sem `bold`, renderiza uma única linha leve (títulos das seções da Home).
 */
export default function PageTitle({ light, bold, as: Tag = 'h1' }) {
  return (
    <Tag className={`page-title ${bold ? '' : 'page-title--single'}`}>
      {light}
      {bold && <strong>{bold}</strong>}
    </Tag>
  )
}
