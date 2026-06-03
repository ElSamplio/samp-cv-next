import { Project } from '@Models/Project'

export type ProjectsProps = {
  projects: Project[]
  searchQuery?: string
  open?: boolean
  onOpenChange?: (open: boolean) => void
}
