/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Button } from 'primereact/button'
import 'primereact/resources/themes/arya-orange/theme.css'
const baseUrl = process.env.API_URL || 'https://samp-cv-api-nest.vercel.app/'

const Index: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    axios.get('https://samp-cv-api-nest.vercel.app/').then(response => {
      const { data } = response;
      const apiMessage = data?.message
      setMessage(apiMessage)
    })
  }, [])

  return <>
    <div className='grid grid-nogutter surface-0 text-800'>
      <div className='col-12 md:col-6 overflow-hidden topMainImage'>
        <img src='https://i.ibb.co/2gRjZdS/SAMP-Profile.jpg'
          alt='hero-1' width='50%' style={{ borderRadius: '50%' }}/>
      </div>
      <div className='col-12 md:col-6 p-6 text-center md:text-left flex align-items-center '>
        <section id='titleBlock'>
          <span className='block text-6xl font-bold mb-1'>Sergio Andrés Martínez Palacios</span>
          <div className='text-6xl text-primary font-bold mb-3'>Fullstack NodeJS | React developer</div>
          <p className='mt-0 mb-4 text-700 line-height-3'>{message}</p>
          <Button icon='pi pi-linkedin' label='LinkedIn' type='button' className='mr-3 p-button-raised'
            onClick={() => window.open(
              'https://www.linkedin.com/in/sergioandresmartinezpalacios/',
              '_blank'
            )} />
          <Button icon='pi pi-github' label='GitHub' type='button' className='p-button-outlined'
            onClick={() => window.open(
              'https://github.com/ElSamplio',
              '_blank'
            )} />
        </section>
      </div>
      <div className='col-12 md:col-6 overflow-hidden rightMainImage'>
        <img src='https://i.ibb.co/2gRjZdS/SAMP-Profile.jpg'
          alt='Sergio Andrés Martínez' className='md:ml-auto block md:h-full'
          style={{ clipPath: 'polygon(15% 0, 100% 0%, 100% 100%, 0 100%)' }} />
      </div>
    </div>
  </>
}

export default Index