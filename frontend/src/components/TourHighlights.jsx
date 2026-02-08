const iconMap = {
  "Free cancellation": "🛡️",
  "Mobile ticket": "📱",
  "Instant confirmation": "⚡",
};

const TourHighlights = ({ highlights = [], duration, language }) => {
  const items = [
    ...highlights.map((item) => ({ label: item, icon: iconMap[item] || "✨" })),
    { label: `${duration} days`, icon: "⏱️" },
    { label: language, icon: "🌍" },
  ];

  return (
    <div className="grid gap-4 rounded-3xl bg-white p-6 shadow-soft md:grid-cols-2">
      {items.map((item) => (
        <div key={`${item.label}-${item.icon}`} className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-100 text-xl">
            {item.icon}
          </span>
          <div>
            <p className="text-sm font-semibold text-slate-800">{item.label}</p>
            <p className="text-xs text-slate-500">Premium inclusion</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TourHighlights;
