const items = [
  { title: "Fast closing", desc: "Close in as little as 7 days" },
  { title: "No repairs needed", desc: "We buy as-is" },
  { title: "No commissions", desc: "Keep more of your proceeds" }
];

export default function Features() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((it) => (
          <div key={it.title} className="bg-white rounded-lg p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-gray-800">{it.title}</h4>
            <p className="text-gray-600 mt-2">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
