import { z } from "zod"

export const PROJECT_STATUSES = [
  "NOT_STARTED",
  "PENDING",
  "IN_PROGRESS",
  "COMPLETED",
  "CANCELLED",
] as const

export const createProjectSchema = z.object({
  name: z
    .string()
    .min(3, "Project name must be more than 3 characters")
    .max(30, "Project name must not exceed 30 characters"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(200, "Description must be at most 200 characters"),
  status: z.enum(PROJECT_STATUSES),
})

export type ProjectStatus = z.infer<typeof createProjectSchema>["status"]

export type CreateProjectPayload = z.infer<typeof createProjectSchema>
