import { motion } from "framer-motion";

const SearchBar = () => {
  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="grid gap-4 rounded-3xl bg-white/90 p-6 text-slate-700 shadow-soft backdrop-blur md:grid-cols-5"
    >
      <div className="md:col-span-2">
        <label className="text-xs font-semibold uppercase text-slate-500">Location</label>
        <input
          className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-ocean-400 focus:outline-none"
          placeholder="Search destination"
        />
      </div>
      <div>
        <label className="text-xs font-semibold uppercase text-slate-500">Guests</label>
        <input
          className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-ocean-400 focus:outline-none"
          placeholder="2 Adults"
        />
      </div>
      <div>
        <label className="text-xs font-semibold uppercase text-slate-500">Date</label>
        <input
          type="date"
          className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-ocean-400 focus:outline-none"
        />
      </div>
      <button className="flex items-center justify-center rounded-2xl bg-ocean-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-ocean-700">
        Search
      </button>
    </motion.form>
  );
};

export default SearchBar;
