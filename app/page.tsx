import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Image from "next/image"; // Import Image component

// --- STRUCTURAL PLACEHOLDER COMPONENTS (Define at the top) ---

function OurProcess() {
  const items = [
    { title: "Step 1: Contact Us", desc: "Fill out the quick form or call us to tell us about your property. It’s free and non-obligatory." },
    { title: "Step 2: Get Your Offer", desc: "We assess your home and present a fair, no-obligation cash offer within 24-48 hours." },
    { title: "Step 3: Get Paid", desc: "Close on your preferred date at a local title company and walk away with cash in hand." }
  ];

  return (
    <section id="our-process" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-brandText text-center mb-12">
        {/* Updated Title */}
        <span className="text-brandPrimary">How It Works:</span> Simple 3-Step Process
      </h2>
      
      {/* Converted to 2-column layout */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Column 1: Steps */}
        <div className="grid grid-cols-1 gap-8">
          {items.map((it, index) => (
            <div key={it.title} className="text-center p-4 flex flex-col items-center md:flex-row md:text-left md:items-start gap-4">
              <div className="w-20 h-20 flex-shrink-0 mx-auto md:mx-0 rounded-full bg-brandPrimary flex items-center justify-center text-white text-3xl font-bold mb-4 shadow-xl">
                {index + 1}
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-brandDark">{it.title}</h3>
                <p className="text-brandText mt-2 text-lg">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Column 2: Image */}
        <div className="text-center">
          <Image 
            src="/arm_holding_house.png" 
            alt="Arm holding a model house" 
            width={609} 
            height={818} 
            className="w-full h-auto max-w-sm mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

function Comparison() {
  return (
    <section id="comparison" className="bg-brandLight py-16"> {/* Use brandLight */}
      <div className="max-w-6xl mx-auto px-4 text-center text-brandText">
        <h2 className="text-4xl font-bold mb-8">Selling with a Realtor VS. Selling to <span className="text-brandPrimary">Max Cash Offer Home Buyer</span></h2>
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Card 1: Other Company */}
          <div className="p-8 bg-white rounded-xl shadow-md border-t-4 border-gray-300">
            <h3 className="text-2xl font-semibold mb-6 text-brandDark">Other Company</h3>
            <ul className="text-left space-y-4 text-lg">
                <li className="flex items-center"><Image src="/red_x.svg" width={24} height={24} alt="No" className="mr-3" /> Pay 5-6% in agent commissions.</li>
                <li className="flex items-center"><Image src="/red_x.svg" width={24} height={24} alt="No" className="mr-3" /> Process takes 30-90+ days.</li>
                <li className="flex items-center"><Image src="/red_x.svg" width={24} height={24} alt="No" className="mr-3" /> Requires cleaning and staging.</li>
                <li className="flex items-center"><Image src="/red_x.svg" width={24} height={24} alt="No" className="mr-3" /> Offers contingent on financing.</li>
            </ul>
          </div>

          {/* Card 2: Max Cash Offer */}
          <div className="p-8 bg-white rounded-xl shadow-xl border-t-4 border-brandPrimary"> {/* Use new brandPrimary */}
            <h3 className="text-2xl font-semibold mb-6 text-brandDark">Max Cash Offer Home Buyer</h3>
            <ul className="text-left space-y-4 text-lg">
                <li className="flex items-center"><Image src="/green_check.svg" width={24} height={24} alt="Yes" className="mr-3" /> Zero commissions or fees.</li>
                <li className="flex items-center"><Image src="/green_check.svg" width={24} height={24} alt="Yes" className="mr-3" /> Guaranteed closing (as fast as 7 days).</li>
                <li className="flex items-center"><Image src="/green_check.svg" width={24} height={24} alt="Yes" className="mr-3" /> Sell entirely As-Is—no cleaning.</li>
                <li className="flex items-center"><Image src="/green_check.svg" width={24} height={24} alt="Yes" className="mr-3" /> Fast, firm, non-contingent cash offer.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// Renamed Testimonials to TrustedBy and implemented new content
function TrustedBy() {
  const situations = [
    "Inherited an unwanted property",
    "Tired of the landlord life",
    "Relocating for a new job",
    "Upsizing or downsizing",
    "Behind on mortgage payments",
    "Vacant or problem properties",
    "Dealing with expensive repairs",
    "At risk of foreclosure",
    "Financial stress",
    "Fire or water damage"
  ];

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-brandDark mb-12 text-center">
          <span className="text-brandPrimary">Trusted by Homeowners</span> Just Like You
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image */}
          <div>
            <Image 
              src="/homeowner_holding_keys.jpg" 
              alt="Happy homeowner holding keys" 
              width={550} 
              height={746} 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>

          {/* Right Column: Text & List */}
          <div className="text-brandText">
            <p className="text-lg mb-6">
              No matter your situation, <strong>Max Cash Offer Home Buyer</strong> is here to help you sell your home quickly and without stress. We've guided homeowners through all kinds of challenges — and we can do the same for you.
            </p>
            <h3 className="text-2xl font-semibold text-brandDark mb-4">
              We’ve worked with homeowners in every kind of situation:
            </h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              {situations.map((item) => (
                <div key={item} className="p-3 bg-brandLight rounded-md shadow-sm text-brandText">
                  {item}
                </div>
              ))}
            </div>
            <p className="text-lg mt-6 font-semibold text-brandDark">
              Whatever the reason — we're here to make it easy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Main Page Assembly ---

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        <Features /> 
        
        <Comparison />

        <OurProcess />
        
        {/* Updated Final CTA/Form Section */}
        <section id="form" className="bg-brandDark py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="md:flex md:gap-12 md:items-center">
              
              {/* Left Side: Text and NEW Image */}
              <div className="md:flex-1 text-center md:text-left text-white mb-8 md:mb-0">
                <h3 className="text-4xl font-extrabold leading-tight">
                  Sell Your Home <span className="text-brandPrimary">Fast for Maximum Cash</span>
                </h3>
                <p className="text-xl mt-4 max-w-xl md:max-w-full">
                  No Repairs. No Commissions. Just a Fair, Fast Offer—You Pick the Closing Date.
                </p>
                <p className="text-md mt-2 italic text-brandLight">
                  Just fill out the quick below form— no pressure, no commitment.
                </p>
                {/* Added the contact form house image here */}
                <div className="mt-8">
                  <Image 
                    src="/contact_form_3d_house.png" 
                    alt="3D house model" 
                    width={955} 
                    height={710} 
                    className="w-full h-auto max-w-md mx-auto md:max-w-full"
                  />
                </div>
              </div>
              
              {/* Right Side: Contact Form */}
              <div className="md:w-96 mx-auto flex-shrink-0">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
        
        {/* Replaced Testimonials with new TrustedBy component */}
        <TrustedBy />
        
      </main>
      <Footer />
    </div>
  );
}