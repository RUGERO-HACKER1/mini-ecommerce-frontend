import { useEffect, useState } from "react";

const images = ["/image.png", "/imag.png", "/imag.png"]; 

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 1000); // Change image every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">BEST SMARTPHONE</p>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">WIRELESS CHARGING STAND</h2>
          <p className="text-lg text-gray-600 mb-4">
            Up To <span className="text-red-600 font-bold">70% Off</span>
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
            BUY NOW
          </button>
        </div>

        <div className="flex-1">
          <img
            src={images[currentIndex]}
            alt={`Promo ${currentIndex + 1}`}
            className="rounded-xl shadow-lg w-full object-cover transition-all duration-700 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
}
