import { useEffect, useState } from "react";
import { fetchCart, placeOrder, updateCartItem, removeCartItem } from "../utils/api";
type Product = {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
};

type CartItem = {
  _id: string;
  productId: Product;
  quantity: number;
};

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Fetch cart items from backend
  const loadCart = async () => {
    try {
      const res = await fetchCart();
      console.log("Cart fetched from backend:", res.data);
      // Backend returns { data: [...] }
      setCartItems(Array.isArray(res.data.data) ? res.data.data : []);
    } catch (err) {
      console.error("Error fetching cart:", err);
      setCartItems([]);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  // Place order
  const handlePlaceOrder = async () => {
    try {
      await placeOrder();
      alert("Order placed successfully!");
      setCartItems([]);
    } catch (err) {
      console.error("Error placing order:", err);
      alert("Failed to place order.");
    }
  };

  // Update item quantity
  const handleUpdateQuantity = async (productId: string, newQty: number) => {
    if (newQty < 1) return;
    try {
      await updateCartItem(productId, newQty);
      loadCart();
    } catch (err) {
      console.error("Error updating cart item:", err);
    }
  };

  // Remove item from cart
  const handleRemoveItem = async (productId: string) => {
    try {
      await removeCartItem(productId);
      loadCart();
    } catch (err) {
      console.error("Error removing cart item:", err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="mt-4 text-gray-700">No items in cart yet.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item._id} className="flex items-center gap-4 mb-4">
              <img
                src={item.productId.imageUrl}
                alt={item.productId.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1">
                <h2 className="font-semibold">{item.productId.name}</h2>
                <div className="flex items-center gap-2 mt-1">
                  <button
                    onClick={() =>
                      handleUpdateQuantity(item.productId._id, item.quantity - 1)
                    }
                    disabled={item.quantity <= 1}
                    className="px-2 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      handleUpdateQuantity(item.productId._id, item.quantity + 1)
                    }
                    className="px-2 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>
                <p className="text-blue-600 mt-1">
                  ${(item.productId.price * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => handleRemoveItem(item.productId._id)}
                  className="text-red-500 text-sm mt-1 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <button
            onClick={handlePlaceOrder}
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 mt-4"
          >
            Place Order
          </button>
        </>
      )}

      {/* Optional debug: view raw cart data */}
      <pre className="mt-6">{JSON.stringify(cartItems, null, 2)}</pre>
    </div>
  );
}
