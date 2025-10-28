import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

// --- Structural Placeholder Components for Replication (Omitted for brevity) ---
// ... (OurProcess, Comparison, Testimonials functions remain here)

// --- Main Page Assembly ---

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        {/* Replicated "Why Choose Us" section with central image */}
        <div className="relative">
            <Features />
            {/* The Image Overlay - positioned centrally using absolute positioning */}
            <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-auto z-10 pointer-events-none">
                {/* Assuming the image is named man-with-house.png */}
                <img src="/man-with-house.png" alt="Man holding a house, representing cash offer" className="w-full h-auto" />
            </div>
        </div>

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