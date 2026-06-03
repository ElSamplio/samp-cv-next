import React, { useEffect, useMemo, useState } from 'react'
import { ProjectsProps } from './ProjectsProps'
import { Chip } from 'primereact/chip'
import moment from 'moment'
import { Icon } from '@Components/Icon'
import { CvSection } from '@Components/CvSection'
import { HighlightText } from '@Components/HighlightText'
import { filterProjects, matchesSearch, normalizeSearchQuery } from '@utils/cvSearch'

const Projects: React.FC<ProjectsProps> = ({
  projects,
  searchQuery = '',
  open,
  onOpenChange,
}) => {
  const normalizedQuery = normalizeSearchQuery(searchQuery)
  const hasSearch = normalizedQuery.length > 0

  const visibleProjects = useMemo(
    () => filterProjects(projects, normalizedQuery),
    [projects, normalizedQuery],
  )

  const [expanded, setExpanded] = useState<Set<number>>(() => new Set([0]))

  useEffect(() => {
    if (!hasSearch) {
      setExpanded(new Set([0]))
      return
    }

    setExpanded(new Set(visibleProjects.map((_, index) => index)))
  }, [hasSearch, normalizedQuery, visibleProjects])

  const toggleProject = (index: number) => {
    setExpanded((prev) => {
      const next = new Set(prev)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }

  const count = visibleProjects.length

  return (
    <CvSection
      id="cv-section-projects"
      label="Portfolio"
      title="Projects"
      subtitle="Selected work and products I have contributed to."
      meta={hasSearch ? `${count} matching` : `${projects.length} projects`}
      defaultOpen={false}
      open={open}
      onOpenChange={onOpenChange}
    >
      {count === 0 ? (
        <p className="cv-search-empty">No projects match &ldquo;{searchQuery.trim()}&rdquo;.</p>
      ) : (
        <div className="cv-projects-wrap">
          {visibleProjects.map((project, index) => {
            const isOpen = expanded.has(index)
            const panelId = `project-panel-${index}`

            return (
              <article
                key={`${project.name}-${project.company}-${index}`}
                className={`cv-project-card${isOpen ? ' cv-project-card--open' : ''}${hasSearch ? ' cv-project-card--match' : ''}`}
              >
                <button
                  type="button"
                  className="cv-project-card__toggle"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleProject(index)}
                >
                  <span className="cv-project-card__chevron" aria-hidden>
                    <i className={`pi ${isOpen ? 'pi-chevron-up' : 'pi-chevron-down'}`} />
                  </span>
                  <span className="cv-project-card__summary">
                    <span className="cv-project-card__header">
                      <h3 className="cv-project-card__name font-display">
                        <HighlightText text={project.name} query={searchQuery} />
                      </h3>
                      <span className="cv-project-card__dates">
                        {moment(project.startDate).format('MMM YYYY')}
                        {' — '}
                        {project.endDate
                          ? moment(project.endDate).format('MMM YYYY')
                          : 'Present'}
                      </span>
                    </span>
                    <span className="cv-project-card__preview">
                      <HighlightText text={project.company} query={searchQuery} />
                      {project.role ? (
                        <>
                          {' · '}
                          <HighlightText text={project.role} query={searchQuery} />
                        </>
                      ) : null}
                    </span>
                  </span>
                </button>

                <div id={panelId} className="cv-project-card__body" hidden={!isOpen}>
                  <div className="cv-project-meta">
                    <div className="cv-project-meta__row">
                      <span className="meta-label">Company</span>
                      <span className="meta-value">
                        <HighlightText text={project.company} query={searchQuery} />
                      </span>
                    </div>
                    <div className="cv-project-meta__row">
                      <span className="meta-label">Abstract</span>
                      <span className="meta-value">
                        <HighlightText text={project.abstract} query={searchQuery} />
                      </span>
                    </div>
                    <div className="cv-project-meta__row">
                      <span className="meta-label">Role</span>
                      <span className="meta-value">
                        <HighlightText text={project.role} query={searchQuery} />
                      </span>
                    </div>
                    <div className="cv-project-meta__row">
                      <span className="meta-label">Key Achievements</span>
                      <ul className="meta-value cv-project-meta__list">
                        {project.responsibilities && project.responsibilities instanceof Array
                          ? project.responsibilities.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <HighlightText text={item} query={searchQuery} />
                              </li>
                            ))
                          : <li>project.responsibilities</li>}
                      </ul>
                    </div>
                    <div className="cv-project-meta__row">
                      <span className="meta-label">Technologies</span>
                      <div className="cv-tech-row meta-value">
                        {project.technologies.map((tech, techIndex) => {
                          const techMatches = matchesSearch(tech.name, normalizedQuery)

                          return (
                            <Chip
                              key={techIndex}
                              label={tech.name}
                              className={`cv-chip${techMatches && hasSearch ? ' cv-chip--match' : ''}`}
                              icon={() => <Icon iconName={tech.icon} />}
                            />
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      )}
    </CvSection>
  )
}

export default Projects
