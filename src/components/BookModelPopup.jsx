import React, { useState } from "react";

const BookModelPopup = ({ isOpen, onClose, modelName }) => {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/book-model", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, modelName }),
      });
      if (res.ok) {
        setSuccess(true);
        setForm({ name: "", phone: "", email: "" });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-2 sm:p-4 overflow-y-auto">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl relative p-6 mx-auto">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-blue-600 text-2xl font-bold"
          aria-label="Close popup"
        >
          &times;
        </button>
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-blue-700 mb-2">Book a Model</h2>
          <p className="text-orange-500 font-semibold mb-2">Special Discount on Your First Model Booking!</p>
          <p className="text-gray-600 text-sm mb-2">Model: <span className="font-bold text-black">{modelName}</span></p>
        </div>
        {success ? (
          <div className="text-center py-8">
            <div className="text-3xl mb-2 text-orange-500">🎉</div>
            <div className="text-lg font-semibold text-blue-700 mb-2">Thank you for booking!</div>
            <div className="text-gray-700">Our team will contact you soon with your special offer.</div>
            <button
              className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
              onClick={onClose}
            >Close</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name*"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-gray-900"
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                required
                placeholder="Phone Number*"
                value={form.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-gray-900"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email (Optional)"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-gray-900"
              />
            </div>
            {error && <div className="text-red-500 text-center text-sm">{error}</div>}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center bg-orange-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-full transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed text-center"
            >
              {isSubmitting ? "Booking..." : "Book Model & Get Discount"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default BookModelPopup; 