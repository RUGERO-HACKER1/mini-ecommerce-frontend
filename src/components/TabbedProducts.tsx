import { useState } from "react";

const tabs = ["Featured", "Recent", "On Sale", "Top Rated"];

const productsByTab: Record<string, Array<{ name: string; price: string; image: string }>> = {
  Featured: [
    { name: "Apple AirPods", price: "$199.00", image: "/imagee1.jpg" },
    { name: "JBL Bluetooth Speaker", price: "$85.00", image: "/imagee2.jpg" },
    { name: "Ear-O Headphones", price: "$124.00", image: "/imagee3.jpg" },
  ],
  Recent: [
    { name: "iPhone 11 Pro Max", price: "$199.00 – $256.00", image: "/imag7.jpg" },
    { name: "Apple Watch Series 5", price: "$85.00", image: "/image3.jpg" },
  ],
  "On Sale": [
    { name: "iPhone 11 Pro Max", price: "$199.00 – $256.00", image: "/image7.jpg" },
    { name: "Apple Watch Series 5", price: "$85.00", image: "/imag0.jpg" },
    { name: "Samsung Gear 360", price: "$85.00", image: "/image8.jpg" },
    { name: "Xbox Controller", price: "$85.00", image: "/imag8.jpg" },
  ],
  "Top Rated": [
    { name: "Samsung VR Headset", price: "$18.00", image: "/image0.jpg" },
  ],
};

export default function TabbedProducts() {
  const [activeTab, setActiveTab] = useState("Featured");

  return (
    <section className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Explore Electronics</h2>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productsByTab[activeTab].map((product, idx) => (
          <div key={idx} className="border rounded-lg p-4 shadow hover:shadow-md transition">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded mb-2"
            />
            <h3 className="font-semibold text-gray-800">{product.name}</h3>
            <p className="text-blue-600 font-bold">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
