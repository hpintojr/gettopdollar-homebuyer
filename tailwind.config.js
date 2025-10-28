module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // New colors based on the old "Max Cash Offer" site
        brandPrimary: "#fcb614",       // Main Orange/Yellow for CTA/Accent
        brandPrimaryDark: "#f68e1e",   // Darker Orange for gradient consistency
        brandDark: "#1c2d37",         // Dark Blue/Gray for Hero/Block backgrounds
        brandText: "#394755",         // Dark Text Color (from old site a tag)
        brandLight: "#f4f6fb",        // Light Gray for form/testimonial boxes
        brandOffWhite: "#f7faf9"      // Original off-white (keep for body background)
      }
    }
  },
  plugins: []
};