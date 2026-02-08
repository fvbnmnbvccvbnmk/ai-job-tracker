import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TourDetails from "./pages/TourDetails";
import Tours from "./pages/Tours";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tours/:slug" element={<TourDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
