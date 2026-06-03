import React from "react";
import { ProjectsProps } from "./ProjectsProps";
import { Chip } from 'primereact/chip';
import moment from "moment";
import { Icon } from "@Components/Icon";

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
    return (
        <div className="cv-section surface-0">
            <div className="cv-section__head">
                <span className="cv-section__label">Portfolio</span>
                <h2 className="cv-section__title font-display">Projects</h2>
                <p className="cv-section__sub">
                    Selected work and products I have contributed to.
                </p>
            </div>
            <div className="cv-projects-wrap">
                {
                    projects?.map((project, index) => (
                        <article key={index} className="cv-project-card">
                            <div className="cv-project-card__header">
                                <h3 className="cv-project-card__name font-display">{project.name}</h3>
                                <span className="cv-project-card__dates">
                                    {moment(project.startDate).format('MMM YYYY')}
                                    {' — '}
                                    {project.endDate ? moment(project.endDate).format('MMM YYYY') : 'Present'}
                                </span>
                            </div>
                            <div className="cv-project-meta">
                                <div className="cv-project-meta__row">
                                    <span className="meta-label">Company</span>
                                    <span className="meta-value">{project.company}</span>
                                </div>
                                <div className="cv-project-meta__row">
                                    <span className="meta-label">Abstract</span>
                                    <span className="meta-value">{project.abstract}</span>
                                </div>
                                <div className="cv-project-meta__row">
                                    <span className="meta-label">Role</span>
                                    <span className="meta-value">{project.role}</span>
                                </div>
                                <div className="cv-project-meta__row">
                                    <span className="meta-label">Key Achievements</span>
                                    <ul className="meta-value cv-project-meta__list">
                                        {(project.responsibilities && project.responsibilities instanceof Array) ? 
                                        project.responsibilities.map((item, itemIndex) => (
                                            <li key={itemIndex}>{item}</li>
                                        )) : <li>project.responsibilities</li>}
                                    </ul>
                                </div>
                                <div className="cv-project-meta__row">
                                    <span className="meta-label">Technologies</span>
                                    <div className="cv-tech-row meta-value">
                                        {
                                            project.technologies.map((tech, techIndex) => (
                                                <Chip
                                                    key={techIndex}
                                                    label={tech.name}
                                                    className="cv-chip mr-2 mb-2"
                                                    icon={() => <Icon iconName={tech.icon} />}
                                                />
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects
