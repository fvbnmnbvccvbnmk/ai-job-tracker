import { motion } from "framer-motion";

const DestinationGrid = ({ tours = [] }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {tours.map((tour) => (
        <motion.div
          key={tour.id}
          whileHover={{ y: -6 }}
          className="group relative overflow-hidden rounded-3xl bg-white shadow-soft"
        >
          <img src={tour.image_url} alt={tour.title} className="h-60 w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-200">Featured Destination</p>
            <h3 className="mt-2 text-xl font-semibold">{tour.title}</h3>
            <p className="text-sm text-slate-100">{tour.destination}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default DestinationGrid;
