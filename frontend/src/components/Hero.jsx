import { motion } from "framer-motion";

import FloatingSphere from "./FloatingSphere";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        <div className="absolute inset-0 hero-gradient opacity-80" />
      </div>
      <FloatingSphere />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-sage-100">Luxury Travel Curators</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
            We Find The Best Tours For You
          </h1>
          <p className="mt-4 text-base text-slate-100 md:text-lg">
            Discover refined journeys curated by travel designers. From private coastal retreats to cultural
            immersions, every itinerary is crafted for comfort, style, and unforgettable moments.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-ocean-700 shadow-soft transition hover:-translate-y-1">
              Explore Experiences
            </button>
            <button className="flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/20">▶</span>
              Watch Video
            </button>
          </div>
        </motion.div>
        <SearchBar />
      </div>
    </section>
  );
};

export default Hero;
