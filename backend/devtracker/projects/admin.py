from django.contrib import admin
from .models import Project

# Register your models here.


class ProjectAdmin(admin.ModelAdmin):
    list_display = ["name", "description", "created_at"]
    list_filter = ["name", "created_at"]


admin.site.register(Project, ProjectAdmin)
