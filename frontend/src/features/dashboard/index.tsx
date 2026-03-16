import ProjectCard from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { PlusIcon } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="w-full pt-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Projects Dashboard</h1>
          <p className="text-gray-500">
            Manage and track your active engineering workflows
          </p>
        </div>
        <Button className="w-full md:w-auto">
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
          className="grid gap-4 pt-4 md:grid-cols-2 xl:grid-cols-4"
        >
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <Button
            variant={"secondary"}
            className="hidden h-full flex-col rounded-xl border-4! border-dashed border-gray-300 md:flex"
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
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </div>
  )
}
