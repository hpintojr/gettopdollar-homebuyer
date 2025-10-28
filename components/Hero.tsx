import Image from 'next/image';

export default function Hero() {
  return (
    // Set a minimum height for the Hero section to ensure enough space for text + overlapping image
    // min-h-[1000px] or higher might be needed depending on screen size to comfortably fit text and image start point
    <section className="bg-brandDark relative z-10 min-h-[900px] md:min-h-[1000px] lg:min-h-[1000px] xl:min-h-[1100px] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row md:items-start md:gap-8">
        
        {/* Text Content Column */}
        {/* On desktop, this will take up 50% or more, allowing the image to be absolutely positioned next to it */}
        <div className="w-full md:w-6/12 lg:w-7/12 md:pr-10 lg:pr-16 flex-shrink-0 relative z-20"> {/* Higher z-index for text on top */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight md:leading-snug">
            Turn Your <span className="text-brandPrimary">House</span> Into <span className="text-brandPrimary">Cash</span> Fast
          </h1>
          <p className="mt-4 md:mt-5 text-white max-w-xl text-lg md:text-xl">
            Our straightforward process makes it easy to sell your home quickly and <br /> 
            walk away with peace of mind.
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

        {/* Image Column - ABSOLUTE POSITIONED FOR DESKTOP */}
        {/* On mobile, it remains in flow. On MD screens and up, it becomes absolute. */}
        {/* top-[120px] will position it 120px from the top of the Hero section.
            The image is 971px tall. 971 - 120 = 851px extending below the text.
            We need 600px of *overlap* into the next section.
            So, 851 - 600 = 251px of image should be within the hero section's visual boundaries after text.
            The total height of the hero is min-h-[1000px] to make this fit.
        */}
        <div className="md:absolute md:right-0 md:top-[120px] md:w-[971px] lg:top-[80px] lg:w-[971px] xl:top-[0px] mt-12 md:mt-0 relative z-20"> 
           <div className="bg-transparent rounded-xl p-0">
             <Image 
               src="/view-3d-house-model.png" 
               alt="Modern House Model" 
               width={971} 
               height={971} 
               // On mobile, it's full width of its small container.
               // On desktop, the parent div's w-[971px] dictates its size.
               className="w-full h-auto mx-auto md:w-[971px] md:h-[971px]" 
               priority 
             />
           </div>
         </div>
      </div>
    </section>
  );
}