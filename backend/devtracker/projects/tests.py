from rest_framework.test import APITestCase
from django.urls import reverse
from .models import Project

# Create your tests here.


class ProjectAPITest(APITestCase):

    def test_create_project(self):
        # prepare the data
        data = {
            "name": "KyoGreen",
            "description": "This is KyoGreen",
            "status": "NOT_STARTED",
        }

        url = reverse("project-list")

        response = self.client.post(url, data)

        self.assertEqual(response.status_code, 201)

    def test_create_task(self):
        project = Project.objects.create(name="KantaConnect")

        data = {
            "project": project.id,
            "description": "Work on WhatsApp integration",
            "task_type": "BE",
        }

        url = reverse("task-list")

        response = self.client.post(url, data)

        self.assertEqual(response.status_code, 201)

    
    
