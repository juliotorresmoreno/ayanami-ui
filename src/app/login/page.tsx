"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import { login } from "@/services/auth"; 

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await login({ email, password });

      setSuccess(true);
      setError(null);

      localStorage.setItem("token", response.token);

      window.location.href = "/dashboard";
    } catch (err: unknown) {
      const error = err as Error;
      setError(error.message || "An error occurred during login.");
      setSuccess(false);
    }
  };

  return (
    <>
      <SEOHead
        title="Login"
        description="Login to your account"
      />
      <main>
        <Header />
        <div className="min-h-screen flex items-center justify-center bg-gray-50 mt-16">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md m-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Login</h2>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            {success && (
              <div className="text-green-500 mb-4">Login successful! Redirecting...</div>
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

              <div>
                <label htmlFor="password" className="block text-lg text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Your Password"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Login
              </button>

              <div className="flex justify-between mt-4">
                <Link
                  href="/forgot-password"
                  className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
                >
                  Forgot Password
                </Link>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}