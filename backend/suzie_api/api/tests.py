from django.test import TestCase
from rest_framework.test import APIClient

from api.models import Drawings, Books


class SchoolSummaryViewTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.drawing = Drawings.objects.create(
            subject="Sun",
            school="Test Elementary",
            grade="2nd Grade",
            created_by="Sam",
            is_active=True,
            ai_creative_url="https://example.com/ai/1.png",
        )
        self.book = Books.objects.create(name="Test Book 2026", is_published=True)
        self.book.drawings.add(self.drawing)

    def test_missing_school_param_is_400(self):
        response = self.client.get("/api/school_summary/")
        self.assertEqual(response.status_code, 400)

    def test_unknown_school_returns_empty(self):
        response = self.client.get("/api/school_summary/", {"school": "nope"})
        self.assertEqual(response.status_code, 200)
        self.assertIsNone(response.json()["school"])
        self.assertEqual(response.json()["classes"], [])

    def test_summary_groups_by_grade_and_year(self):
        response = self.client.get("/api/school_summary/", {"school": "test-elementary"})
        self.assertEqual(response.status_code, 200)
        body = response.json()
        self.assertEqual(body["school"], "Test Elementary")
        self.assertEqual(len(body["classes"]), 1)
        grade = body["classes"][0]
        self.assertEqual(grade["grade"], "2nd Grade")
        self.assertEqual(len(grade["years"]), 1)
        year = grade["years"][0]
        self.assertEqual(year["drawing_count"], 1)
        self.assertEqual(year["books"][0]["name"], "Test Book 2026")

    def test_classroom_detail_returns_drawings(self):
        from django.utils import timezone

        year = timezone.now().year
        response = self.client.get(
            "/api/school_summary/",
            {"school": "test-elementary", "grade": "2nd-grade", "year": str(year)},
        )
        self.assertEqual(response.status_code, 200)
        body = response.json()
        self.assertEqual(body["school"], "Test Elementary")
        self.assertEqual(body["grade"], "2nd Grade")
        self.assertEqual(body["year"], year)
        self.assertEqual(body["drawing_count"], 1)
        self.assertEqual(body["drawings"][0]["subject"], "Sun")
        self.assertEqual(len(body["books"]), 1)

    def test_inactive_drawings_are_excluded(self):
        self.drawing.is_active = False
        self.drawing.save()
        response = self.client.get("/api/school_summary/", {"school": "test-elementary"})
        self.assertEqual(response.json()["classes"], [])
