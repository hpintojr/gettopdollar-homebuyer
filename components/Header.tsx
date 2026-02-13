export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Logo (Using M for Max) */}
          <div className="w-10 h-10 rounded-md bg-brandPrimary flex items-center justify-center text-white font-bold text-xl">E</div>
          <div>
            <div className="text-lg font-bold text-gray-800">Elevated Home Buyer</div>
            <div className="text-sm text-gray-500">Sell fast. Close clean.</div>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 items-center">
  {/* Updated Nav links to match original site anchors */}
  <a href="/#why-choose-us" className="text-brandText hover:text-brandPrimary transition-colors">Why Choose Us</a>
  <a href="/#comparison" className="text-brandText hover:text-brandPrimary transition-colors">Comparison</a>
  <a href="/#our-process" className="text-brandText hover:text-brandPrimary transition-colors">Our Process</a>
  <a href="/#testimonials" className="text-brandText hover:text-brandPrimary transition-colors">Testimonials</a>

  {/* <a href="tel:+13855336823" className="inline-block px-4 py-2 rounded-md border border-brandText text-brandText font-semibold hover:bg-brandLight">(385) 533-6823</a> */}

  {/* Get Offer Button - uses new brandPrimary color */}
  <a href="/#form" className="px-4 py-2 rounded-md bg-brandPrimary text-white font-semibold hover:bg-brandPrimaryDark">Get Offer</a>
</nav>
      </div>
    </header>
  );
}
