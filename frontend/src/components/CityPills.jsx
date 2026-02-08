import { motion } from "framer-motion";

const CityPills = ({ destinations = [] }) => {
  return (
    <div className="flex flex-wrap gap-3">
      {destinations.map((city) => (
        <motion.span
          whileHover={{ y: -4 }}
          key={city.id}
          className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm"
        >
          {city.name}
        </motion.span>
      ))}
    </div>
  );
};

export default CityPills;
