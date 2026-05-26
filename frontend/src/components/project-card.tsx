import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Edit2, Trash } from "lucide-react"
import { Badge } from "./ui/badge"
import type { Project } from "@/features/projects/domain/entities/project"
import type { ProjectStatus } from "@/types"
import { cn } from "../lib/utils"
import { Button } from "./ui/button"
import { Progress } from "./ui/progress"

const statusColorMap: Record<ProjectStatus, string> = {
  NOT_STARTED: "bg-gray-500",
  PENDING: "bg-yellow-500 text-yellow-900",
  IN_PROGRESS: "bg-blue-500",
  COMPLETED: "bg-green-500",
  CANCELLED: "bg-red-500",
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="relative w-full">
      <CardHeader className="gap-3">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <CardTitle className="text-xl">{project.name}</CardTitle>
            {/* tags (status, priority) */}
            <Badge className={cn(statusColorMap[project.status], "text-xs")}>
              {project.status}
            </Badge>
          </div>

          <div className="flex items-center gap-2">
            <Button variant={"outline"}>
              <Edit2 />
            </Button>
            <Button variant={"outline"}>
              <Trash />
            </Button>
          </div>
        </div>
      </CardHeader>

      <Card className="mx-4 gap-3 bg-gray-100 p-3 ring-0">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <p>Progress</p>
            <p>80%</p>
          </div>
          <Progress value={40} />
        </div>

        <div className="flex items-center justify-between">
          <p className="text-xs">20/40 tasks completed</p>
        </div>
      </Card>
    </Card>
  )
}
