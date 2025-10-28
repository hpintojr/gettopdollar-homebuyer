"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "" });
  const [status, setStatus] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
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

      <div>
        {/* Updated Button Style: White background, dark text */}
        <button type="submit" disabled={loading}
          className="w-full inline-flex justify-center items-center px-8 py-4 rounded-lg bg-white text-brandDark font-bold text-xl transition-all hover:bg-gray-100 shadow-xl border border-gray-200">
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>

      {status && <p className="text-sm text-center text-gray-700">{status}</p>}
    </form>
  );
}