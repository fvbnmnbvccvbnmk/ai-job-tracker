from rest_framework import serializers

from api.models import Booking


class BookingSerializer(serializers.ModelSerializer):
    tour_title = serializers.CharField(source="tour.title", read_only=True)

    class Meta:
        model = Booking
        fields = ["id", "tour", "tour_title", "full_name", "email", "date", "guests", "created_at"]
        read_only_fields = ["created_at"]
