"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { forgotPassword } from "@/services/auth";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await forgotPassword(email);

      setSuccess(true);
      setError(null);
    } catch (err: unknown) {
      const error = err as Error;
      setError(error.message || "An error occurred while resetting the password.");
      setSuccess(false);
    }
  };

  return (
    <>
      <Header />

      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Forgot Password</h2>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          {success && (
            <div className="text-green-500 mb-4">
              Password reset instructions have been sent to your email.
            </div>
          )}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-lg text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="your.email@example.com"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
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