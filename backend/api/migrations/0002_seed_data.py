from django.db import migrations
from django.utils import timezone


def seed_data(apps, schema_editor):
    Destination = apps.get_model("api", "Destination")
    Tour = apps.get_model("api", "Tour")

    destinations = [
        {
            "name": "New York",
            "country": "USA",
            "description": "Skyline glamour, Broadway nights, and curated city escapes.",
            "image_url": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
        },
        {
            "name": "Alaska",
            "country": "USA",
            "description": "Glacier cruises, wildlife encounters, and pristine wilderness luxury.",
            "image_url": "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        },
        {
            "name": "Dubai",
            "country": "UAE",
            "description": "Skyline cruises, desert glam, and five-star experiences.",
            "image_url": "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb",
        },
        {
            "name": "London",
            "country": "United Kingdom",
            "description": "Royal landmarks, boutique shopping, and refined afternoon teas.",
            "image_url": "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
        },
        {
            "name": "Tokyo",
            "country": "Japan",
            "description": "Neon elegance, culinary artistry, and cultural sophistication.",
            "image_url": "https://images.unsplash.com/photo-1504788363733-507549153474",
        },
        {
            "name": "Bali",
            "country": "Indonesia",
            "description": "Private villas, turquoise waters, and wellness sanctuaries.",
            "image_url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        },
    ]

    created_destinations = [Destination.objects.create(**item) for item in destinations]

    tours = [
        {
            "title": "Manhattan Skyline Experience",
            "slug": "manhattan-skyline-experience",
            "destination": created_destinations[0],
            "rating": 4.8,
            "duration_days": 3,
            "transport_type": "Private Chauffeur",
            "price": 1490.00,
            "theme": "City",
            "availability_date": timezone.now().date(),
            "image_url": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
            "banner_url": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
            "gallery_urls": [
                "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
                "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
                "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
            ],
            "description": "A curated city itinerary with skyline cruises, Broadway access, and elite dining.",
            "highlights": ["Free cancellation", "Mobile ticket", "Instant confirmation", "3 days"],
            "details": [
                "VIP Broadway lounge access",
                "Private skyline helicopter tour",
                "Luxury hotel transfers",
            ],
            "language": "English",
        },
        {
            "title": "Alaska Glacier Signature",
            "slug": "alaska-glacier-signature",
            "destination": created_destinations[1],
            "rating": 4.9,
            "duration_days": 6,
            "transport_type": "Luxury Cruise",
            "price": 2590.00,
            "theme": "Nature",
            "availability_date": timezone.now().date(),
            "image_url": "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
            "banner_url": "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
            "gallery_urls": [
                "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
                "https://images.unsplash.com/photo-1489515217757-5fd1be406fef",
                "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            ],
            "description": "Sail past glaciers with private balconies, wildlife experts, and spa rituals.",
            "highlights": ["Free cancellation", "Mobile ticket", "Instant confirmation", "6 days"],
            "details": ["Glacier expedition", "Wildlife photography tour", "Chef-led tasting"],
            "language": "English",
        },
        {
            "title": "Dubai Skyline & Desert Luxe",
            "slug": "dubai-skyline-desert-luxe",
            "destination": created_destinations[2],
            "rating": 4.7,
            "duration_days": 4,
            "transport_type": "Luxury SUV",
            "price": 1590.00,
            "theme": "City",
            "availability_date": timezone.now().date(),
            "image_url": "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb",
            "banner_url": "https://images.unsplash.com/photo-1493558103817-58b2924bce98",
            "gallery_urls": [
                "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb",
                "https://images.unsplash.com/photo-1489515217757-5fd1be406fef",
                "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
            ],
            "description": "A seamless blend of couture shopping, rooftop dining, and desert adventure.",
            "highlights": ["Free cancellation", "Mobile ticket", "Instant confirmation", "4 days"],
            "details": ["Skyline helicopter ride", "Private desert safari", "Gold souk styling"],
            "language": "English",
        },
        {
            "title": "London Royal Indulgence",
            "slug": "london-royal-indulgence",
            "destination": created_destinations[3],
            "rating": 4.8,
            "duration_days": 5,
            "transport_type": "Executive Sedan",
            "price": 1890.00,
            "theme": "City",
            "availability_date": timezone.now().date(),
            "image_url": "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
            "banner_url": "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
            "gallery_urls": [
                "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
                "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
                "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
            ],
            "description": "Private royal tours, bespoke shopping, and celebrated culinary experiences.",
            "highlights": ["Free cancellation", "Mobile ticket", "Instant confirmation", "5 days"],
            "details": ["Private palace visit", "Curated fashion walk", "Thames sunset cruise"],
            "language": "English",
        },
        {
            "title": "Tokyo Neon & Zen",
            "slug": "tokyo-neon-zen",
            "destination": created_destinations[4],
            "rating": 4.9,
            "duration_days": 6,
            "transport_type": "Private Driver",
            "price": 2090.00,
            "theme": "City",
            "availability_date": timezone.now().date(),
            "image_url": "https://images.unsplash.com/photo-1504788363733-507549153474",
            "banner_url": "https://images.unsplash.com/photo-1504788363733-507549153474",
            "gallery_urls": [
                "https://images.unsplash.com/photo-1504788363733-507549153474",
                "https://images.unsplash.com/photo-1493558103817-58b2924bce98",
                "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
            ],
            "description": "From neon-lit districts to serene gardens, enjoy bespoke cultural immersion.",
            "highlights": ["Free cancellation", "Mobile ticket", "Instant confirmation", "6 days"],
            "details": ["Private sushi masterclass", "Zen garden meditation", "Luxury shopping tour"],
            "language": "English",
        },
        {
            "title": "Bali Ocean Retreat",
            "slug": "bali-ocean-retreat",
            "destination": created_destinations[5],
            "rating": 4.9,
            "duration_days": 7,
            "transport_type": "Private Transfer",
            "price": 1899.00,
            "theme": "Water Activities",
            "availability_date": timezone.now().date(),
            "image_url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            "banner_url": "https://images.unsplash.com/photo-1493558103817-58b2924bce98",
            "gallery_urls": [
                "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
                "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
                "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
            ],
            "description": "Indulge in a curated stay with beachfront villas, spa rituals, and island-hopping adventures.",
            "highlights": ["Free cancellation", "Mobile ticket", "Instant confirmation", "7 days"],
            "details": [
                "Private speedboat to Nusa Penida",
                "Sunrise yoga and wellness spa",
                "Seafood tasting under the stars",
            ],
            "language": "English",
        },
    ]

    for tour in tours:
        Tour.objects.create(**tour)


class Migration(migrations.Migration):
    dependencies = [("api", "0001_initial")]

    operations = [migrations.RunPython(seed_data, migrations.RunPython.noop)]
