import type { ProjectStatus } from "@/types";



export interface Project {
    id: number;
    name: string;
    description: string;
    status: ProjectStatus;
    created_at?: string;
    updated_at?: string;
}

export interface ProjectResponse {
    count: number;
    next: string;
    previous: string;
    results: Project[];
}