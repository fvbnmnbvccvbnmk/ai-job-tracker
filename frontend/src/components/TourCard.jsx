import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const TourCard = ({ tour }) => {
  return (
    <motion.div whileHover={{ y: -6 }} className="rounded-3xl bg-white shadow-soft overflow-hidden">
      <img src={tour.image_url} alt={tour.title} className="h-48 w-full object-cover" />
      <div className="p-6">
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>{tour.duration_days} Days</span>
          <span>{tour.transport_type}</span>
        </div>
        <h3 className="mt-3 text-lg font-semibold text-slate-800">{tour.title}</h3>
        <p className="mt-2 text-sm text-slate-500">{tour.destination}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-slate-600">⭐ {tour.rating}</span>
          <span className="text-lg font-semibold text-ocean-700">${tour.price}</span>
        </div>
        <Link
          to={`/tours/${tour.slug}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ocean-600"
        >
          View Details →
        </Link>
      </div>
    </motion.div>
  );
};

export default TourCard;
