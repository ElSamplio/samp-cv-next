/* eslint-disable @next/next/no-img-element */
import React from 'react'

const HeaderImageMobile: React.FC = () => {
  return (
    <div className="col-12 cv-hero-photo cv-hero-photo--mobile cv-hero-photo--mobile-only">
      <div className="cv-hero-photo__frame">
        <img
          src="https://i.ibb.co/2gRjZdS/SAMP-Profile.jpg"
          alt="Sergio Andrés Martínez"
        />
      </div>
    </div>
  )
}

export default HeaderImageMobile
