import { useState } from "react";

interface Order {
  id: string;
  product: string;
  status: "Completed" | "Pending" | "Cancelled";
  amount: string;
  date: string;
}

const sampleOrders: Order[] = [
  { id: "#1001", product: "Nike Shoes", status: "Completed", amount: "$120", date: "2025-09-01" },
  { id: "#1002", product: "iPhone Case", status: "Pending", amount: "$25", date: "2025-09-05" },
  { id: "#1003", product: "Headphones", status: "Cancelled", amount: "$60", date: "2025-09-07" },
  { id: "#1004", product: "Backpack", status: "Completed", amount: "$80", date: "2025-09-09" },
];

export default function Orders() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredOrders = sampleOrders.filter(order => {
    return (
      (order.product.toLowerCase().includes(search.toLowerCase()) ||
        order.id.toLowerCase().includes(search.toLowerCase())) &&
      (statusFilter === "All" || order.status === statusFilter)
    );
  });

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Page Header */}
      <div className="mb-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <h1 className="text-3xl font-bold text-gray-800">Orders</h1>
        <span className="text-gray-600">Manage your orders efficiently</span>
      </div>

      {/* Card Container */}
      <div className="bg-white rounded-xl shadow p-6">
        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
          <input
            type="text"
            placeholder="Search by Order ID or Product"
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
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>

        {/* Orders Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 font-medium text-gray-600">Order ID</th>
                <th className="py-3 px-4 font-medium text-gray-600">Product</th>
                <th className="py-3 px-4 font-medium text-gray-600">Status</th>
                <th className="py-3 px-4 font-medium text-gray-600">Amount</th>
                <th className="py-3 px-4 font-medium text-gray-600">Date</th>
                <th className="py-3 px-4 font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center py-6 text-gray-500">
                    No orders found.
                  </td>
                </tr>
              )}
              {filteredOrders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b hover:bg-gray-50 transition duration-150"
                >
                  <td className="py-3 px-4 font-medium text-gray-800">{order.id}</td>
                  <td className="py-3 px-4 text-gray-700">{order.product}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        order.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : order.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-700">{order.amount}</td>
                  <td className="py-3 px-4 text-gray-500">{order.date}</td>
                  <td className="py-3 px-4 space-x-2">
                    <button className="text-blue-500 hover:underline">View</button>
                    {order.status === "Pending" && (
                      <button className="text-red-500 hover:underline">Cancel</button>
                    )}
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
