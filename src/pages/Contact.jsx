import React, { useState } from 'react';
import toast from 'react-hot-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // You can handle actual form logic here
    toast.success('Sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 sm:p-8 bg-cyan-50 rounded-2xl shadow-lg border border-teal-200">
      <h2 className="text-2xl sm:text-3xl font-bold text-teal-800 mb-6 text-center">
        Contact Us
      </h2>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-teal-700 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white text-black"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-teal-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white text-black"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-teal-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white text-black"
            required
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full sm:w-1/2 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}