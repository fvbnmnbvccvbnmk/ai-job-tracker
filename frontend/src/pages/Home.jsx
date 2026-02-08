import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import CityPills from "../components/CityPills";
import DestinationGrid from "../components/DestinationGrid";
import Hero from "../components/Hero";
import { fetchDestinations, fetchTours } from "../services/api";

const Home = () => {
  const [destinations, setDestinations] = useState([]);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const [destinationsData, toursData] = await Promise.all([fetchDestinations(), fetchTours()]);
      setDestinations(destinationsData);
      setTours(toursData.slice(0, 4));
    };

    loadData();
  }, []);

  return (
    <main className="space-y-20">
      <Hero />

      <section className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Explore Popular Cities</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-slate-800">Curated destinations for every style</h2>
          </div>
          <motion.button
            whileHover={{ y: -2 }}
            className="self-start rounded-full border border-slate-200 px-6 py-2 text-sm font-semibold text-slate-600"
          >
            View All Cities
          </motion.button>
        </div>
        <div className="mt-8">
          <CityPills destinations={destinations} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Featured Destinations</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-slate-800">Scenic escapes curated by experts</h2>
          </div>
        </div>
        <DestinationGrid tours={tours} />
      </section>
    </main>
  );
};

export default Home;
