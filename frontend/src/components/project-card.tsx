import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "./ui/progress"
import { Separator } from "./ui/separator"
import { ListTodoIcon } from "lucide-react"
import { Badge } from "./ui/badge"

export default function ProjectCard() {
  return (
    <Card className="relative mx-auto w-full pt-0 transition-[scale] hover:scale-[98%]">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src="https://avatar.vercel.sh/shadcn1"
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardTitle>Design systems meetup</CardTitle>
        <CardDescription>
          A practical talk on component APIs, accessibility, and shipping
          faster.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <p>Completion</p>
            <p>90%</p>
          </div>
          <Progress value={90} />
        </div>
      </CardContent>
      <Separator />
      <CardFooter className="justify-between">
        <div className="flex items-center gap-2 text-gray-500">
          <ListTodoIcon />
          12 Active Tasks
        </div>

        <Badge variant={"destructive"}>High Priority</Badge>
      </CardFooter>
    </Card>
  )
}
