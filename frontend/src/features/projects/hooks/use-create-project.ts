import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createProject } from "../data/services/project-service"
import type { CreateProjectPayload } from "@/schemas/project-schemas"
import { toast } from "sonner"

export function useCreateProject() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (payload: CreateProjectPayload) => createProject(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] })
      toast.success("Project created successfully")
    },
    onError: (error: any) => {
      const message =
        error?.response?.data?.message || "Failed to create project"
      toast.error(message)
    },
  })
}
