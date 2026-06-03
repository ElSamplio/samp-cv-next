import { Project } from '@Models/Project'
import { Skill } from '@Models/Skill'

export function normalizeSearchQuery(query: string): string {
  return query.trim().toLowerCase()
}

export function matchesSearch(text: string | undefined | null, query: string): boolean {
  if (!query) return true
  if (!text) return false
  return text.toLowerCase().includes(query)
}

export function projectMatchesQuery(project: Project, query: string): boolean {
  if (!query) return true

  const fields = [
    project.name,
    project.company,
    project.abstract,
    project.role,
    ...(project.responsibilities ?? []),
    ...project.technologies.map((tech) => tech.name),
  ]

  return fields.some((field) => matchesSearch(field, query))
}

export function skillMatchesQuery(skill: Skill, query: string): boolean {
  if (!query) return true
  return matchesSearch(skill.name, query)
}

export function filterSkills(skills: Skill[] | null, query: string): Skill[] {
  if (!skills) return []
  const normalized = normalizeSearchQuery(query)
  if (!normalized) return skills
  return skills.filter((skill) => skillMatchesQuery(skill, normalized))
}

export function filterProjects(projects: Project[], query: string): Project[] {
  const normalized = normalizeSearchQuery(query)
  if (!normalized) return projects
  return projects.filter((project) => projectMatchesQuery(project, normalized))
}

export type SearchMatchCounts = {
  skills: number
  projects: number
}

export function countSearchMatches(
  skills: Skill[] | null,
  projects: Project[],
  query: string,
): SearchMatchCounts {
  const normalized = normalizeSearchQuery(query)
  if (!normalized) {
    return {
      skills: skills?.length ?? 0,
      projects: projects.length,
    }
  }

  return {
    skills: filterSkills(skills, normalized).length,
    projects: filterProjects(projects, normalized).length,
  }
}
