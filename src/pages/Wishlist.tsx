import { useState } from "react";

interface WishlistItem {
  id: string;
  product: string;
  price: string;
  status: "In Stock" | "Out of Stock";
  image: string;
  dateAdded: string;
}

const sampleWishlist: WishlistItem[] = [
  { id: "#W001", product: "Nike Shoes", price: "$120", status: "In Stock", image: "/public/ima.png", dateAdded: "2025-09-01" },
  { id: "#W002", product: "iPhone Case", price: "$25", status: "In Stock", image: "/public/imag1.png", dateAdded: "2025-09-05" },
  { id: "#W003", product: "Headphones", price: "$60", status: "Out of Stock", image: "/public/imag3.png", dateAdded: "2025-09-07" },
  { id: "#W004", product: "Backpack", price: "$80", status: "In Stock", image: "/public/image.png", dateAdded: "2025-09-09" },
];

export default function Wishlist() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredWishlist = sampleWishlist.filter(item => {
    return (
      (item.product.toLowerCase().includes(search.toLowerCase()) ||
        item.id.toLowerCase().includes(search.toLowerCase())) &&
      (statusFilter === "All" || item.status === statusFilter)
    );
  });

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Page Header */}
      <div className="mb-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <h1 className="text-3xl font-bold text-gray-800">Wishlist</h1>
        <span className="text-gray-600">Your saved items for later</span>
      </div>

      {/* Card Container */}
      <div className="bg-white rounded-xl shadow p-6">
        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
          <input
            type="text"
            placeholder="Search by Product or ID"
            className="border border-gray-300 p-2 rounded-lg w-full md:w-1/2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="border border-gray-300 p-2 rounded-lg w-full md:w-1/4 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All Status</option>
            <option value="In Stock">In Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
        </div>

        {/* Wishlist Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 font-medium text-gray-600">Product</th>
                <th className="py-3 px-4 font-medium text-gray-600">Price</th>
                <th className="py-3 px-4 font-medium text-gray-600">Status</th>
                <th className="py-3 px-4 font-medium text-gray-600">Date Added</th>
                <th className="py-3 px-4 font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredWishlist.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center py-6 text-gray-500">
                    No items found.
                  </td>
                </tr>
              )}
              {filteredWishlist.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50 transition duration-150">
                  <td className="py-3 px-4 flex items-center gap-3">
                    <img src={item.image} alt={item.product} className="w-12 h-12 rounded-lg object-cover" />
                    <span className="font-medium text-gray-800">{item.product}</span>
                  </td>
                  <td className="py-3 px-4 text-gray-700">{item.price}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        item.status === "In Stock"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-500">{item.dateAdded}</td>
                  <td className="py-3 px-4 space-x-2">
                    <button className="text-blue-500 hover:underline">View</button>
                    <button className="text-red-500 hover:underline">Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
