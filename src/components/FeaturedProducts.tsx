const products = [
  {
    id: 1,
    name: "Wireless Charging Stand",
    price: "$35",
    image: "/image.png",
    discount: "-30%",
  },
  {
    id: 2,
    name: "Smartphone X",
    price: "$799",
    image: "/imag.png",
    discount: "-30%",
  },
  {
    id: 3,
    name: "Noise-Cancelling Headphones",
    price: "$109",
    image: "/ima.png",
    discount: "-30%",
  },
];

export default function FeaturedProducts() {
 
const handleAddToCart = (product: typeof products[number]) => {
  console.log("🛒 Added to Cart:", product);
};


  return (
    <section className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col justify-between border rounded-lg p-4 shadow hover:shadow-md transition"
          >
            {/* Image + Discount */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded"
              />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                {product.discount}
              </span>
            </div>

            {/* Product Info */}
            <div className="mt-4 flex-1 flex flex-col items-center text-center">
              <h3 className="font-semibold text-gray-800 text-lg">{product.name}</h3>
              <p className="text-blue-600 font-bold text-base">{product.price}</p>
            </div>

            {/* Buttons */}
            <div className="mt-4 flex flex-col gap-2">
              <button className="text-sm text-blue-600 hover:underline">Quick View</button>
              <button
                onClick={ () => handleAddToCart(product)}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
