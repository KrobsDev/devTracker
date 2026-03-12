from django.db import models
from core.constants import (
    PROJECT_STATUS_CHOICES,
    TASK_TYPE_CHOICES,
    TASK_STATUS_CHOICES,
)
from projects.models import Project


# Create your models here.
class Task(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name="tasks")
    description = models.TextField()
    status = models.CharField(
        max_length=20, choices=TASK_STATUS_CHOICES, default="NOT_STARTED"
    )
    task_type = models.CharField(
        max_length=2,
        choices=TASK_TYPE_CHOICES,
    )
    start_date = models.DateField(null=True, blank=True)
    end_date = models.DateField(null=True, blank=True)
    additional_notes = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "task"
        ordering = ["status", "-created_at"]
