const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8000/api";

const handleResponse = async (response) => {
  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "Request failed");
  }
  return response.json();
};

export const fetchTours = async () => {
  const response = await fetch(`${API_BASE}/tours/`);
  return handleResponse(response);
};

export const fetchTour = async (slug) => {
  const response = await fetch(`${API_BASE}/tours/${slug}/`);
  return handleResponse(response);
};

export const fetchDestinations = async () => {
  const response = await fetch(`${API_BASE}/destinations/`);
  return handleResponse(response);
};

export const createBooking = async (payload) => {
  const response = await fetch(`${API_BASE}/bookings/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return handleResponse(response);
};
