import Image from 'next/image';

export default function Hero() {
  return (
    // Keep relative position for z-index
    <section className="bg-brandDark relative z-10 overflow-hidden"> {/* Added overflow-hidden */}
      {/* Adjusted padding slightly if needed, ensure enough height */}
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 md:flex md:items-center md:gap-8 min-h-[700px] lg:min-h-[834px]">
        
        {/* Text Content - Reduced width fraction */}
        <div className="md:flex-1 md:w-5/12 lg:w-6/12"> {/* Adjusted width */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight"> {/* Slightly adjusted text size if needed */}
            Turn Your <span className="text-brandPrimary">House</span> Into <span className="text-brandPrimary">Cash</span> Fast
          </h1>
          <p className="mt-6 text-white max-w-xl text-lg md:text-xl">
            Our straightforward process makes it easy to sell your home quickly and walk away with peace of mind.
          </p>

          {/* Bullet points */}
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

        {/* Image Column - Increased width fraction */}
        {/* Adjusted negative margin (e.g., md:-mb-32 or md:-mb-40) and added right margin/padding if needed */}
        {/* Using absolute positioning on larger screens for more control */}
        <div className="mt-12 md:mt-0 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:w-7/12 lg:w-6/12 xl:w-7/12 md:pl-8"> {/* Use absolute positioning */}
           <div className="relative z-20"> {/* Ensure image stays on top */}
             <Image 
               src="/view-3d-house-model.png" 
               alt="Modern House Model" 
               width={971} // Use original width
               height={971} // Use original height
               className="w-full h-auto max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl" // Control max size
               priority 
             />
           </div>
         </div>
      </div>
    </section>
  );
}