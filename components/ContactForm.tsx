"use client";
import { useState } from "react";
import Link from "next/link";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
    agreeTransactional: false,
    agreeMarketing: false,
    agreeTermsPrivacy: false,
  });

  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validating all three agreements are checked
    if (!form.agreeTransactional || !form.agreeMarketing || !form.agreeTermsPrivacy) {
      setStatus("Please check all agreement boxes to continue.");
      return;
    }

    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(form),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setStatus("Success! We will contact you shortly.");
        setForm({
          name: "", email: "", phone: "", address: "", message: "",
          agreeTransactional: false, agreeMarketing: false, agreeTermsPrivacy: false,
        });
      } else {
        setStatus("Failed to send. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-2xl bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Get Your Cash Offer</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-600 outline-none"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-600 outline-none"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-600 outline-none"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
            />
          </div>
          <input
            type="text"
            placeholder="Property Address"
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-600 outline-none"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            required
          />
          
          <div className="space-y-4 mt-6 text-xs text-gray-700">
            {/* Checkbox 1: Transactional */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="mt-1"
                checked={form.agreeTransactional}
                onChange={(e) => setForm({ ...form, agreeTransactional: e.target.checked })}
              />
              <span>
                I agree to receive transactional or conversational communications from Elevated Home Buyer via text messages, phone calls, and emails related to my real estate inquiry, such as property details, responses, and appointment confirmations. Message frequency varies. Reply STOP to opt out. Reply HELP for help. Msg & data rates may apply. Your information is secure and will not be sold or shared with third parties or affiliates for promotional purposes.
              </span>
            </label>

            {/* Checkbox 2: Marketing */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="mt-1"
                checked={form.agreeMarketing}
                onChange={(e) => setForm({ ...form, agreeMarketing: e.target.checked })}
              />
              <span>
                I agree to receive marketing communications from Elevated Home Buyer via text messages, phone calls, and emails, including property offers, promotions, and other real estate-related marketing. Message frequency varies. Reply STOP to opt out. Reply HELP for help. Msg & data rates may apply. Your information is secure and will not be sold or shared with third parties or affiliates for marketing purposes.
              </span>
            </label>

            {/* Checkbox 3: T&C and Privacy */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="mt-1"
                checked={form.agreeTermsPrivacy}
                onChange={(e) => setForm({ ...form, agreeTermsPrivacy: e.target.checked })}
              />
              <span>
                I agree to the <Link href="/terms-of-use" className="text-blue-600 underline">Terms & Conditions</Link> and <Link href="/privacy-policy" className="text-blue-600 underline">Privacy Policy</Link>.
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition duration-300 mt-4"
          >
            GET MY CASH OFFER
          </button>
          {status && <p className="text-center mt-4 font-medium text-blue-800">{status}</p>}
        </form>
      </div>
    </section>
  );
}
