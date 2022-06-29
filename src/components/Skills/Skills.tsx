import React from 'react'
import { SkillsProps } from './SkillsProps'
import { Rating } from 'primereact/rating';
import { Icon } from '@Components/Icon';

const Skills: React.FC<SkillsProps> = ({ skills }) => {
    return <>
        <div className="surface-section px-4 py-8 md:px-6 lg:px-8 text-center">
            <div className="mb-3 font-bold text-2xl">
                <span className="text-900">My skills</span>
            </div>
            <div className="text-700 text-sm mb-6">There are the main skills and abilites I had aquired across my career.</div>
            <div className="grid">
                {
                    skills?.map((skill, index) =>
                        <div key={index} className="col-12 md:col-6 lg:col-3">
                            <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
                                <div className="flex justify-content-between mb-3">
                                    <div>
                                        <span className="block text-500 font-medium mb-3">{skill.name}</span>
                                        <div className="text-900 font-medium text-xl">
                                            <Rating value={skill.skillLevel} cancel={false} readOnly={true} />
                                        </div>
                                    </div>
                                    <div className="flex align-items-center text-yellow-500 justify-content-center border-1 border-round border-solid"
                                        style={{ width: '2.5rem', height: '2.5rem' }}>
                                        <Icon iconName={skill.icon} props={{ size: 25 }} />
                                    </div>
                                </div>
                                <span className="text-yellow-500 font-medium mr-2 text-xl">{'' + skill.yearsOfExperience}</span>
                                <span className="text-500">years of experience</span>
                            </div>
                        </div>)
                }
            </div>
        </div>
    </>
}

export default Skills