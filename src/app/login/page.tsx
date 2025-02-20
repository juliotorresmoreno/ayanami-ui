import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-50 mt-16">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Login</h2>
          <form className="space-y-6">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-lg text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="your.email@example.com"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-lg text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Your Password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Login
            </button>

            {/* Reset Password and Change Password Links */}
            <div className="flex justify-between mt-4">
              <Link
                href="/reset-password"
                className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
              >
                Reset Password
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}