import Image from 'next/image';

export default function Hero() {
  return (
    // Removed min-height and md:relative. Kept relative for z-index context. Added overflow-x-hidden for safety.
    <section className="bg-brandDark relative z-10 overflow-x-hidden">
      {/* Reverted max-w container to basic relative for positioning context if needed */}
      <div className="max-w-6xl mx-auto px-4 py-20 md:py-32 md:flex md:items-center md:gap-8 relative"> 
        
        {/* Text Content Column */}
        {/* Adjusted width, removed z-index */}
        <div className="w-full md:w-7/12 lg:w-7/12 md:pr-10 lg:pr-16 flex-shrink-0"> 
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight md:leading-snug">
            Turn Your <span className="text-brandPrimary">House</span> Into <span className="text-brandPrimary">Cash</span> Fast
          </h1>
          {/* Paragraph - Removed <br /> */}
          <p className="mt-4 md:mt-5 text-white max-w-xl text-lg md:text-xl">
            Our straightforward process makes it easy to sell your home quickly and walk away with peace of mind.
          </p>

          <ul className="mt-6 md:mt-8 space-y-4 text-white text-lg">
             <li className="flex items-start">
               <Image 
                 src="/checkmark.png" 
                 alt="checkmark" 
                 width={24} 
                 height={24} 
                 className="mr-3 mt-1 flex-shrink-0" 
               />
               <div>
                 <span className="font-semibold text-brandPrimary block leading-snug">Need quick money?</span> 
                 <span className="text-white text-base">Get a same-day offer.</span> 
               </div>
             </li>
             <li className="flex items-start">
               <Image 
                 src="/checkmark.png" 
                 alt="checkmark" 
                 width={24} 
                 height={24} 
                 className="mr-3 mt-1 flex-shrink-0"
               />
               <div>
                 <span className="font-semibold text-brandPrimary block leading-snug">Don’t like repairs?</span>
                 <span className="text-white text-base">We buy houses as-is.</span>
               </div>
             </li>
             <li className="flex items-start">
               <Image 
                 src="/checkmark.png" 
                 alt="checkmark" 
                 width={24} 
                 height={24} 
                 className="mr-3 mt-1 flex-shrink-0"
               />
               <div>
                 <span className="font-semibold text-brandPrimary block leading-snug">Want to skip agents?</span>
                 <span className="text-white text-base">No commissions, no listings, no delays.</span>
               </div>
             </li>
             <li className="flex items-start">
                <Image 
                  src="/checkmark.png" 
                  alt="checkmark" 
                  width={24} 
                  height={24} 
                  className="mr-3 mt-1 flex-shrink-0"
                />
               <div>
                 <span className="font-semibold text-brandPrimary block leading-snug">Looking for peace of mind?</span>
                 <span className="text-white text-base">Sell fast and move on with ease.</span>
               </div>
             </li>
          </ul>

          <div className="mt-8 md:mt-10">
            <a href="#form" className="inline-block px-8 py-4 rounded-lg bg-brandPrimary text-white font-bold text-xl transition-all hover:bg-brandPrimaryDark shadow-xl shadow-brandPrimary/30">
              Get My Cash Offer Now &rarr; 
            </a>
          </div>
        </div>

        {/* Image Column */}
        {/* Reverted to flex item, added moderate negative margin, ensure higher z-index than next section */}
        <div className="md:w-5/12 lg:w-5/12 mt-12 md:mt-0 relative z-20 md:-mb-[175px]"> 
           <div className="bg-transparent rounded-xl p-0">
             <Image 
               src="/view-3d-house-model.png" 
               alt="Modern House Model" 
               width={971} 
               height={971} 
               // Allow image to size naturally within its column
               className="w-full h-auto mx-auto" 
               priority 
             />
           </div>
         </div>
      </div>
    </section>
  );
}