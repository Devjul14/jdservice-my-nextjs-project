export default function Hero() {
    return (
      <div className="mx-auto px-4 py-12 bg-gray-100">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Column - Text Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900">
              <span className="lg:text-6xl block">Temukan!</span>
              layanan yang kamu cari di sini.
            </h1>

            <p className="text-gray-500 text-base md:text-lg">
              Solusi tepat untuk setiap kebutuhanmu, nikmati kemudahan yang
              ditawarkan.
            </p>
          </div>

          {/* Right Column - Images */}
          <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Main larger image */}
            <div className="col-span-2 md:col-span-1 row-span-2">
              <img
                src="images/acrepair.jpg"
                alt="People working on laptops"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Top right smaller image */}
            <div className="md:col-span-1">
              <img
                src="images/massage.jpg"
                alt="Coffee and work setup"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Bottom right smaller image */}
            <div className="md:col-span-1">
              <img
                src="images/tukang.jpg"
                alt="Team collaboration"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    );
}