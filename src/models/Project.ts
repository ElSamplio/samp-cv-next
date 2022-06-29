export type Project = {
    company: string
    name: string
    abstract: string
    role: string
    responsibilities: string
    startDate: Date
    endDate: Date | string
    technologies: Technology[]
}

export type Technology = {
    name: string
    icon: string
}