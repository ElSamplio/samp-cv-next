/* eslint-disable @next/next/no-img-element */
import React from 'react'
import 'primereact/resources/themes/arya-orange/theme.css'
import useFetchData from '../src/customHooks/useFetchData'
import {
  HeaderImage,
  HeaderIntroduction,
  HeaderImageMobile
} from '../src/components/Header'
import { Skills } from '@Components/Skills'
import { ProfileData } from '@Components/ProfileData'
import { Projects } from '@Components/Projects'

const Index: React.FC = () => {
  const [
    introduction,
    skills,
    projects,
    loading,
  ] = useFetchData()

  return <>
    {
      loading ?
        <i className="pi pi-spin pi-spinner" style={{ fontSize: '3em' }}></i>
        :
        <div>
          <div className='grid grid-nogutter surface-0 text-800'>
            <HeaderImageMobile />
            <HeaderIntroduction introduction={introduction} />
            <HeaderImage />
          </div>
          <ProfileData personalData={introduction?.personalData} />
          <Skills skills={skills} />
          <Projects projects={projects} />
        </div>
    }
  </>
}

export default Index