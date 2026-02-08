const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-500 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p>© 2024 AzureVista Luxury Journeys. All rights reserved.</p>
        <div className="flex gap-4">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Support</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
