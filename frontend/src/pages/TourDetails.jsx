import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import BookingCard from "../components/BookingCard";
import TourHighlights from "../components/TourHighlights";
import { fetchTour } from "../services/api";

const TourDetails = () => {
  const { slug } = useParams();
  const [tour, setTour] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchTour(slug);
      setTour(data);
    };

    loadData();
  }, [slug]);

  if (!tour) {
    return <div className="mx-auto max-w-6xl px-6 py-20">Loading tour...</div>;
  }

  return (
    <main className="space-y-10 pb-16">
      <section className="relative h-[420px] w-full overflow-hidden">
        <img src={tour.banner_url} alt={tour.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-slate-900/40" />
        <div className="absolute bottom-10 left-6 right-6 mx-auto max-w-6xl text-white">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-200">Luxury Experience</p>
          <h1 className="mt-4 font-display text-4xl font-semibold">{tour.title}</h1>
          <p className="mt-2 text-sm">⭐ {tour.rating} · {tour.destination}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-3">
              {tour.gallery_urls.map((url) => (
                <img key={url} src={url} alt={tour.title} className="h-32 w-full rounded-2xl object-cover" />
              ))}
            </div>
            <TourHighlights highlights={tour.highlights} duration={tour.duration_days} language={tour.language} />
            <div className="rounded-3xl bg-white p-6 shadow-soft">
              <h2 className="text-xl font-semibold text-slate-800">Tour Description</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{tour.description}</p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-soft">
              <h2 className="text-xl font-semibold text-slate-800">Activity Details</h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {tour.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-ocean-500" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <BookingCard tour={tour} />
            <div className="rounded-3xl bg-white p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-slate-800">Transport & Theme</h3>
              <div className="mt-4 space-y-2 text-sm text-slate-600">
                <p>Transport: {tour.transport_type}</p>
                <p>Theme: {tour.theme}</p>
                <p>Available: {tour.availability_date}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TourDetails;
