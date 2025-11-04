module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Original Max Cash Offer Home Buyer theme
        brandPrimary: "#fcb614",      // Main Yellow/Orange
        brandPrimaryDark: "#f68e1e",  // Darker Orange for hover
        brandDark: "#1c2d37",         // Dark Hero/Form Background
        brandText: "#394755",         // Dark Text Color
        brandLight: "#f4f6fb",        // Light Gray for form inputs
        brandOffWhite: "#f7faf9"      // Body Background
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
};