import { SOURCE_LABELS, SOURCE_STYLES } from '../data/source-meta'

export default function SourceBadge({ passage, className = '' }) {
  const type = passage?.sourceType
  if (!type) return null
  return (
    <span
      className={`tag ${SOURCE_STYLES[type]} ${className}`}
      title={passage.note || SOURCE_LABELS[type]}
    >
      {SOURCE_LABELS[type]}
    </span>
  )
}
