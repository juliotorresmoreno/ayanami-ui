"use client";

import { useState } from "react";
import { contactSchema } from "@/validation/contactValidation";

export default function Contact() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ success: false, message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    validateField(e.target.id, e.target.value);
  };

  const validateField = (field: string, value: string) => {
    const { error } = contactSchema.extract(field).validate(value);
    setErrors({ ...errors, [field]: error ? error.message : "" });
  };

  const validateForm = () => {
    const { error } = contactSchema.validate(formData, { abortEarly: false });
    if (error) {
      const errorMessages = { name: "", email: "", message: "" };
      error.details.forEach((detail) => {
        errorMessages[detail.path[0] as keyof typeof errorMessages] = detail.message;
      });
      setErrors(errorMessages);
      return false;
    }
    setErrors({ name: "", email: "", message: "" });
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setStatus({ success: false, message: "Sending message..." });

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ success: true, message: result.message });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ success: false, message: result.message });
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      setStatus({ success: false, message: "An error occurred. Please try again later." });
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 animate-fade-in-up">
          Ready to Transform Your Data?
        </h2>
        <p className="mt-4 text-lg text-gray-600 animate-fade-in-up animation-delay-200">
          Get in touch with us to learn how Petra can help you unlock the full potential of your data.
        </p>

        <button
          onClick={() => setShowForm(true)}
          className="mt-8 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 animate-fade-in-up animation-delay-400"
        >
          Contact Us
        </button>

        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md relative">
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

              <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">
                Contact Us
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-lg text-gray-700 text-left mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-lg text-gray-700 text-left mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-lg text-gray-700 text-left mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  ></textarea>
                  {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Send Message
                </button>

                {status.message && (
                  <p
                    className={`mt-4 text-sm ${
                      status.success ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {status.message}
                  </p>
                )}
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}