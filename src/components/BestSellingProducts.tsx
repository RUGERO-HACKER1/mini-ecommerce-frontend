
const products = [
  {
    id: 1,
    name: "Apple Watch Series 5",
    price: "$499.00 – $599.00",
    discount: "17% OFF",
    category: "ELECTRONICS",
    image: "/imag1.png",
  },
  {
    id: 2,
    name: "Xbox One Wireless Controller",
    price: "$25.00",
    original: "$49.00",
    discount: "49% OFF",
    category: "ELECTRONICS",
    image: "/imag2.png",
  },
  {
    id: 3,
    name: "JBL On-Ear Headphones",
    price: "$124.00",
    label: "FEATURED",
    category: "ELECTRONICS",
    image: "/imag3.png",
  },
  {
    id: 4,
    name: "Samsung VR Headset",
    price: "$18.00",
    category: "ELECTRONICS",
    image: "/imag4.png",
  },
  {
    id: 5,
    name: "Apple Watch Black Milanese",
    price: "$599.00",
    category: "ELECTRONICS",
    image: "/imag5.png",
  },
  {
    id: 6,
    name: "Samsung Gear 360 Camera",
    price: "$29.00",
    original: "$49.00",
    discount: "40% OFF",
    category: "ELECTRONICS",
    image: "/gear360.png",
  },
];

export default function BestSellingProducts() {
  return (
    <section className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Best Selling Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow hover:shadow-md transition">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded"
              />
              {product.discount && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  {product.discount}
                </span>
              )}
              {product.label && (
                <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  {product.label}
                </span>
              )}
            </div>
            <p className="text-xs text-gray-500 mt-2">{product.category}</p>
            <h3 className="font-semibold text-gray-800">{product.name}</h3>
            <p className="text-blue-600 font-bold">{product.price}</p>
            {product.original && (
              <p className="text-sm text-gray-500 line-through">{product.original}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
