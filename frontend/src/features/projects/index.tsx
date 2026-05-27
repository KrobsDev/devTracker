import ProjectCard from "@/features/projects/components/project-card"
import { Button } from "@/components/ui/button"
import {
  Activity,
  CheckCircle2,
  Circle,
  Hourglass,
  Loader,
  PlusIcon,
  XCircle,
} from "lucide-react"
import { useState, type ReactNode } from "react"
import AddProject from "./components/add-project"
import { useGetProjects } from "./hooks/use-get-projects"
import { Input } from "@/components/ui/input"
import { Field } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { ProjectStatus } from "@/schemas/project-schemas"

interface FilterItem {
  icon: ReactNode
  title: string
}

const filterList: Record<ProjectStatus, FilterItem> = {
  NOT_STARTED: {
    icon: <Circle />,
    title: "Not Started",
  },
  PENDING: {
    icon: <Hourglass />,
    title: "Pending",
  },
  IN_PROGRESS: {
    icon: <Activity />,
    title: "In Progress",
  },
  COMPLETED: {
    icon: <CheckCircle2 />,
    title: "Completed",
  },
  CANCELLED: {
    icon: <XCircle />,
    title: "Cancelled",
  },
}

export default function Projects() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { data: projects, isLoading } = useGetProjects()
  const handleOpenSheet = () => {
    setIsOpen(true)
  }

  return (
    <div className="w-full pt-6">
      <div className="mb-4">
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-gray-500">
          Organize your entire workflow in one place. Monitor tasks, timelines,
          and milestones as you bring your ideas to life.
        </p>
      </div>

      <Field orientation={"horizontal"} className="mb-5">
        <Input name="search" placeholder="Search projects..." />
        {/* filter btn -- incomplete */}
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(filterList).map(([key, value]) => (
              <SelectItem key={key} value={value.title}>
                {value.icon}
                <p>{value.title}</p>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button onClick={handleOpenSheet} className="w-full md:w-auto">
          <PlusIcon />
          New Project
        </Button>
      </Field>

      {/* tabs */}
      {/* <Tabs defaultValue="active" className="mt-8">
        <div className="flex">
          <TabsList variant={"line"} className="flex-1">
            <TabsTrigger value="active">Active Projects</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="archived">Archived</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent
          value="active"
          className="grid gap-4 pt-4 md:grid-cols-2 xl:grid-cols-3"
        ></TabsContent>
      </Tabs> */}

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {isLoading && <Loader />}

        {projects?.results.length == 0 ? (
          <p>Nothing to see</p>
        ) : (
          projects?.results.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        )}

        <Button
          variant={"secondary"}
          className="hidden h-full flex-col rounded-xl border-4! border-dashed border-gray-300 md:flex"
          onClick={handleOpenSheet}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-50">
            <PlusIcon size={48} />
          </div>
          <h4 className="text-xl">Start New Project</h4>
          <p className="text-gray-600">
            Define your vision, set milestones, <br />
            and track progress.
          </p>
        </Button>
      </div>
      <AddProject open={isOpen} onOpenChange={setIsOpen} />
    </div>
  )
}
