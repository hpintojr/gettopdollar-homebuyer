module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Reverting to original GetTopDollar Home Buyer green/blue scheme
        brandPrimary: "#38b48b",      // Main Green for CTA/Accent
        brandPrimaryDark: "#2d9876",  // Slightly darker green for hover/gradient effect
        brandBlue: "#1e88e5",         // The secondary blue from original branding
        brandDark: "#1c2d37",         // Keeping the dark background for Hero (from Max Cash Offer styling)
        brandText: "#394755",         // Dark Text Color
        brandLight: "#f4f6fb",        // Light Gray for boxes/form backgrounds
        brandOffWhite: "#f7faf9"      // Original off-white for body background
      }
    }
  },
  plugins: []
};