const items = [
  { title: "Cash Offers Within 24 Hours", desc: "Fast evaluation and clear offer—no lengthy wait." },
  { title: "We Buy As-Is", desc: "No cleaning, no repairs—sell your home in any condition." },
  { title: "Zero Commissions or Hidden Fees", desc: "What we offer is what you receive—complete transparency." },
  { title: "Local, Trustworthy Team", desc: "No corporate layers—just straightforward, dependable service." }
];

export default function Features() {
  // We are creating a simple placeholder for the image to be placed in the main page.tsx
  // This component will only handle the styling and structure of the items.
  return (
    <section id="why-choose-us" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-brandText text-center mb-12">
        <span className="text-brandPrimary">Why Sell</span> to GetTopDollar Home Buyer?
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-x-8">
        
        {/* Left Column: First two items */}
        <div className="w-full md:w-5/12 space-y-8">
          {items.slice(0, 2).map((it) => (
            <div key={it.title} className="bg-white rounded-lg p-6 shadow-md flex items-start gap-4 border-l-4 border-brandPrimary transition-shadow hover:shadow-lg">
              <div className="w-12 h-12 flex-shrink-0 rounded-full bg-brandPrimary flex items-center justify-center text-white text-2xl font-bold">✓</div>
              <div>
                <h4 className="text-xl font-semibold text-brandDark">{it.title}</h4>
                <p className="text-brandText mt-1 text-sm">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Center Placeholder for the Image (Will be managed in page.tsx for positioning) */}
        <div className="w-full md:w-2/12 hidden md:block">
          {/* This column holds space but is intentionally left empty here */}
        </div>
        
        {/* Right Column: Last two items */}
        <div className="w-full md:w-5/12 space-y-8 mt-8 md:mt-0">
          {items.slice(2, 4).map((it) => (
            <div key={it.title} className="bg-white rounded-lg p-6 shadow-md flex items-start gap-4 border-l-4 border-brandPrimary transition-shadow hover:shadow-lg">
              <div className="w-12 h-12 flex-shrink-0 rounded-full bg-brandPrimary flex items-center justify-center text-white text-2xl font-bold">✓</div>
              <div>
                <h4 className="text-xl font-semibold text-brandDark">{it.title}</h4>
                <p className="text-brandText mt-1 text-sm">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}