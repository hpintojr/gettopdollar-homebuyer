import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="bg-white rounded-xl shadow-lg p-8 md:flex md:gap-8">
            <div className="md:flex-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Get a fast cash offer</h3>
              <p className="text-gray-600 mb-6">No repairs. No commissions. Close on your schedule.</p>
            </div>
            <div className="md:w-96">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
