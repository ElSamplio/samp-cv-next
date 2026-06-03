import React, { useMemo } from 'react'
import { SkillsProps } from './SkillsProps'
import { Rating } from 'primereact/rating'
import { Icon } from '@Components/Icon'
import { CvSection } from '@Components/CvSection'
import { HighlightText } from '@Components/HighlightText'
import { resolveYearsOfExperience } from '@utils/yearsOfExperience'
import { filterSkills, normalizeSearchQuery } from '@utils/cvSearch'

const Skills: React.FC<SkillsProps> = ({
  skills,
  searchQuery = '',
  open,
  onOpenChange,
}) => {
  const normalizedQuery = normalizeSearchQuery(searchQuery)
  const visibleSkills = useMemo(
    () => filterSkills(skills, normalizedQuery),
    [skills, normalizedQuery],
  )
  const count = visibleSkills.length
  const hasSearch = normalizedQuery.length > 0

  return (
    <CvSection
      id="cv-section-skills"
      label="Expertise"
      title="Skills & stack"
      subtitle="Core technologies and depth of experience."
      meta={hasSearch ? `${count} matching` : `${skills?.length ?? 0} skills`}
      defaultOpen={false}
      open={open}
      onOpenChange={onOpenChange}
    >
      {count === 0 ? (
        <p className="cv-search-empty">No skills match &ldquo;{searchQuery.trim()}&rdquo;.</p>
      ) : (
        <div className="grid cv-skills-grid">
          {visibleSkills.map((skill, index) => {
            const years = resolveYearsOfExperience(skill)
            const isMatch = hasSearch

            return (
              <div key={`${skill.name}-${index}`} className="col-12 sm:col-6 lg:col-4 xl:col-3">
                <div className={`cv-skill-card${isMatch ? ' cv-skill-card--match' : ''}`}>
                  <div className="cv-skill-card__top">
                    <div className="cv-skill-card__info">
                      <span className="cv-skill-card__name">
                        <HighlightText text={skill.name} query={searchQuery} />
                      </span>
                      <Rating value={skill.skillLevel} cancel={false} readOnly />
                    </div>
                    <div className="cv-skill-card__icon">
                      <Icon iconName={skill.icon} props={{ size: 20 }} />
                    </div>
                  </div>
                  <div className="cv-skill-card__years-row">
                    <span className="cv-skill-card__years">
                      {years !== null ? years : '—'}
                    </span>
                    <span className="cv-skill-card__years-label">yrs</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </CvSection>
  )
}

export default Skills
