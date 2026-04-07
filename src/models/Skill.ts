export type Skill = {
    name: string
    /** When set, shown as-is (can be fractional). If omitted, years are derived from `startYear`. */
    yearsOfExperience?: number
    /** Used only when `yearsOfExperience` is absent: years = current year − startYear. */
    startYear?: number
    icon: string
    skillLevel: number
}