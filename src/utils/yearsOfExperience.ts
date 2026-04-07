/**
 * Full calendar years from startYear through the current year (e.g. 2018 → 2026 = 8).
 */
export function yearsOfExperienceFromStartYear(startYear: number): number {
  const current = new Date().getFullYear()
  return Math.max(0, current - startYear)
}

export type SkillYearFields = {
  yearsOfExperience?: number | null
  startYear?: number | null
}

/**
 * Prefer fixed `yearsOfExperience` when provided; otherwise compute from `startYear`.
 * Returns `null` if neither can produce a value.
 */
export function resolveYearsOfExperience(skill: SkillYearFields): number | null {
  const fixed = skill.yearsOfExperience
  if (typeof fixed === 'number' && !Number.isNaN(fixed)) {
    return fixed
  }
  const start = skill.startYear
  if (typeof start === 'number' && !Number.isNaN(start)) {
    return yearsOfExperienceFromStartYear(start)
  }
  return null
}
