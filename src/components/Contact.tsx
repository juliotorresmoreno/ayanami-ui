"use client";

import { useState } from "react";

export default function Contact() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Call to Action */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 animate-fade-in-up">
          Ready to Transform Your Data?
        </h2>
        <p className="mt-4 text-lg text-gray-600 animate-fade-in-up animation-delay-200">
          Get in touch with us to learn how Petra can help you unlock the full potential of your data.
        </p>

        {/* CTA Button */}
        <button
          onClick={() => setShowForm(true)}
          className="mt-8 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 animate-fade-in-up animation-delay-400"
        >
          Contact Us
        </button>

        {/* Modal */}
        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md relative">
              {/* Close Button */}
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Form Title */}
              <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">
                Contact Us
              </h3>

              {/* Contact Form */}
              <form className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-lg text-gray-700 text-left mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-lg text-gray-700 text-left mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your.email@example.com"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-lg text-gray-700 text-left mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Your Message"
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}