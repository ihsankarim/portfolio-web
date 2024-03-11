"use client"
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form fields
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form className="max-w-sm mx-auto mt-8" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
          rows="4"
          required
        ></textarea>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-black transition duration-300"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
