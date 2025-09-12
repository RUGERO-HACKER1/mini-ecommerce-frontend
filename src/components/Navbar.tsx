import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-white px-6 py-4 flex items-center justify-between shadow">
      <h1 className="text-3xl font-bold text-gray-900">kapee.</h1>

      <div className="flex-1 mx-6 flex items-center">
        <select className="border px-2 py-1 rounded-l text-sm">
          <option>All Categories</option>
        </select>
        <input
          type="text"
          placeholder="Search for products, categories, brands, sku..."
          className="border-t border-b border-r px-4 py-1 w-full text-sm"
        />
        <button className="bg-black text-yellow-400 px-4 py-1 rounded-r">🔍</button>
      </div>

      <div className="flex items-center gap-6 text-sm">
        <Link to="/signin" className="hover:text-yellow-500">👤 HELLO, SIGN IN</Link>
        <span>🛒 $0.00</span>
      </div>
    </div>
  );
}
