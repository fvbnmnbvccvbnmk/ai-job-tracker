import { useState } from "react";

import { createBooking } from "../services/api";

const BookingCard = ({ tour }) => {
  const [formState, setFormState] = useState({
    full_name: "",
    email: "",
    date: "",
    guests: 1,
  });
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "loading", message: "Confirming your booking..." });
    try {
      await createBooking({ ...formState, tour: tour.id });
      setStatus({ type: "success", message: "Booking confirmed! We'll email your itinerary." });
      setFormState({ full_name: "", email: "", date: "", guests: 1 });
    } catch (error) {
      setStatus({ type: "error", message: "Unable to confirm booking. Please try again." });
    }
  };

  return (
    <div className="rounded-3xl bg-white p-6 shadow-soft">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase text-slate-400">From</p>
          <p className="text-2xl font-semibold text-ocean-700">${tour.price}</p>
        </div>
        <span className="text-sm text-slate-500">per guest</span>
      </div>
      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <input
          name="full_name"
          value={formState.full_name}
          onChange={handleChange}
          placeholder="Full name"
          className="w-full rounded-2xl border border-slate-200 px-4 py-2 text-sm focus:border-ocean-400 focus:outline-none"
          required
        />
        <input
          name="email"
          value={formState.email}
          onChange={handleChange}
          placeholder="Email address"
          type="email"
          className="w-full rounded-2xl border border-slate-200 px-4 py-2 text-sm focus:border-ocean-400 focus:outline-none"
          required
        />
        <input
          name="date"
          value={formState.date}
          onChange={handleChange}
          type="date"
          className="w-full rounded-2xl border border-slate-200 px-4 py-2 text-sm focus:border-ocean-400 focus:outline-none"
          required
        />
        <input
          name="guests"
          value={formState.guests}
          onChange={handleChange}
          type="number"
          min="1"
          className="w-full rounded-2xl border border-slate-200 px-4 py-2 text-sm focus:border-ocean-400 focus:outline-none"
          required
        />
        <button className="w-full rounded-2xl bg-ocean-600 py-3 text-sm font-semibold text-white transition hover:bg-ocean-700">
          Confirm Booking
        </button>
      </form>
      {status.message && (
        <p
          className={`mt-4 text-sm ${
            status.type === "success" ? "text-emerald-600" : status.type === "error" ? "text-rose-600" : "text-slate-500"
          }`}
        >
          {status.message}
        </p>
      )}
    </div>
  );
};

export default BookingCard;
