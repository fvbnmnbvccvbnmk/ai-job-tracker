from django.urls import path

from api.views import BookingListCreateView, DestinationListView, TourDetailView, TourListView

urlpatterns = [
    path("tours/", TourListView.as_view(), name="tour-list"),
    path("tours/<slug:slug>/", TourDetailView.as_view(), name="tour-detail"),
    path("destinations/", DestinationListView.as_view(), name="destination-list"),
    path("bookings/", BookingListCreateView.as_view(), name="booking-list-create"),
]
