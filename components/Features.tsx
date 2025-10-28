import Image from 'next/image';

// Data for the features
const items = [
   { 
    title: "Cash Offers Within 24 Hours", 
    desc: "Fast evaluation and clear offer—no lengthy wait.",
    icon: "/cash_offer.png"
  },
  { 
    title: "We Buy As-Is", 
    desc: "No cleaning, no repairs—sell your home in any condition.",
    icon: "/white_house.png" 
  },
  { 
    title: "Zero Commissions or Hidden Fees", 
    desc: "What we offer is what you receive—complete transparency.",
    icon: "/cross_eye.png" 
  },
  { 
    title: "Local, Trustworthy Team", 
    desc: "No corporate layers—just straightforward, dependable service.",
    icon: "/hands_together.png"
  }
];

export default function Features() {
  return (
    // Keep the top padding matching the desired overlap space
    <section id="why-choose-us" className="max-w-6xl mx-auto px-4 py-16 md:pt-[175px] relative"> 
      <h2 className="text-4xl font-bold text-brandText text-center mb-12">
        <span className="text-brandPrimary">Why Choose</span> Max Cash Offer Home Buyer?
      </h2>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Column 1: Image */}
        <div className="text-center">
          <Image 
            src="/guy_w_house.jpg" 
            alt="Man holding a model house" 
            width={555} 
            height={832} 
            className="w-full h-auto max-w-md mx-auto rounded-lg shadow-lg" 
          />
        </div>

        {/* Column 2: Feature List */}
        <div className="space-y-8">
          {items.map((it) => (
            <div 
              key={it.title} 
              className="flex items-start gap-4"
            >
              {/* Feature Icon */}
              <div className="flex-shrink-0 w-20 h-20 p-4 rounded-full bg-brandPrimary flex items-center justify-center shadow-lg">
                <Image 
                  src={it.icon} 
                  alt={it.title} 
                  width={45} 
                  height={45} 
                  className="w-full h-auto invert brightness-0" 
                />
              </div>
              
              {/* Feature Text */}
              <div>
                <h4 className="text-2xl font-semibold text-brandDark">{it.title}</h4>
                <p className="text-brandText mt-1 text-lg">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}