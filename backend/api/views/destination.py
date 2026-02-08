from rest_framework import generics

from api.models import Destination
from api.serializers import DestinationSerializer


class DestinationListView(generics.ListAPIView):
    queryset = Destination.objects.all().order_by("name")
    serializer_class = DestinationSerializer
