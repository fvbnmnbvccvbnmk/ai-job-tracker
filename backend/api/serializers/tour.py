from rest_framework import serializers

from api.models import Tour


class TourListSerializer(serializers.ModelSerializer):
    destination = serializers.StringRelatedField()

    class Meta:
        model = Tour
        fields = [
            "id",
            "title",
            "slug",
            "destination",
            "rating",
            "duration_days",
            "transport_type",
            "price",
            "theme",
            "availability_date",
            "image_url",
        ]


class TourDetailSerializer(serializers.ModelSerializer):
    destination = serializers.StringRelatedField()

    class Meta:
        model = Tour
        fields = [
            "id",
            "title",
            "slug",
            "destination",
            "rating",
            "duration_days",
            "transport_type",
            "price",
            "theme",
            "availability_date",
            "image_url",
            "banner_url",
            "gallery_urls",
            "description",
            "highlights",
            "details",
            "language",
        ]
