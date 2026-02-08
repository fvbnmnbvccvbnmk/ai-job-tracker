from rest_framework import generics

from api.models import Tour
from api.serializers import TourDetailSerializer, TourListSerializer


class TourListView(generics.ListAPIView):
    queryset = Tour.objects.select_related("destination").all().order_by("-rating")
    serializer_class = TourListSerializer


class TourDetailView(generics.RetrieveAPIView):
    queryset = Tour.objects.select_related("destination").all()
    serializer_class = TourDetailSerializer
    lookup_field = "slug"
