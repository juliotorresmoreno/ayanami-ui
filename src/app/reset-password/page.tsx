import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default function ResetPassword() {
  return (
    <>
      <Header />

      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Reset Password</h2>
          <form className="space-y-6">
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
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Reset Password
            </button>
          </form>
          <div className="mt-4 text-center">
            <Link
              href="/login"
              className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
            >
              Back to Login
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}