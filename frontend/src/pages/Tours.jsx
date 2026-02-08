import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import FilterSidebar from "../components/FilterSidebar";
import TourCard from "../components/TourCard";
import { fetchTours } from "../services/api";

const Tours = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchTours();
      setTours(data);
    };

    loadData();
  }, []);

  return (
    <main className="mx-auto grid max-w-6xl gap-8 px-6 py-12 lg:grid-cols-[320px_1fr]">
      <FilterSidebar tours={tours} />
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Tours List</p>
            <h1 className="mt-3 font-display text-3xl font-semibold text-slate-800">Premium tours & experiences</h1>
          </div>
          <span className="text-sm text-slate-500">{tours.length} experiences</span>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
        <div className="flex justify-center">
          <motion.button
            whileHover={{ y: -2 }}
            className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-600"
          >
            Load More
          </motion.button>
        </div>
      </section>
    </main>
  );
};

export default Tours;
