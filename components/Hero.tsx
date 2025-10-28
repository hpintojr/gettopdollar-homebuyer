export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16 md:flex md:items-center md:gap-12">
        <div className="md:flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Sell your house fast for top dollar
          </h1>
          <p className="mt-6 text-gray-600 max-w-xl">
            Skip the repairs and open houses. Get a no obligation cash offer and close when you choose.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#contact" className="inline-block px-6 py-3 rounded-md bg-brandGreen text-white font-semibold">Get Offer</a>
            <a className="inline-block px-6 py-3 rounded-md border border-brandBlue text-brandBlue font-medium">Learn How</a>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <div className="bg-gradient-to-br from-brandBlue/20 to-brandGreen/10 rounded-xl p-6">
            <img src="/house-sample.png" alt="House" className="w-full rounded-md" />
          </div>
        </div>
      </div>
    </section>
  );
}
