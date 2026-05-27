import { useForm } from "@tanstack/react-form"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  createProjectSchema,
  PROJECT_STATUSES,
  type ProjectStatus,
} from "@/schemas/project-schemas"
import { formatStatusLabel } from "@/lib/utils"
import { useCreateProject } from "@/features/projects/hooks/use-create-project"

interface AddProjectSheetProps {
  open: boolean
  onOpenChange: (value: boolean) => void
}

export default function AddProject({
  open,
  onOpenChange,
}: AddProjectSheetProps) {
  const { mutate: createNewProject, isPending } = useCreateProject()

  const form = useForm({
    defaultValues: {
      name: "",
      description: "",
      status: "NOT_STARTED" as ProjectStatus,
    },
    validators: {
      onSubmit: createProjectSchema,
    },
    onSubmit: async ({ value }) => {
      createNewProject(value, {
        onSuccess: () => {
          form.reset()
          onOpenChange(false)
        },
      })
    },
  })

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add New Project</SheetTitle>
          <SheetDescription>
            Provide the details of the project you wish to add
          </SheetDescription>
        </SheetHeader>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
          className="flex flex-col gap-4 px-4"
        >
          <FieldGroup>
            <form.Field
              name="name"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Project Name</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="Provide the name for the project"
                      autoComplete="off"
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}
            />
            <form.Field
              name="description"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>
                      Project Description
                    </FieldLabel>
                    <Textarea
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="What is this project about"
                      autoComplete="off"
                      rows={10}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}
            />
            <form.Field
              name="status"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Status</FieldLabel>
                    <Select
                      name={field.name}
                      value={field.state.value}
                      onValueChange={(value) =>
                        field.handleChange(value as ProjectStatus)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {PROJECT_STATUSES.map((status) => {
                            return (
                              <SelectItem key={status} value={status}>
                                {formatStatusLabel(status)}
                              </SelectItem>
                            )
                          })}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}
            />
          </FieldGroup>
          <Button type="submit">
            {isPending ? "Creating..." : "Add Project"}
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  )
}
