from rest_framework import viewsets
from .models import Task
from .serializers import TaskSerializer


# Create your views here.
class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    def get_queryset(self):
        project_id = self.request.query_params.get("project")

        if project_id:
            return Task.objects.filter(id=project_id)
        return Task.objects.all()
