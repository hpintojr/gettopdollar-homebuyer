export default function Hero() {
  return (
    <section className="bg-brandDark">
      <div className="max-w-6xl mx-auto px-4 py-16 md:flex md:items-center md:gap-12">
        <div className="md:flex-1">
          {/* Headline - "Turn Your House Into Cash Fast" with 'House' & 'Cash' in color */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight">
            Turn Your <span className="text-brandPrimary">House</span> Into <span className="text-brandPrimary">Cash</span> Fast
          </h1>
          {/* Subtext */}
          <p className="mt-6 text-white max-w-xl text-xl">
            Our straightforward process makes it easy to sell your home quickly and walk away with peace of mind.
          </p>
          {/* CTA Buttons - "Get My Cash Offer Now" & "843-670-6219" */}
          <div className="mt-12 flex gap-4">
            <a href="#form" className="inline-block px-8 py-4 rounded-lg bg-brandPrimary text-brandDark font-bold text-xl transition-all hover:bg-brandPrimaryDark hover:text-white">
              Get My Cash Offer Now
            </a>
            <a href="tel:+18436706219" className="inline-block px-6 py-3 rounded-lg border-2 border-white text-white font-bold text-lg hover:bg-white/10 hidden md:inline-block">
              843-670-6219
            </a>
          </div>
        </div>
        {/* Placeholder for 3D House Image */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <div className="bg-brandDark/50 rounded-xl p-6">
            {/* Replace /house-sample.png with an image placeholder that fits the old site's aesthetic */}
            <img src="/view-3d-house-model.png" alt="3D House Model" className="w-full rounded-md" />
          </div>
        </div>
      </div>
    </section>
  );
}