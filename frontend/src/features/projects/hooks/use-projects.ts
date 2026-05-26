import { useQuery } from "@tanstack/react-query";
import { fetchProjects } from "../data/services/project-service";

export default function useFetchProject() {
    return useQuery({
        queryKey: ['project-list'],
        queryFn: fetchProjects
    });
};