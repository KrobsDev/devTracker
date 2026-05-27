import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Edit2, Trash } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Project } from "@/features/projects/domain/entities/project"
import { cn, formatStatusLabel } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import type { ProjectStatus } from "@/schemas/project-schemas"
import DeleteDialog from "../../../components/delete-dialog"
import { useDeleteProject } from "../hooks/use-delete-project"

const statusColorMap: Record<ProjectStatus, string> = {
  NOT_STARTED: "bg-gray-500",
  PENDING: "bg-yellow-500 text-yellow-900",
  IN_PROGRESS: "bg-blue-500",
  COMPLETED: "bg-green-500",
  CANCELLED: "bg-red-500",
}

export default function ProjectCard({ project }: { project: Project }) {
  const { mutate: deleteProject } = useDeleteProject()
  return (
    <Card className="relative w-full">
      <CardHeader className="gap-3">
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-2">
            {/* tags (status, priority) */}
            <Badge className={cn(statusColorMap[project.status], "text-xs")}>
              {formatStatusLabel(project.status)}
            </Badge>
            <CardTitle className="text-xl">{project.name}</CardTitle>
          </div>

          <div className="flex items-center gap-2">
            <Button variant={"outline"}>
              <Edit2 />
            </Button>
            <DeleteDialog handleDelete={() => deleteProject(project.id)} />
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
