import Image from 'next/image';

export default function Hero() {
  return (
    // Keep relative positioning for z-index context
    <section className="bg-brandDark relative z-10">
      {/* Increased vertical padding slightly */}
      <div className="max-w-6xl mx-auto px-4 py-20 md:py-32 md:flex md:items-center md:gap-8 min-h-[700px] lg:min-h-[834px]">
        
        {/* Text Content */}
        {/* Adjusted width and added padding for spacing */}
        <div className="md:flex-1 md:w-6/12 lg:w-7/12 md:pr-10 lg:pr-16"> 
          {/* Headline - Adjusted font size and line height */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight md:leading-snug">
            Turn Your <span className="text-brandPrimary">House</span> Into <span className="text-brandPrimary">Cash</span> Fast
          </h1>
          {/* Paragraph - Adjusted margin-top */}
          <p className="mt-4 md:mt-5 text-white max-w-xl text-lg md:text-xl">
            Our straightforward process makes it easy to sell your home quickly and walk away with peace of mind.
          </p>

          {/* Bullet points - Adjusted margin-top and spacing */}
          <ul className="mt-6 md:mt-8 space-y-3 text-white text-lg">
             {/* Use Image component for checkmark.png */}
             <li className="flex items-start">
               <Image 
                 src="/checkmark.png" 
                 alt="checkmark" 
                 width={24} 
                 height={24} 
                 className="mr-3 mt-1 flex-shrink-0" // Added mt-1 for alignment
               />
               <div>
                 <span className="font-semibold text-brandPrimary">Don’t like repairs?</span> We buy houses as-is.
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
                 <span className="font-semibold text-brandPrimary">Want to skip agents?</span> No commissions, no listings.
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
                 <span className="font-semibold text-brandPrimary">Need quick money?</span> Get a same-day offer.
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
                 <span className="font-semibold text-brandPrimary">Looking for peace of mind?</span> Sell fast and move on.
               </div>
             </li>
          </ul>

          {/* CTA Button - Adjusted margin-top */}
          <div className="mt-8 md:mt-10">
            <a href="#form" className="inline-block px-8 py-4 rounded-lg bg-brandPrimary text-white font-bold text-xl transition-all hover:bg-brandPrimaryDark shadow-xl shadow-brandPrimary/30">
              Get My Cash Offer Now
            </a>
          </div>
        </div>

        {/* Image Column - Kept overlap styling */}
        <div className="md:w-6/12 lg:w-5/12 mt-12 md:mt-0 relative z-20 md:-mb-[600px]"> 
           <div className="bg-transparent rounded-xl p-0">
             <Image 
               src="/view-3d-house-model.png" 
               alt="Modern House Model" 
               width={971} 
               height={971} 
               className="w-full h-auto max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto" 
               priority 
             />
           </div>
         </div>
      </div>
    </section>
  );
}