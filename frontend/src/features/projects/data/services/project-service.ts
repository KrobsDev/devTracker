import { APIClient, type PaginatedResponse } from "@/config/api-client"
import type { Project } from "../../domain/entities/project"
import type { CreateProjectPayload } from "@/schemas/project-schemas"

export const fetchProjects = async () => {
  const response = await APIClient.get<PaginatedResponse<Project>>({
    path: "/projects/",
  })
  return response.data
}

export const createProject = async (payload: CreateProjectPayload) => {
  const response = await APIClient.post<Project>({
    path: "/projects/",
    payload: payload,
  })

  return response.data
}
