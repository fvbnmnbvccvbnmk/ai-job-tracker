from django.db import models


class Destination(models.Model):
    name = models.CharField(max_length=120)
    country = models.CharField(max_length=120)
    description = models.TextField()
    image_url = models.URLField()

    def __str__(self) -> str:
        return f"{self.name}, {self.country}"
