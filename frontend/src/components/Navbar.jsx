import { Link, NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }) =>
  `text-sm font-medium tracking-wide ${
    isActive ? "text-ocean-600" : "text-slate-600 hover:text-ocean-600"
  }`;

const Navbar = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-slate-100">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-lg font-semibold text-ocean-700">
          AzureVista
        </Link>
        <nav className="flex items-center gap-6">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/tours" className={navLinkClass}>
            Tours
          </NavLink>
          <button className="rounded-full bg-ocean-600 px-5 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-ocean-700">
            Sign In
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
