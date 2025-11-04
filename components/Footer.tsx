// components/Footer.tsx
import Link from 'next/link'; // Import Link

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-8">
      <div className="max-w-6xl mx-auto px-4 py-8 text-center text-sm text-brandText">
        
        {/* New Disclosure Text */}
        <div className="max-w-3xl mx-auto text-xs text-gray-500 space-y-2 mb-6">
          <p>
            By submitting a form on this site, you consent to receive SMS messages and/or
            calls and/or emails from Get Top Dollar Home Buyer. Message
            frequency varies. To unsubscribe. follow the instructions provided in
            our communications. Msg & data rates may apply for SMS. Your
            information is secure and will not be sold to third parties. Text
            HELP for HELP. text STOP to cancel.
          </p>
        </div>

        {/* Copyright */}
        <div>
          © {new Date().getFullYear()} Get Top Dollar Home Buyer — All rights reserved.
        </div>

      </div>
    </footer>
  );
}