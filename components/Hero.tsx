export default function Hero() {
  return (
    <section className="bg-brandDark">
      {/* Increased padding-y (py-24) to add space above and below the content, matching the target. */}
      <div className="max-w-6xl mx-auto px-4 py-24 md:flex md:items-center md:gap-12">
        <div className="md:flex-1 md:w-7/12">
          {/* Headline - Reverting to original "GetTopDollar" headline with accent on key words */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight">
            Sell your house <span className="text-brandPrimary">fast for top dollar</span>
          </h1>
          {/* Subtext - Reverting to original subtext */}
          <p className="mt-6 text-white max-w-xl text-xl">
            Skip the repairs and open houses. Get a no obligation cash offer and close when you choose.
          </p>

          {/* New Callout Section - Reverting to original GetTopDollar concept benefits */}
          <ul className="mt-8 space-y-3 text-white text-lg">
            <li className="flex items-start">
              <span className="text-brandPrimary mr-2 text-xl">✓</span>
              <div>
                <span className="font-semibold text-brandPrimary">No Repairs:</span> Sell your home 100% As-Is.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-brandPrimary mr-2 text-xl">✓</span>
              <div>
                <span className="font-semibold text-brandPrimary">No Commissions:</span> Avoid agent fees and hidden costs.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-brandPrimary mr-2 text-xl">✓</span>
              <div>
                <span className="font-semibold text-brandPrimary">Fast Closing:</span> Close in as little as 7 days, on your schedule.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-brandPrimary mr-2 text-xl">✓</span>
              <div>
                <span className="font-semibold text-brandPrimary">Cash Offer:</span> Get a firm, non-contingent offer fast.
              </div>
            </li>
          </ul>

          {/* CTA Buttons - "Get My Cash Offer Now" - using brandPrimary (green) and shadow */}
          <div className="mt-12">
            <a href="#form" className="inline-block px-8 py-4 rounded-lg bg-brandPrimary text-white font-bold text-xl transition-all hover:bg-brandPrimaryDark shadow-xl shadow-brandPrimary/30">
              Get My Cash Offer Now
            </a>
          </div>
        </div>

        {/* Image Column - set to be larger and push the text. */}
        <div className="md:w-5/12 mt-8 md:mt-0">
          <div className="bg-transparent rounded-xl p-0">
            {/* Keeping the image the user provided */}
            <img src="/view-3d-house-model.png" alt="Modern House Model" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}