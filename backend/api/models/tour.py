from django.db import models

from .destination import Destination


class Tour(models.Model):
    THEME_CHOICES = [
        ("Adventure", "Adventure"),
        ("Nature", "Nature"),
        ("City", "City"),
        ("Water Activities", "Water Activities"),
    ]

    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    destination = models.ForeignKey(Destination, related_name="tours", on_delete=models.CASCADE)
    rating = models.DecimalField(max_digits=3, decimal_places=1)
    duration_days = models.PositiveIntegerField()
    transport_type = models.CharField(max_length=120)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    theme = models.CharField(max_length=32, choices=THEME_CHOICES)
    availability_date = models.DateField()
    image_url = models.URLField()
    banner_url = models.URLField()
    gallery_urls = models.JSONField(default=list)
    description = models.TextField()
    highlights = models.JSONField(default=list)
    details = models.JSONField(default=list)
    language = models.CharField(max_length=80, default="English")

    def __str__(self) -> str:
        return self.title
