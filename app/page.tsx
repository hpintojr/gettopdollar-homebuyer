import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

// --- Structural Placeholder Components for Replication ---

function OurProcess() {
  const items = [
    { title: "Reach Out", desc: "Fill out the quick form or give us a call." },
    { title: "Receive Your Offer", desc: "We assess your property and present a no-obligation cash offer—fast and fair." },
    { title: "Close on Your Terms", desc: "You pick the closing date. Walk away with cash, no stress, no surprises." }
  ];

  return (
    <section id="our-process" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-brandText text-center mb-12">
        <span className="text-brandPrimary">How It Works:</span> Simple 3-Step Process
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {items.map((it, index) => (
          <div key={it.title} className="text-center p-4">
            <div className="w-20 h-20 mx-auto rounded-full bg-brandPrimary flex items-center justify-center text-white text-3xl font-bold mb-4 shadow-xl">
              {index + 1}
            </div>
            <h3 className="text-2xl font-semibold text-brandDark">{it.title}</h3>
            <p className="text-brandText mt-2">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Comparison() {
  return (
    <section id="comparison" className="bg-brandOffWhite py-16">
      <div className="max-w-6xl mx-auto px-4 text-center text-brandDark">
        <h2 className="text-4xl font-bold mb-8">Other Company VS. <span className="text-brandPrimary">Max Cash Offer Home Buyer</span></h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-brandLight rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Other Company</h3>
            <ul className="text-left space-y-4">
                <li>❌ Agent Fees & Commissions</li>
                <li>❌ Lengthy Process (Months)</li>
                <li>❌ Unreliable Offers</li>
                <li>❌ Stressful Showings</li>
            </ul>
          </div>
          <div className="p-8 bg-brandPrimary/70 rounded-xl shadow-xl text-brandDark">
            <h3 className="text-2xl font-semibold mb-4">Max Cash Offer Home Buyer</h3>
            <ul className="text-left space-y-4">
                <li>✅ Zero Agent Fees</li>
                <li>✅ Fast Closing (7 Days)</li>
                <li>✅ Guaranteed Cash Offer</li>
                <li>✅ Sell As-Is, No Showings</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-brandDark mb-12">
          What Our <span className="text-brandPrimary">Happy Sellers</span> Are Saying
        </h2>
        {/* Simple Placeholder for the complex Testimonial Slider */}
        <div className="p-8 bg-brandLight rounded-xl text-brandText shadow-md max-w-xl mx-auto">
            <p className="italic mb-4 text-xl">“Fast, Fair, and Hassle-Free! They closed in less than two weeks.”</p>
            <p className="font-semibold text-brandPrimary">— Danielle M., Austin, TX</p>
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
        
        {/* Replicated "Why Choose Us" section */}
        <Features /> 
        
        {/* Replicated "Comparison" section */}
        <Comparison />

        {/* Replicated "How It Works" section */}
        <OurProcess />
        
        {/* Replicated Final CTA/Form Section - dark background and form on the side */}
        <section id="form" className="bg-brandDark py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="md:flex md:gap-12 md:items-center">
              {/* Left Side: Headline and Subtext */}
              <div className="md:flex-1 text-center md:text-left text-white mb-8 md:mb-0">
                <h3 className="text-4xl font-extrabold leading-tight">
                  Sell Your Home <span className="text-brandPrimary">Fast for Maximum Cash</span>
                </h3>
                <p className="text-xl mt-4 max-w-xl md:max-w-full">
                  No Repairs. No Commissions. Just a Fair, Fast Offer—You Pick the Closing Date.
                </p>
                <p className="text-md mt-2 italic text-brandLight">
                  Just fill out the quick form below— no pressure, no commitment.
                </p>
              </div>
              
              {/* Right Side: Contact Form */}
              <div className="md:w-96 mx-auto">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
        
        {/* Replicated Testimonials Section */}
        <Testimonials />
        
      </main>
      <Footer />
    </div>
  );
}