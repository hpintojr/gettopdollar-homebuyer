// components/ContactForm.tsx
"use client";
import { useState } from "react";
import Link from "next/link"; // Import Link for legal pages

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "" });
  const [status, setStatus] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);
  const [agreed, setAgreed] = useState(false); // State for the checkbox

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!agreed) {
      setStatus("You must agree to the terms and privacy policy.");
      return;
    }
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("Request sent. We will contact you shortly.");
        setForm({ name: "", email: "", phone: "", address: "" });
        setAgreed(false); // Reset checkbox
      } else {
        setStatus(data?.error || "Failed to submit. Try again.");
      }
    } catch (err) {
      setStatus("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form id="contact" onSubmit={submit} className="space-y-4 p-6 bg-white rounded-xl shadow-2xl">
      <h3 className="text-2xl font-bold text-brandPrimary text-center mb-4">
        Get A Fast &amp; Fair Cash Offer Today
      </h3>
      <div>
        <label className="hidden text-sm font-medium text-gray-700">Full name</label>
        <input required value={form.name} onChange={(e) => setForm({...form, name: e.target.value})}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 bg-brandLight placeholder:text-brandText" placeholder="Full Name" />
      </div>

      <div>
        <label className="hidden text-sm font-medium text-gray-700">Phone</label>
        <input required value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 bg-brandLight placeholder:text-brandText" placeholder="Phone Number" />
      </div>

      <div>
        <label className="hidden text-sm font-medium text-gray-700">Email</label>
        <input required type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 bg-brandLight placeholder:text-brandText" placeholder="Email" />
      </div>

      <div>
        <label className="hidden text-sm font-medium text-gray-700">Property address</label>
        <textarea required value={form.address} onChange={(e) => setForm({...form, address: e.target.value})}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 bg-brandLight placeholder:text-brandText" placeholder="Property Address" rows={3} />
      </div>

      {/* --- New Checkbox Section --- */}
      <div className="space-y-2">
        <div className="flex items-start gap-2">
          <input
            id="terms-agree"
            name="terms-agree"
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="h-5 w-5 mt-1 rounded border-gray-300 text-brandPrimary focus:ring-brandPrimary flex-shrink-0"
          />
          <label htmlFor="terms-agree" className="text-xs text-gray-600">
            I agree to the{" "}
            <Link href="/terms-of-use" target="_blank" className="underline text-brandPrimary hover:text-brandPrimaryDark">
              Terms & Conditions
            </Link>{" "}
            and{" "}
            <Link href="/privacy-policy" target="_blank" className="underline text-brandPrimary hover:text-brandPrimaryDark">
              Privacy Policy
            </Link>
            . By submitting this form, you consent to receive SMS messages and/or
            calls and/or emails from Elevated Home Buyer Holdings, LLC. Message
            frequency varies. To unsubscribe. follow the instructions provided in
            our communications. Msg & data rates may apply for SMS. Your
            information is secure and will not be sold to third parties. Text
            HELP for HELP. text STOP to cancel.
          </label>
        </div>
      </div>
      {/* --- End New Checkbox Section --- */}

      <div>
        {/* Updated Button Style: Disabled state added */}
        <button type="submit" disabled={loading || !agreed}
          className="w-full inline-flex justify-center items-center px-8 py-4 rounded-lg bg-white text-brandDark font-bold text-xl transition-all hover:bg-gray-100 shadow-xl border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed">
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>

      {status && <p className="text-sm text-center text-gray-700">{status}</p>}
    </form>
  );
}