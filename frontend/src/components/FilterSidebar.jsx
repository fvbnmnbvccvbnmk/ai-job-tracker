const FilterSection = ({ title, options = [] }) => {
  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-slate-700">{title}</h4>
      <div className="space-y-2 text-sm text-slate-500">
        {options.map((option) => (
          <label key={option} className="flex items-center gap-2">
            <input type="checkbox" className="rounded border-slate-300 text-ocean-600" />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

const FilterSidebar = ({ tours = [] }) => {
  const themes = [...new Set(tours.map((tour) => tour.theme))];
  const durations = [...new Set(tours.map((tour) => `${tour.duration_days} Days`))];
  const destinations = [...new Set(tours.map((tour) => tour.destination))];

  return (
    <aside className="rounded-3xl bg-white p-6 shadow-soft space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-slate-800">Filters</h3>
        <p className="text-sm text-slate-500">Refine your luxury tour results</p>
      </div>
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-slate-700">Date Availability</h4>
        <input
          type="date"
          className="w-full rounded-2xl border border-slate-200 px-4 py-2 text-sm focus:border-ocean-400 focus:outline-none"
        />
      </div>
      <FilterSection title="Theme" options={themes} />
      <FilterSection title="Duration" options={durations} />
      <FilterSection title="Destination" options={destinations} />
    </aside>
  );
};

export default FilterSidebar;
