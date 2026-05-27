import { useQuery } from "@tanstack/react-query"
import { fetchProjects } from "../data/services/project-service"

export function useGetProjects() {
  return useQuery({
    queryKey: ["projects", "list"],
    queryFn: fetchProjects,
    staleTime: 1000 * 60 * 5,
  })
}
