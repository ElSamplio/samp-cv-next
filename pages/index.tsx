/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useMemo, useState } from 'react'
import useFetchData from '../src/customHooks/useFetchData'
import {
  HeaderImage,
  HeaderIntroduction,
  HeaderImageMobile
} from '../src/components/Header'
import { Skills } from '@Components/Skills'
import { Projects } from '@Components/Projects'
import { CvSearch } from '@Components/CvSearch'
import {
  countSearchMatches,
  normalizeSearchQuery,
} from '@utils/cvSearch'

const PageSkeleton: React.FC = () => (
  <div className="cv-page">
    <div className="cv-layout cv-skeleton">
      <div className="cv-skeleton__hero">
        <div>
          <div className="cv-skel cv-skel-line cv-skel-line--lg" style={{ maxWidth: '80%' }} />
          <div className="cv-skel cv-skel-line" style={{ maxWidth: '60%' }} />
          <div className="cv-skel cv-skel-line cv-skel-line--sm" />
          <div className="cv-skel cv-skel-line" style={{ marginTop: '1.5rem' }} />
          <div className="cv-skel cv-skel-line" style={{ maxWidth: '90%' }} />
        </div>
        <div className="cv-skel cv-skel-block" />
      </div>
    </div>
  </div>
)

const Index: React.FC = () => {
  const [
    introduction,
    skills,
    projects,
    loading,
  ] = useFetchData()

  const [searchQuery, setSearchQuery] = useState('')
  const [skillsOpen, setSkillsOpen] = useState(false)
  const [projectsOpen, setProjectsOpen] = useState(false)

  const normalizedQuery = normalizeSearchQuery(searchQuery)
  const hasSearch = normalizedQuery.length > 0

  const matchCount = useMemo(
    () => countSearchMatches(skills, projects, normalizedQuery),
    [skills, projects, normalizedQuery],
  )

  useEffect(() => {
    if (!hasSearch) {
      setSkillsOpen(false)
      setProjectsOpen(false)
      return
    }

    if (matchCount.skills > 0) setSkillsOpen(true)
    if (matchCount.projects > 0) setProjectsOpen(true)
  }, [hasSearch, matchCount.projects, matchCount.skills])

  useEffect(() => {
    if (!hasSearch || matchCount.skills + matchCount.projects === 0) return

    const targetId =
      matchCount.skills > 0 ? 'cv-section-skills' : 'cv-section-projects'

    window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      })
    })
  }, [hasSearch, matchCount.projects, matchCount.skills, normalizedQuery])

  return (
    <>
      {loading ? (
        <PageSkeleton />
      ) : (
        <div className="cv-page">
          <div className="cv-layout">
            <div className="grid grid-nogutter">
              <HeaderImageMobile />
              <HeaderIntroduction introduction={introduction} />
              <HeaderImage />
            </div>

            <CvSearch
              query={searchQuery}
              onQueryChange={setSearchQuery}
              matchCount={matchCount}
            />

            <Skills
              skills={skills}
              searchQuery={searchQuery}
              open={skillsOpen}
              onOpenChange={setSkillsOpen}
            />
            <Projects
              projects={projects}
              searchQuery={searchQuery}
              open={projectsOpen}
              onOpenChange={setProjectsOpen}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Index
