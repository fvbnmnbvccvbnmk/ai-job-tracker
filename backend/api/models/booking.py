from django.db import models

from .tour import Tour


class Booking(models.Model):
    tour = models.ForeignKey(Tour, related_name="bookings", on_delete=models.CASCADE)
    full_name = models.CharField(max_length=200)
    email = models.EmailField()
    date = models.DateField()
    guests = models.PositiveIntegerField(default=1)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return f"{self.full_name} - {self.tour.title}"
