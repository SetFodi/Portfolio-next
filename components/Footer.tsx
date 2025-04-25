import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaGavel, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Current year for copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-900 text-gray-300 pt-12 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-2xl opacity-20"></div>
      
      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-10">
          {/* Logo & About */}
          <div>
            <Link href="/" className="flex items-center mb-6 group">
              <motion.div
                whileHover={{ rotate: 15 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <FaGavel className="text-accent text-2xl mr-2" />
              </motion.div>
              <span className="text-xl font-bold text-white">
                <span className="text-accent">L</span>aw <span className="text-accent">P</span>ortfolio
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              A passionate law student at Tbilisi State University focusing on constitutional law, 
              human rights advocacy, and legal research.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://www.facebook.com/temotunadze" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#1877F2" }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/tunadzetemo/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#E1306C" }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#0A66C2" }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </motion.a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 relative inline-block">
              Quick Links
              <motion.div 
                className="absolute -bottom-1 left-0 h-0.5 bg-accent"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </h3>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Me' },
                { href: '/contact', label: 'Contact' },
                { href: '#', label: 'Privacy Policy' },
                { href: '#', label: 'Terms of Service' }
              ].map((link, i) => (
                <motion.li 
                  key={i}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Link href={link.href} className="text-gray-400 hover:text-accent transition-colors inline-block py-1">
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 relative inline-block">
              Stay Updated
              <motion.div 
                className="absolute -bottom-1 left-0 h-0.5 bg-accent"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </h3>
            <p className="text-gray-400 mb-4">
              Subscribe to receive updates on legal research, events, and opportunities.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 border border-gray-700 text-gray-300 py-2 px-4 rounded-l-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent w-full"
                required
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent text-gray-900 py-2 px-4 rounded-r-md flex items-center justify-center"
              >
                <FaEnvelope />
              </motion.button>
            </form>
          </div>
        </div>
        
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>
        
        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pb-10">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Law Portfolio. All rights reserved.
          </p>
          <div className="flex items-center text-sm text-gray-500">
            <span>Made with </span>
            <motion.span
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop" 
              }}
              className="text-accent mx-1"
            >
              ♥
            </motion.span>
            <span> in Tbilisi, Georgia</span>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 bg-accent/90 hover:bg-accent text-gray-900 p-3 rounded-full shadow-lg z-50 transition-all duration-300 ${
          showScrollTop ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </motion.button>
    </footer>
  );
};

export default Footer;