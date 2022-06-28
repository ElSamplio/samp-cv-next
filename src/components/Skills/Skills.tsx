import React from 'react'
import { SkillsProps } from './SkillsProps'

const Skills: React.FC<SkillsProps> = ({ skills }) => {
    return <>
        <div className="surface-section px-4 py-8 md:px-6 lg:px-8 text-center">
            <div className="mb-3 font-bold text-2xl">
                <span className="text-900">My skills, </span>
                <span className="text-blue-600">And Abilities</span>
            </div>
            <div className="text-700 text-sm mb-6">There are my main skills and abilites aquired across my career.</div>
            <div className="grid">
                {
                    skills?.map((skill, index) =>
                        <div key={index} className="col-12 md:col-4 mb-4 px-5">
                            <span className="p-3 shadow-2 mb-3 inline-block surface-card" style={{ borderRadius: 10 }}>
                                <i className={`${skill.icon} text-4xl text-blue-500`}></i>
                            </span>
                            <div className="text-900 mb-3 font-medium">{skill.name}</div>
                            <span className="text-700 text-sm line-height-3">{skill.description}</span>
                        </div>)
                }
            </div>
        </div>
    </>
}

export default Skills