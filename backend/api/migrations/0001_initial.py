from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Destination",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("name", models.CharField(max_length=120)),
                ("country", models.CharField(max_length=120)),
                ("description", models.TextField()),
                ("image_url", models.URLField()),
            ],
        ),
        migrations.CreateModel(
            name="Tour",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("title", models.CharField(max_length=200)),
                ("slug", models.SlugField(unique=True)),
                ("rating", models.DecimalField(decimal_places=1, max_digits=3)),
                ("duration_days", models.PositiveIntegerField()),
                ("transport_type", models.CharField(max_length=120)),
                ("price", models.DecimalField(decimal_places=2, max_digits=8)),
                (
                    "theme",
                    models.CharField(
                        choices=[
                            ("Adventure", "Adventure"),
                            ("Nature", "Nature"),
                            ("City", "City"),
                            ("Water Activities", "Water Activities"),
                        ],
                        max_length=32,
                    ),
                ),
                ("availability_date", models.DateField()),
                ("image_url", models.URLField()),
                ("banner_url", models.URLField()),
                ("gallery_urls", models.JSONField(default=list)),
                ("description", models.TextField()),
                ("highlights", models.JSONField(default=list)),
                ("details", models.JSONField(default=list)),
                ("language", models.CharField(default="English", max_length=80)),
                (
                    "destination",
                    models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name="tours", to="api.destination"),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Booking",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("full_name", models.CharField(max_length=200)),
                ("email", models.EmailField(max_length=254)),
                ("date", models.DateField()),
                ("guests", models.PositiveIntegerField(default=1)),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                (
                    "tour",
                    models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name="bookings", to="api.tour"),
                ),
            ],
        ),
    ]
