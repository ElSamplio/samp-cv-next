export type Project = {
    name: string
    abstract: string
    role: string
    responsibilities: string
    imageUrl: string
    startDate: Date
    endDate: Date
    technologies: Technology[]
}

export type Technology = {
    name: string
    icon: string
}