export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-brandGreen flex items-center justify-center text-white font-bold">G</div>
          <div>
            <div className="text-lg font-bold text-gray-800">GetTopDollar Home Buyer</div>
            <div className="text-sm text-gray-500">Sell fast. Close clean.</div>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 items-center">
          <a className="text-gray-700">How it works</a>
          <a className="text-gray-700">Selling process</a>
          <a className="px-4 py-2 rounded-md bg-brandGreen text-white font-semibold">Get Offer</a>
        </nav>
      </div>
    </header>
  );
}
