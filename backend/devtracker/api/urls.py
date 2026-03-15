from django.urls import path, include
from rest_framework.routers import DefaultRouter
from tasks.views import TaskViewSet
from projects.views import ProjectViewSet

router = DefaultRouter()
router.register(r"projects", ProjectViewSet, basename="project")
router.register(r"tasks", TaskViewSet, basename="task")

urlpatterns = [path("", include(router.urls))]
