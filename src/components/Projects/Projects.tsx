import React from "react";
import { ProjectsProps } from "./ProjectsProps";
import { Chip } from 'primereact/chip';
import moment from "moment";
import { Icon } from "@Components/Icon";

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
    return <>

        <div className="surface-0">
            <div className="font-medium text-3xl text-900 mb-3 text-center text-yellow-500">Projects Summary</div>
            <div className="text-500 mb-5">These are the projects in which I have participated.</div>
            {
                projects?.map((project, index) => (
                    <div key={index}>
                        <div className="font-medium text-xl text-900 mb-3 text-center text-yellow-500">{project.name}</div>
                        <ul className="list-none p-0 m-0">
                            <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                                <div className="text-500 w-6 md:w-2 font-medium">Company</div>
                                <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{project.company}</div>
                            </li>
                            <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                                <div className="text-500 w-6 md:w-2 font-medium">Abstract</div>
                                <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{project.abstract}</div>
                            </li>
                            <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                                <div className="text-500 w-6 md:w-2 font-medium">Role</div>
                                <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{project.role}</div>
                            </li>
                            <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                                <div className="text-500 w-6 md:w-2 font-medium">Responsibilities</div>
                                <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{project.responsibilities}</div>
                            </li>
                            <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                                <div className="text-500 w-6 md:w-2 font-medium">Technologies</div>
                                <div className="flex align-items-center flex-wrap">
                                    {
                                        project.technologies.map((tech, index) => (
                                            <div key={index} style={{ width: 100 }}>
                                                <Chip label={tech.name} className="mr-2" icon={() => <Icon iconName={tech.icon} />} />
                                            </div>
                                        ))
                                    }
                                </div>
                            </li>
                            <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                                <div className="text-500 w-6 md:w-2 font-medium">Start Date</div>
                                <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{moment(project.startDate).format('MMMM YYYY')}</div>
                            </li>
                            <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                                <div className="text-500 w-6 md:w-2 font-medium">End Date</div>
                                <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{project.endDate ? moment(project.endDate).format('MMMM YYYY') : 'Present'}</div>
                            </li>
                        </ul>
                        <hr className="mb-3 mx-0 border-top-1 border-none surface-border" />
                        <hr className="mb-3 mx-0 border-top-1 border-none surface-border" />
                    </div>
                ))
            }

        </div>

    </>
}

export default Projects