const items = [
  { title: "Avoid Repairs", desc: "We buy your house entirely 'as-is,' saving you time and thousands in repair costs." },
  { title: "No Commissions", desc: "Sell direct to us and pay zero agent commissions or hidden fees." },
  { title: "Flexible Closing", desc: "You decide the closing date, we work around your schedule." },
  { title: "Guaranteed Offer", desc: "Our cash offer is firm—no buyer fall-throughs or financing issues." }
];

export default function Features() {
  return (
    <section id="why-choose-us" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-brandText text-center mb-12">
        <span className="text-brandPrimary">Why Sell</span> to GetTopDollar Home Buyer?
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {items.map((it) => (
          <div key={it.title} className="bg-white rounded-lg p-6 shadow-md flex items-start gap-4 border-l-4 border-brandPrimary transition-shadow hover:shadow-lg">
            {/* Simple Icon placeholder (retains the checkmark style but with green accent) */}
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