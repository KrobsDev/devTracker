import ProjectCard from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Loader, PlusIcon } from "lucide-react"
import { useState } from "react"
import AddProject from "./components/add-project"
import useFetchProject from "./hooks/use-projects"

export default function Projects() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { data: projects, isLoading } = useFetchProject()
  const handleOpenSheet = () => {
    setIsOpen(true)
  }

  return (
    <div className="w-full pt-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Projects</h1>
          <p className="text-gray-500">
            Organize your entire workflow in one place. Monitor tasks,
            timelines, and milestones as you bring your ideas to life.
          </p>
        </div>
        <Button onClick={handleOpenSheet} className="w-full md:w-auto">
          <PlusIcon />
          New Project
        </Button>
      </div>

      {/* tabs */}
      <Tabs defaultValue="active" className="mt-8">
        <TabsList variant={"line"}>
          <TabsTrigger value="active">Active Projects</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="archived">Archived</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
        </TabsList>
        <TabsContent
          value="active"
          className="grid gap-4 pt-4 md:grid-cols-2 xl:grid-cols-3"
        >
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
        </TabsContent>
      </Tabs>

      <AddProject open={isOpen} onOpenChange={setIsOpen} />
    </div>
  )
}
