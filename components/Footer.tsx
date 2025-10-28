export default function Footer() {
  return (
    <footer className="bg-white border-t mt-8">
      <div className="max-w-6xl mx-auto px-4 py-8 text-center text-sm text-brandText">
        © {new Date().getFullYear()} Get Top Dollar Home Buyer — All rights reserved.
      </div>
    </footer>
  );
}