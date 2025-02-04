import type { NextPage } from 'next';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: NextPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for getting in touch!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <motion.section
      className="max-w-3xl mx-auto px-6 py-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <h2 className="text-5xl font-extrabold text-accent text-center mb-8">
        Get in Touch
      </h2>

      {/* Contact Form Container */}
      <motion.div
        className="bg-gray-900 border border-gray-700 shadow-xl rounded-lg p-8 backdrop-blur-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <motion.div
            className="relative"
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="peer w-full bg-transparent border border-gray-600 rounded-md px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-accent transition"
            />
            <label
              htmlFor="name"
              className="absolute left-4 top-3 text-gray-400 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-600 peer-focus:top-3 peer-focus:text-accent"
            >
              Name
            </label>
          </motion.div>

          {/* Email Input */}
          <motion.div
            className="relative"
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="peer w-full bg-transparent border border-gray-600 rounded-md px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-accent transition"
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-3 text-gray-400 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-600 peer-focus:top-3 peer-focus:text-accent"
            >
              Email
            </label>
          </motion.div>

          {/* Message Input */}
          <motion.div
            className="relative"
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="peer w-full bg-transparent border border-gray-600 rounded-md px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-accent transition"
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-4 top-3 text-gray-400 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-600 peer-focus:top-3 peer-focus:text-accent"
            >
              Message
            </label>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-accent text-gray-900 py-3 rounded-md hover:bg-yellow-600 transition transform hover:scale-105 shadow-lg font-semibold"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
