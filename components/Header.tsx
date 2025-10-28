export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Logo (Reverting to G for GetTopDollar) */}
          <div className="w-10 h-10 rounded-md bg-brandPrimary flex items-center justify-center text-white font-bold">G</div>
          <div>
            <div className="text-lg font-bold text-gray-800">GetTopDollar Home Buyer</div>
            <div className="text-sm text-gray-500">Sell fast. Close clean.</div>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 items-center">
          {/* Nav links matching the structural anchors, using original branding style */}
          <a href="#why-choose-us" className="text-brandText hover:text-brandPrimary transition-colors">How it Works</a>
          <a href="#comparison" className="text-brandText hover:text-brandPrimary transition-colors">Comparison</a>
          <a href="#our-process" className="text-brandText hover:text-brandPrimary transition-colors">Selling Process</a>
          <a href="#testimonials" className="text-brandText hover:text-brandPrimary transition-colors">Reviews</a>
          {/* Phone Number Button - using a number found in the old site's HTML (843-670-6219) */}
          <a href="tel:+18436706219" className="inline-block px-4 py-2 rounded-md border border-brandText text-brandText font-semibold hover:bg-brandLight">843-670-6219</a>
          {/* Get Offer Button - using brandPrimary (green) */}
          <a href="#form" className="px-4 py-2 rounded-md bg-brandPrimary text-white font-semibold hover:bg-brandPrimaryDark">Get Offer</a>
        </nav>
      </div>
    </header>
  );
}