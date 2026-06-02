/* eslint-disable @next/next/no-img-element */
import React from 'react'
import useFetchData from '../src/customHooks/useFetchData'
import {
  HeaderImage,
  HeaderIntroduction,
  HeaderImageMobile
} from '../src/components/Header'
import { Skills } from '@Components/Skills'
import { Projects } from '@Components/Projects'

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
            <Skills skills={skills} />
            <Projects projects={projects} />
          </div>
        </div>
      )}
    </>
  )
}

export default Index
