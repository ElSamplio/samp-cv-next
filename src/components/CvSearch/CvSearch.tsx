import React, { useMemo } from 'react'
import { SearchMatchCounts } from '@utils/cvSearch'

const QUICK_FILTERS = ['React', 'Node', 'AWS']

export interface CvSearchProps {
  query: string
  onQueryChange: (query: string) => void
  matchCount: SearchMatchCounts
}

const CvSearch: React.FC<CvSearchProps> = ({
  query,
  onQueryChange,
  matchCount,
}) => {
  const trimmed = query.trim()
  const hasQuery = trimmed.length > 0
  const totalMatches = matchCount.skills + matchCount.projects

  const summary = useMemo(() => {
    if (!hasQuery) return null
    if (totalMatches === 0) return 'No matches — try another keyword'

    const parts: string[] = []
    if (matchCount.skills > 0) {
      parts.push(`${matchCount.skills} skill${matchCount.skills === 1 ? '' : 's'}`)
    }
    if (matchCount.projects > 0) {
      parts.push(`${matchCount.projects} project${matchCount.projects === 1 ? '' : 's'}`)
    }
    return parts.join(' · ')
  }, [hasQuery, matchCount.projects, matchCount.skills, totalMatches])

  return (
    <section className="cv-search" aria-label="Search CV by keyword">
      <div className="cv-search__inner">
        <label className="cv-search__field">
          <span className="cv-search__icon" aria-hidden>
            <i className="pi pi-search" />
          </span>
          <input
            type="search"
            className="cv-search__input"
            placeholder='Search skills & projects — e.g. "React", "AWS", "Node"'
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            aria-describedby={summary ? 'cv-search-summary' : undefined}
          />
          {hasQuery && (
            <button
              type="button"
              className="cv-search__clear"
              aria-label="Clear search"
              onClick={() => onQueryChange('')}
            >
              <i className="pi pi-times" aria-hidden />
            </button>
          )}
        </label>

        {summary && (
          <p
            id="cv-search-summary"
            className={`cv-search__summary${totalMatches === 0 ? ' cv-search__summary--empty' : ''}`}
            role="status"
            aria-live="polite"
          >
            {summary}
          </p>
        )}

        <div className="cv-search__suggestions">
          <span className="cv-search__suggestions-label">Quick filters</span>
          <div className="cv-search__chips">
            {QUICK_FILTERS.map((suggestion) => {
              const active = trimmed.toLowerCase() === suggestion.toLowerCase()
              return (
                <button
                  key={suggestion}
                  type="button"
                  className={`cv-search__chip${active ? ' cv-search__chip--active' : ''}`}
                  aria-pressed={active}
                  onClick={() => onQueryChange(active ? '' : suggestion)}
                >
                  {suggestion}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CvSearch
