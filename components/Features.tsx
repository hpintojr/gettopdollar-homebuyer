const items = [
  { title: "Cash Offers Within 24 Hours", desc: "Fast evaluation and clear offer—no lengthy wait." },
  { title: "We Buy As-Is", desc: "No cleaning, no repairs—sell your home in any condition." },
  { title: "Zero Commissions or Hidden Fees", desc: "What we offer is what you receive—complete transparency." },
  { title: "Local, Trustworthy Team", desc: "No corporate layers—just straightforward, dependable service." }
];

export default function Features() {
  return (
    <section id="why-choose-us" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-brandText text-center mb-12">
        <span className="text-brandPrimary">Why Choose</span> Max Cash Offer Home Buyer?
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {items.map((it) => (
          <div key={it.title} className="bg-white rounded-lg p-6 shadow-md flex items-start gap-4 border-l-4 border-brandPrimary transition-shadow hover:shadow-lg">
            {/* Simple Icon placeholder for the orange checkmark/icon box */}
            <div className="w-12 h-12 flex-shrink-0 rounded-full bg-brandPrimary flex items-center justify-center text-white text-2xl font-bold">✓</div>
            <div>
              <h4 className="text-xl font-semibold text-brandDark">{it.title}</h4>
              <p className="text-brandText mt-1">{it.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}