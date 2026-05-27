import type { ProjectStatus } from "@/schemas/project-schemas"

export interface Project {
  id: number
  name: string
  description: string
  status: ProjectStatus
  created_at?: string
  updated_at?: string
}
