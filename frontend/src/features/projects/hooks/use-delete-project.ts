import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteProject } from "../data/services/project-service"
import type { Project } from "../domain/entities/project"
import { toast } from "sonner"
import type { PaginatedResponse } from "@/config/api-client"

export function useDeleteProject() {
  const queryClient = useQueryClient()
  const queryKey = ["projects", "list"]

  return useMutation({
    mutationFn: (projectId: number) => deleteProject(projectId),
    onMutate: async (projectId: number) => {
      await queryClient.cancelQueries({ queryKey })

      const previousProjects =
        queryClient.getQueryData<PaginatedResponse<Project>>(queryKey)

      if (previousProjects) {
        queryClient.setQueryData<PaginatedResponse<Project>>(
          queryKey,
          (oldData) => {
            if (!oldData) return undefined
            return {
              ...oldData,
              count: Math.max(0, oldData.count - 1),
              results: oldData.results.filter(
                (project) => project.id !== projectId
              ),
            }
          }
        )
      }

      return { previousProjects }
    },

    onError: (err, projectId, context) => {
      if (context?.previousProjects) {
        queryClient.setQueryData(queryKey, context.previousProjects)
      }

      toast.error(err.message || `Failed to delete project. Kindly try again.`)
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey })
      toast.success("Project deleted successfully!")
    },
  })
}
