from rest_framework import generics

from api.models import Booking
from api.serializers import BookingSerializer


class BookingListCreateView(generics.ListCreateAPIView):
    queryset = Booking.objects.select_related("tour").all().order_by("-created_at")
    serializer_class = BookingSerializer
