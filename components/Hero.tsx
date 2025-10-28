import Image from 'next/image';

export default function Hero() {
  return (
    // Removed overflow-hidden, ensure relative positioning for z-index context
    <section className="bg-brandDark relative z-10">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 md:flex md:items-center md:gap-8 min-h-[700px] lg:min-h-[834px]">
        
        {/* Text Content */}
        <div className="md:flex-1 md:w-6/12 lg:w-7/12"> {/* Give text slightly more space */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight">
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

        {/* Image Column */}
        {/* - Adjusted width slightly.
          - Added md:-mb-[600px] to make it overlap significantly.
          - Added relative and z-20 to ensure it's on top.
          - Removed absolute positioning.
        */}
        <div className="md:w-6/12 lg:w-5/12 mt-12 md:mt-0 relative z-20 md:-mb-[600px]"> 
           <div className="bg-transparent rounded-xl p-0">
             <Image 
               src="/view-3d-house-model.png" 
               alt="Modern House Model" 
               width={971} 
               height={971} 
               // Adjusted max-w classes if needed to control apparent size
               className="w-full h-auto max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto" 
               priority 
             />
           </div>
         </div>
      </div>
    </section>
  );
}