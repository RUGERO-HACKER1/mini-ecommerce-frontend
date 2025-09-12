import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import type { Product } from "../data/products";

export default function ProductsPage() {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const handleQuickView = (product: Product) => {
    console.log("Quick View:", product);
  };

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => [...prev, product]);
    console.log("Cart Items:", [...cartItems, product]);
  };

  return (
    <section className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onQuickView={handleQuickView}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </section>
  );
}
