from django.db import models
from devtracker.core.constants import PROJECT_STATUS_CHOICES


# Create your models here.
class Project(models.Model):
    """
    Model describing a project in the system
    """

    name = models.CharField(max_length=50, null=False, blank=False)
    description = models.TextField()
    status = models.CharField(choices=PROJECT_STATUS_CHOICES, default="NOT_STARTED")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "project"
        ordering = ["-created_at"]
