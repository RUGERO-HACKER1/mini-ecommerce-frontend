import type { Product } from "../data/products";

type Props = {
  product: Product;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
};

export default function ProductCard({ product, onQuickView, onAddToCart }: Props) {
  return (
    <div className="bg-white shadow rounded overflow-hidden group relative">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover transition duration-300 group-hover:scale-105"
        />
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
          -30%
        </span>
      </div>

      <div className="p-4 text-center">
        <h3 className="font-bold text-lg">{product.name}</h3>
        <p className="text-gray-600">{product.price}</p>

        <button
          onClick={() => onQuickView(product)}
          className="mt-2 text-sm text-blue-600 hover:underline block"
        >
          Quick View
        </button>

        <button
          onClick={() => onAddToCart(product)}
          className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
