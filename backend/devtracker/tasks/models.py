from django.db import models
from devtracker.core.constants import PROJECT_STATUS_CHOICES
from projects.models import Project


# Create your models here.
class Task(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    description = models.TextField()
    status = models.CharField(choices=PROJECT_STATUS_CHOICES, default="NOT_STARTED")
    task_type = models.CharField(
        choices=[
            ("FE", "Frontend"),
            ("BE", "Backend"),
            ("UI", "UI/UX"),
            ("DO", "DevOps"),
        ]
    )
    start_date = models.DateField(null=True, blank=True)
    end_date = models.DateField(null=True, blank=True)
    additional_notes = models.TextChoices()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "task"
        ordering = ["-created_at", "status"]
