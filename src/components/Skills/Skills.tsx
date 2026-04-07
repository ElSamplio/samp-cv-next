import React from 'react'
import { SkillsProps } from './SkillsProps'
import { Rating } from 'primereact/rating';
import { Icon } from '@Components/Icon';
import { resolveYearsOfExperience } from '@utils/yearsOfExperience'

const Skills: React.FC<SkillsProps> = ({ skills }) => {
    return (
        <div className="cv-section surface-section">
            <div className="cv-section__head">
                <span className="cv-section__label">Expertise</span>
                <h2 className="cv-section__title font-display">Skills &amp; stack</h2>
                <p className="cv-section__sub">
                    Core technologies and depth of experience across my career.
                </p>
            </div>
            <div className="grid cv-skills-grid">
                {
                    skills?.map((skill, index) => {
                        const years = resolveYearsOfExperience(skill)
                        return (
                        <div key={index} className="col-12 md:col-6 lg:col-3">
                            <div className="cv-skill-card">
                                <div className="cv-skill-card__top">
                                    <div>
                                        <span className="cv-skill-card__name">{skill.name}</span>
                                        <div className="text-900 font-medium text-xl">
                                            <Rating value={skill.skillLevel} cancel={false} readOnly={true} />
                                        </div>
                                    </div>
                                    <div className="cv-skill-card__icon">
                                        <Icon iconName={skill.icon} props={{ size: 25 }} />
                                    </div>
                                </div>
                                <div>
                                    <span className="cv-skill-card__years mr-2">
                                        {years !== null ? years : '—'}
                                    </span>
                                    <span className="cv-skill-card__years-label">years of experience</span>
                                </div>
                            </div>
                        </div>)
                    })
                }
            </div>
        </div>
    )
}

export default Skills
