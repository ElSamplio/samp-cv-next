import React from 'react'
import { normalizeSearchQuery } from '@utils/cvSearch'

export interface HighlightTextProps {
  text: string
  query: string
}

const HighlightText: React.FC<HighlightTextProps> = ({ text, query }) => {
  const normalized = normalizeSearchQuery(query)
  if (!normalized) return <>{text}</>

  const lowerText = text.toLowerCase()
  const index = lowerText.indexOf(normalized)
  if (index === -1) return <>{text}</>

  return (
    <>
      {text.slice(0, index)}
      <mark className="cv-search-mark">{text.slice(index, index + normalized.length)}</mark>
      {text.slice(index + normalized.length)}
    </>
  )
}

export default HighlightText
