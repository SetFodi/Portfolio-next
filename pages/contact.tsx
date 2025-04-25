import type { NextPage } from 'next';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const Contact: NextPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFocus = (field: string) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset after showing success
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    }, 1500);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Contact info items
  const contactItems = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "contact@lawportfolio.com",
      color: "bg-blue-500/10 text-blue-400"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+995 599 123 456",
      color: "bg-green-500/10 text-green-400"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Address",
      value: "Tbilisi State University, Georgia",
      color: "bg-red-500/10 text-red-400"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-gray-900 to-transparent z-0"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-24 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-extrabold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-accent via-amber-300 to-accent bg-clip-text text-transparent">
                Get in Touch
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Have a question or want to discuss a collaboration? Send me a message and I'll get back to you as soon as possible.
            </motion.p>
            <motion.div 
              className="h-1 w-20 bg-accent mx-auto rounded mt-6"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div 
              className="md:col-span-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8 relative inline-block">
                Contact Information
                <motion.div 
                  className="absolute -bottom-2 left-0 h-1 bg-accent"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </h2>
              

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-6"
              >
                {contactItems.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start p-5 rounded-lg bg-gray-800/70 backdrop-blur-sm border border-gray-700 shadow-lg hover:shadow-accent/5 transition-shadow"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center mr-4`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">{item.title}</h3>
                      <p className="text-gray-300">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Additional Information */}
              <motion.div
                className="mt-12 p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-accent/20 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h3 className="text-xl font-semibold text-accent mb-3">Office Hours</h3>
                <p className="text-gray-300 mb-4">
                  Available for meetings and consultations:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-accent">9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-accent">10:00 AM - 3:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-accent">Closed</span>
                  </li>
                </ul>
                
                <div className="mt-6 pt-4 border-t border-gray-700">
                  <p className="text-gray-300 italic">
                    For urgent matters, please indicate this in your message.
                  </p>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              className="md:col-span-3"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8 relative inline-block">
                Send a Message
                <motion.div 
                  className="absolute -bottom-2 left-0 h-1 bg-accent"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </h2>

              {/* Success Message */}
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-900/20 backdrop-blur-md border border-green-500/30 rounded-lg p-8 text-center"
                >
                  <div className="bg-green-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaCheckCircle className="text-green-400 text-4xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-300">
                    Thank you for getting in touch. I'll respond to your message as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  className="bg-gray-900/60 backdrop-blur-md border border-gray-700 shadow-xl rounded-lg p-8"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Name Input */}
                      <motion.div
                        className="relative group"
                        whileHover={{ scale: 1.01 }}
                        animate={focusedField === 'name' ? { scale: 1.01 } : { scale: 1 }}
                      >
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => handleFocus('name')}
                          onBlur={handleBlur}
                          required
                          className="peer w-full bg-gray-800/50 border border-gray-600 rounded-md px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all placeholder-transparent"
                          placeholder="Your name"
                        />
                        <label
                          htmlFor="name"
                          className={`absolute left-4 -top-6 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-accent ${focusedField === 'name' ? 'text-accent' : ''}`}
                        >
                          Name
                        </label>
                        <div className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300 ${focusedField === 'name' ? 'w-full' : 'w-0'}`}></div>
                      </motion.div>

                      {/* Email Input */}
                      <motion.div
                        className="relative group"
                        whileHover={{ scale: 1.01 }}
                        animate={focusedField === 'email' ? { scale: 1.01 } : { scale: 1 }}
                      >
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => handleFocus('email')}
                          onBlur={handleBlur}
                          required
                          className="peer w-full bg-gray-800/50 border border-gray-600 rounded-md px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all placeholder-transparent"
                          placeholder="Your email"
                        />
                        <label
                          htmlFor="email"
                          className={`absolute left-4 -top-6 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-accent ${focusedField === 'email' ? 'text-accent' : ''}`}
                        >
                          Email
                        </label>
                        <div className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300 ${focusedField === 'email' ? 'w-full' : 'w-0'}`}></div>
                      </motion.div>
                    </div>

                    {/* Subject Select */}
                    <motion.div
                      className="relative group"
                      whileHover={{ scale: 1.01 }}
                      animate={focusedField === 'subject' ? { scale: 1.01 } : { scale: 1 }}
                    >
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => handleFocus('subject')}
                        onBlur={handleBlur}
                        required
                        className="peer w-full bg-gray-800/50 border border-gray-600 rounded-md px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      >
                        <option value="" disabled>Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="collaboration">Collaboration</option>
                        <option value="legal">Legal Consultation</option>
                        <option value="research">Research Opportunity</option>
                      </select>
                      <label
                        htmlFor="subject"
                        className={`absolute left-4 -top-6 text-sm text-gray-400 transition-all ${focusedField === 'subject' ? 'text-accent' : ''}`}
                      >
                        Subject
                      </label>
                      <div className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300 ${focusedField === 'subject' ? 'w-full' : 'w-0'}`}></div>
                    </motion.div>

                    {/* Message Input */}
                    <motion.div
                      className="relative group"
                      whileHover={{ scale: 1.01 }}
                      animate={focusedField === 'message' ? { scale: 1.01 } : { scale: 1 }}
                    >
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => handleFocus('message')}
                        onBlur={handleBlur}
                        required
                        className="peer w-full bg-gray-800/50 border border-gray-600 rounded-md px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all placeholder-transparent resize-none"
                        placeholder="Your message"
                      ></textarea>
                      <label
                        htmlFor="message"
                        className={`absolute left-4 -top-6 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-accent ${focusedField === 'message' ? 'text-accent' : ''}`}
                      >
                        Message
                      </label>
                      <div className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300 ${focusedField === 'message' ? 'w-full' : 'w-0'}`}></div>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full flex items-center justify-center gap-2 bg-accent text-gray-900 py-4 rounded-md hover:bg-yellow-600 transition-all shadow-lg font-semibold ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane />
                          Send Message
                        </>
                      )}
                    </motion.button>

                    {/* Security note */}
                    <div className="text-center text-gray-400 text-sm mt-6">
                      <p>Your information is secure and will not be shared with third parties.</p>
                    </div>
                  </form>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
