// components/Hero.tsx
import Image from 'next/image';
import ContactForm from './ContactForm'; // Import the ContactForm

export default function Hero() {
  return (
    // Adjusted height for content, remove overflow-hidden to prevent form shadow clipping
    <section className="bg-brandDark relative z-10 py-16 md:py-24">
      {/* Container updated to a 2-column grid */}
      <div className="max-w-6xl mx-auto px-4 h-full grid grid-cols-1 md:grid-cols-2 md:items-center md:gap-12 lg:gap-16">
        
        {/* Column 1: Text Content - Z-index 20 */}
        <div className="w-full relative z-20 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight md:leading-snug">
            Turn Your <span className="text-brandPrimary">House</span> Into <span className="text-brandPrimary">Cash</span> Fast
          </h1>
          <p className="mt-4 md:mt-5 text-white max-w-xl text-lg md:text-xl mx-auto md:mx-0">
            Our straightforward process makes it easy to sell your home quickly and walk away with peace of mind.
          </p>

          <ul className="mt-6 md:mt-8 space-y-4 text-white text-lg max-w-lg mx-auto md:mx-0">
             <li className="flex items-start text-left">
               <Image 
                 src="/checkmark.png" 
                 alt="checkmark" 
                 width={24} 
                 height={24} 
                 className="mr-3 mt-1 flex-shrink-0" 
               />
               <div>
                 {/* --- UPDATED CLASSES HERE --- */}
                 <span className="font-black text-brandPrimary block leading-snug text-2xl">Need quick money?</span> 
                 <span className="text-white text-base">Get a same-day offer.</span> 
               </div>
             </li>
             <li className="flex items-start text-left">
               <Image 
                 src="/checkmark.png" 
                 alt="checkmark" 
                 width={24} 
                 height={24} 
                 className="mr-3 mt-1 flex-shrink-0"
               />
               <div>
                 {/* --- UPDATED CLASSES HERE --- */}
                 <span className="font-black text-brandPrimary block leading-snug text-2xl">Don’t like repairs?</span>
                 <span className="text-white text-base">We buy houses as-is.</span>
               </div>
             </li>
             <li className="flex items-start text-left">
               <Image 
                 src="/checkmark.png" 
                 alt="checkmark" 
                 width={24} 
                 height={24} 
                 className="mr-3 mt-1 flex-shrink-0"
               />
               <div>
                 {/* --- UPDATED CLASSES HERE --- */}
                 <span className="font-black text-brandPrimary block leading-snug text-2xl">Want to skip agents?</span>
                 <span className="text-white text-base">No commissions, no listings, no delays.</span>
               </div>
             </li>
             <li className="flex items-start text-left">
                <Image 
                  src="/checkmark.png" 
                  alt="checkmark" 
                  width={24} 
                  height={24} 
                  className="mr-3 mt-1 flex-shrink-0"
                />
               <div>
                 {/* --- UPDATED CLASSES HERE --- */}
                 <span className="font-black text-brandPrimary block leading-snug text-2xl">Looking for peace of mind?</span>
                 <span className="text-white text-base">Sell fast and move on with ease.</span>
               </div>
             </li>
          </ul>

          {/* CTA Phone Number */}
          <div className="mt-8 md:mt-10">
            <p className="text-white text-lg mb-2">Call us directly:</p>
            <a 
              href="tel:3855336823" 
              className="text-3xl md:text-4xl font-extrabold text-brandPrimary hover:text-white transition-colors"
            >
              (385) 533-6823
            </a>
          </div>
        </div>

        {/* Column 2: Contact Form - Z-index 10 */}
        <div className="relative z-10 mt-12 md:mt-0">
           <ContactForm />
         </div>
      </div>
    </section>
  );
}
