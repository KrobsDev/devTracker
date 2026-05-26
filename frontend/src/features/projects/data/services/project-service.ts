import { APIClient } from "@/config/api-client";
import type { ProjectResponse } from "../../domain/entities/project";

export const fetchProjects = async () => {
    const response = await APIClient.get<ProjectResponse>({ path: '/projects/' });
    console.log({ response });
    return response.data;
};