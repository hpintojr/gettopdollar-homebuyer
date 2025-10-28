import Image from 'next/image';

export default function Hero() {
  return (
    // Added relative position for the z-index to work
    <section className="bg-brandDark relative z-10">
      <div className="max-w-6xl mx-auto px-4 py-24 md:flex md:items-center md:gap-12 min-h-[700px] lg:min-h-[834px]">
        
        {/* Text Content */}
        <div className="md:flex-1 md:w-7/12">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight">
            Turn Your <span className="text-brandPrimary">House</span> Into <span className="text-brandPrimary">Cash</span> Fast
          </h1>
          <p className="mt-6 text-white max-w-xl text-xl">
            Our straightforward process makes it easy to sell your home quickly and walk away with peace of mind.
          </p>

          {/* Updated bullet points from original site */}
          <ul className="mt-8 space-y-4 text-white text-lg">
            <li className="flex items-start">
              <span className="text-brandPrimary mr-3 text-2xl font-bold">✓</span>
              <div>
                <span className="font-semibold text-brandPrimary">Don’t like repairs?</span> We buy houses as-is.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-brandPrimary mr-3 text-2xl font-bold">✓</span>
              <div>
                <span className="font-semibold text-brandPrimary">Want to skip agents?</span> No commissions, no listings.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-brandPrimary mr-3 text-2xl font-bold">✓</span>
              <div>
                <span className="font-semibold text-brandPrimary">Need quick money?</span> Get a same-day offer.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-brandPrimary mr-3 text-2xl font-bold">✓</span>
              <div>
                <span className="font-semibold text-brandPrimary">Looking for peace of mind?</span> Sell fast and move on.
              </div>
            </li>
          </ul>

          {/* CTA Button */}
          <div className="mt-12">
            <a href="#form" className="inline-block px-8 py-4 rounded-lg bg-brandPrimary text-white font-bold text-xl transition-all hover:bg-brandPrimaryDark shadow-xl shadow-brandPrimary/30">
              Get My Cash Offer Now
            </a>
          </div>
        </div>

        {/* Image Column */}
        {/* Added relative positioning and a negative margin (md:-mb-48) 
          This makes the image "cross" into the next section on desktop.
          Added z-20 to ensure it's on top of the next section's content.
        */}
        <div className="md:w-5/12 mt-12 md:mt-0 relative z-20 md:-mb-48">
          <div className="bg-transparent rounded-xl p-0">
            <Image 
              src="/view-3d-house-model.png" 
              alt="Modern House Model" 
              width={971} 
              height={971} 
              className="w-full h-auto" 
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}