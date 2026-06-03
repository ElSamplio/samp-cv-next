import { Skill } from '../../models'

export type SkillsProps = {
  skills: Skill[] | null
  searchQuery?: string
  open?: boolean
  onOpenChange?: (open: boolean) => void
}
