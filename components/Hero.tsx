export default function Hero() {
  return (
    <section className="bg-brandDark">
      {/* Increased padding-y (py-24) to add space above and below the content, matching the target. */}
      <div className="max-w-6xl mx-auto px-4 py-24 md:flex md:items-center md:gap-12">
        <div className="md:flex-1 md:w-7/12"> {/* Give text column about 58% width */}
          {/* Headline - "Turn Your House Into Cash Fast" */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight">
            Turn Your <span className="text-brandPrimary">House</span> Into <span className="text-brandPrimary">Cash</span> Fast
          </h1>
          {/* Subtext */}
          <p className="mt-6 text-white max-w-xl text-xl">
            Our straightforward process makes it easy to sell your home quickly and walk away with peace of mind.
          </p>

          {/* New Callout Section (Need quick money? Don't like repairs?) */}
          <ul className="mt-8 space-y-3 text-white text-lg">
            <li className="flex items-start">
              <span className="text-brandPrimary mr-2 text-xl">✓</span>
              <div>
                <span className="font-semibold text-brandPrimary">Need quick money?</span> Get a same-day offer.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-brandPrimary mr-2 text-xl">✓</span>
              <div>
                <span className="font-semibold text-brandPrimary">Don't like repairs?</span> We buy houses as-is.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-brandPrimary mr-2 text-xl">✓</span>
              <div>
                <span className="font-semibold text-brandPrimary">Want to skip agents?</span> No commissions, no listings, no delays.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-brandPrimary mr-2 text-xl">✓</span>
              <div>
                <span className="font-semibold text-brandPrimary">Looking for peace of mind?</span> Sell fast and move on with ease.
              </div>
            </li>
          </ul>

          {/* CTA Buttons - "Get My Cash Offer Now" */}
          <div className="mt-12">
            {/* CTA button to match the orange background and shadow of the old site's CTA */}
            <a href="#form" className="inline-block px-8 py-4 rounded-lg bg-brandPrimary text-brandDark font-bold text-xl transition-all hover:bg-brandPrimaryDark hover:text-white shadow-xl shadow-brandPrimary/30">
              Get My Cash Offer Now
            </a>
          </div>
        </div>

        {/* Image Column - set to be larger and push the text. */}
        <div className="md:w-5/12 mt-8 md:mt-0"> {/* Give image column about 42% width */}
          <div className="bg-transparent rounded-xl p-0">
            {/* The image is the key. Ensure it fills its container and its styling is minimalist. */}
            <img src="/view-3d-house-model.png" alt="3D House Model" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}