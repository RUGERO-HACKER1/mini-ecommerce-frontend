import { useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 import navigate hook

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // 👈 create navigate instance

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Here you can call your backend API for login
    // Example:
    // const res = await fetch("http://localhost:5000/api/login", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ email, password }),
    // });
    // const data = await res.json();

    // For now, let's assume login is successful:
    console.log("Logging in with:", { email, password });

    // ✅ Redirect to dashboard
    navigate("/dashboard");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Left Side */}
        <div className="bg-yellow-400 p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Login</h2>
          <p className="text-gray-800 text-sm">
            Get access to your Orders, Wishlist and Recommendations.
          </p>
        </div>

        {/* Right Side */}
        <form onSubmit={handleSubmit} className="p-10 space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Enter Username / Email address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Enter Password
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="••••••••"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {/* Eye Icon (static for now) */}
              <span className="absolute right-3 top-2.5 text-gray-400 cursor-pointer">
                👁️
              </span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <label className="flex items-center text-sm text-gray-600">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-sm text-yellow-500 hover:underline">
                Lost your password?
              </a>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-yellow-400 py-2.5 rounded-lg font-semibold hover:bg-gray-900 transition"
          >
            LOG IN
          </button>
        </form>
      </div>
    </section>
  );
}
