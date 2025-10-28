import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

// --- Structural Placeholder Components for Replication ---

function OurProcess() {
  const items = [
    { title: "Step 1: Contact Us", desc: "Fill out the quick form or call us to tell us about your property. It’s free and non-obligatory." },
    { title: "Step 2: Get Your Offer", desc: "We assess your home and present a fair, no-obligation cash offer within 24-48 hours." },
    { title: "Step 3: Get Paid", desc: "Close on your preferred date at a local title company and walk away with cash in hand." }
  ];

  return (
    <section id="our-process" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-brandText text-center mb-12">
        <span className="text-brandPrimary">Our Simple</span> 3-Step Selling Process
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
      <div className="max-w-6xl mx-auto px-4 text-center text-brandText">
        <h2 className="text-4xl font-bold mb-8">Selling with a Realtor VS. Selling to <span className="text-brandPrimary">GetTopDollar Home Buyer</span></h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-white rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-brandDark">Selling with a Realtor</h3>
            <ul className="text-left space-y-4">
                <li>❌ Pay 5-6% in agent commissions and fees.</li>
                <li>❌ Process takes 30-90+ days.</li>
                <li>❌ Requires cleaning, staging, and open houses.</li>
                <li>❌ Offers are contingent on financing and inspection.</li>
            </ul>
          </div>
          <div className="p-8 bg-brandPrimary/70 rounded-xl shadow-xl text-white">
            <h3 className="text-2xl font-semibold mb-4">GetTopDollar Home Buyer</h3>
            <ul className="text-left space-y-4">
                <li>✅ Zero commissions or fees—we pay closing costs.</li>
                <li>✅ Guaranteed closing in as little as 7 days.</li>
                <li>✅ Sell entirely As-Is—no cleaning or repairs needed.</li>
                <li>✅ Fast, firm, non-contingent cash offer.</li>
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
          What Our <span className="text-brandPrimary">Satisfied Clients</span> Are Saying
        </h2>
        {/* Simple Placeholder for the complex Testimonial Slider */}
        <div className="p-8 bg-brandLight rounded-xl text-brandText shadow-md max-w-xl mx-auto">
            <p className="italic mb-4 text-xl">“The process was smooth, and the offer was fair. We closed quickly and avoided all the hassle of a traditional sale.”</p>
            <p className="font-semibold text-brandPrimary">— Sarah L., Dallas, TX</p>
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
                  Ready for a <span className="text-brandPrimary">Fast, Fair, and Clean Closing</span>?
                </h3>
                <p className="text-xl mt-4 max-w-xl md:max-w-full">
                  Sell on your terms. Get your no-obligation cash offer today.
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