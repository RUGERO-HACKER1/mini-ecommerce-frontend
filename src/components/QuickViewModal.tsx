import type { Product } from "../data/products";

type Props = {
  product: Product | null;
  onClose: () => void;
};

export default function QuickViewModal({ product, onClose }: Props) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover mb-4"
        />
        <h2 className="text-xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-2">{product.price}</p>
        <p className="text-sm text-gray-700 mb-4">{product.description}</p>
        <button
          onClick={onClose}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}
