import React, { useId, useState } from 'react'

export interface CvSectionProps {
  id?: string
  label?: string
  title: string
  subtitle?: string
  meta?: string
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}

const CvSection: React.FC<CvSectionProps> = ({
  id,
  label,
  title,
  subtitle,
  meta,
  defaultOpen = false,
  open,
  onOpenChange,
  children,
}) => {
  const [internalOpen, setInternalOpen] = useState(defaultOpen)
  const panelId = useId()
  const isControlled = open !== undefined
  const isOpen = isControlled ? open : internalOpen

  const setOpenState = (next: boolean) => {
    if (!isControlled) {
      setInternalOpen(next)
    }
    onOpenChange?.(next)
  }

  return (
    <section
      id={id}
      className={`cv-section cv-section--collapsible${isOpen ? ' cv-section--open' : ''}`}
    >
      <button
        type="button"
        className="cv-section__toggle"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setOpenState(!isOpen)}
      >
        <span className="cv-section__toggle-main">
          {label && <span className="cv-section__label">{label}</span>}
          <span className="cv-section__toggle-row">
            <h2 className="cv-section__title font-display">{title}</h2>
            {meta && <span className="cv-section__meta">{meta}</span>}
          </span>
          {subtitle && <span className="cv-section__sub">{subtitle}</span>}
        </span>
        <span className="cv-section__chevron" aria-hidden>
          <i className={`pi ${isOpen ? 'pi-chevron-up' : 'pi-chevron-down'}`} />
        </span>
      </button>
      <div id={panelId} className="cv-section__panel" hidden={!isOpen}>
        {children}
      </div>
    </section>
  )
}

export default CvSection
