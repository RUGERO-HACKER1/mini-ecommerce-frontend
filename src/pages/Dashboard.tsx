import { useNavigate, Link } from "react-router-dom";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const ordersData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Orders",
        data: [50, 75, 60, 90, 100, 120],
        backgroundColor: "rgba(245, 158, 11, 0.6)",
      },
    ],
  };

  const revenueData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue ($)",
        data: [1000, 1500, 1200, 2500, 3000, 3500],
        fill: true,
        backgroundColor: "rgba(245, 158, 11, 0.2)",
        borderColor: "rgba(245, 158, 11, 1)",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-yellow-400 flex flex-col p-6">
        <h2 className="text-2xl font-bold mb-8">MyShop</h2>
        <nav className="flex-1 space-y-4">
          <Link to="/dashboard" className="block hover:text-white">🏠 Dashboard</Link>
          <Link to="/orders" className="block hover:text-white">📦 Orders</Link>
          <Link to="/wishlist" className="block hover:text-white">❤️ Wishlist</Link>
          <Link to="/profile" className="block hover:text-white">👤 Profile</Link>
          <Link to="/settings" className="block hover:text-white">⚙️ Settings</Link>
        </nav>
        <button
          onClick={handleLogout}
          className="mt-auto bg-yellow-400 text-black font-semibold py-2 rounded-lg hover:bg-yellow-300"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Topbar */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <span className="text-gray-600">Welcome back, User 👋</span>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h2 className="text-xl font-bold text-gray-800">Orders</h2>
            <p className="text-3xl font-bold text-yellow-500">120</p>
            <p className="text-sm text-gray-500">Total this month</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h2 className="text-xl font-bold text-gray-800">Wishlist</h2>
            <p className="text-3xl font-bold text-yellow-500">45</p>
            <p className="text-sm text-gray-500">Saved items</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h2 className="text-xl font-bold text-gray-800">Revenue</h2>
            <p className="text-3xl font-bold text-yellow-500">$3,500</p>
            <p className="text-sm text-gray-500">This month</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Monthly Orders</h2>
            <Bar data={ordersData} />
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Revenue Trends</h2>
            <Line data={revenueData} />
          </div>
        </div>

        {/* Recent Orders Table */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Orders</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-2">Order ID</th>
                <th className="py-2">Product</th>
                <th className="py-2">Status</th>
                <th className="py-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td>#1001</td>
                <td>Nike Shoes</td>
                <td><span className="text-green-500">Completed</span></td>
                <td>$120</td>
              </tr>
              <tr className="border-b">
                <td>#1002</td>
                <td>iPhone Case</td>
                <td><span className="text-yellow-500">Pending</span></td>
                <td>$25</td>
              </tr>
              <tr>
                <td>#1003</td>
                <td>Headphones</td>
                <td><span className="text-red-500">Cancelled</span></td>
                <td>$60</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
