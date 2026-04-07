import React from 'react'
import { HeaderIntroductionProps } from './HeaderProps'

const BADGES = ['React', 'Node.js', 'TypeScript', 'AWS']

const HeaderIntroduction: React.FC<HeaderIntroductionProps> = ({ introduction }) => {
  return (
    <>
      {introduction && (
        <div className="col-12 md:col-6 flex align-items-center cv-hero">
          <div className="cv-hero__inner w-full">
            <div className="cv-hero__badges">
              {BADGES.map((label, i) => (
                <span
                  key={label}
                  className={i % 2 === 0 ? 'cv-badge' : 'cv-badge cv-badge--alt'}
                >
                  {label}
                </span>
              ))}
            </div>
            <section className="text-center md:text-left">
              <h1 className="cv-hero__name font-display">{introduction.name}</h1>
              <p className="cv-hero__title font-display cv-gradient-text">{introduction.title}</p>
              <p className="cv-hero__headline">{introduction.headLine}</p>
              <div className="cv-hero__actions">
                {introduction.linkButtons?.map((button, index) => (
                  <button
                    key={index}
                    type="button"
                    className={
                      index === 0
                        ? 'cv-link-btn cv-link-btn--primary'
                        : 'cv-link-btn'
                    }
                    onClick={() => window.open(button.href, '_blank')}
                  >
                    <i className={button.icon} aria-hidden />
                    <span>{button.label}</span>
                  </button>
                ))}
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  )
}

export default HeaderIntroduction
