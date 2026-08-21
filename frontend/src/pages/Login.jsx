import { useState, useContext } from "react";
import { Mail, Lock, Eye, EyeOff, ShoppingBag } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../api/base";
import { AuthContext } from "../context/AuthProvider";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const { setIsAuthenticated } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const nav = useNavigate();

  const onChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/api/token/`, {
        username: form.username,
        password: form.password,
      });
      setIsAuthenticated(true);
      localStorage.setItem("access_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);

      nav("/profile", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl grid lg:grid-cols-2">
        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-center bg-[#112B63] p-14 text-white">
          <div className="flex items-center gap-3">
            <ShoppingBag size={40} />
            <h1 className="text-4xl font-black">Fullstack BokJoe</h1>
          </div>

          <h2 className="mt-16 text-5xl font-bold leading-tight">
            Welcome Back!
          </h2>

          <p className="mt-6 text-lg text-blue-100 leading-8">
            Sign in to continue shopping and manage your orders, wishlist, and
            account.
          </p>

          <div className="mt-12 rounded-2xl bg-white/10 p-6">
            <h3 className="text-xl font-semibold">Why Shop With Us?</h3>

            <ul className="mt-5 space-y-3 text-blue-100">
              <li>✔ Premium Networking Equipment</li>
              <li>✔ Fast Nationwide Delivery</li>
              <li>✔ Secure Online Payment</li>
              <li>✔ Trusted Cisco Partner</li>
            </ul>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-10 lg:p-16">
          <h2 className="text-4xl font-bold text-slate-800">Sign In</h2>

          <p className="mt-2 text-gray-500">Login to your account</p>

          <form onSubmit={onSubmit} className="mt-10 space-y-6">
            {/* Username */}
            <div>
              <label className="mb-2 block font-medium">Username</label>

              <div className="flex items-center rounded-xl border px-4">
                <Mail size={20} className="text-gray-400" />

                <input
                  name="username"
                  value={form.username}
                  onChange={onChange}
                  type="text"
                  placeholder="Enter your username"
                  className="w-full bg-transparent px-3 py-4 outline-none"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block font-medium">Password</label>

              <div className="flex items-center rounded-xl border px-4">
                <Lock size={20} className="text-gray-400" />

                <input
                  name="password"
                  value={form.password}
                  onChange={onChange}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full bg-transparent px-3 py-4 outline-none"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="text-gray-500" />
                  ) : (
                    <Eye className="text-gray-500" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />

                <span className="text-sm">Remember me</span>
              </label>

              <a href="#" className="text-blue-600 hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-[#112B63] py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
            >
              Sign In
            </button>
          </form>

          <p className="mt-8 text-center text-gray-500">
            Don't have an account?
            <Link to="/register" className="ml-2 font-semibold text-blue-600">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
