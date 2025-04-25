import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGavel, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activePath, setActivePath] = useState('/');

  // Track scroll position for navbar background opacity
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    // Set initial active path
    setActivePath(window.location.pathname);
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' }
  ];

  const handleLinkClick = (path: string) => {
    setActivePath(path);
    setIsOpen(false);
  };

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900/95 backdrop-blur-lg py-3 shadow-xl' 
          : 'bg-gray-900/70 backdrop-blur-md py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center space-x-2 group"
          onClick={() => handleLinkClick('/')}
        >
          <motion.div
            whileHover={{ rotate: 15 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FaGavel className="text-accent text-3xl" />
          </motion.div>
          <div className="relative overflow-hidden">
            <span className="text-2xl font-extrabold text-white">
              <span className="text-accent">L</span>aw <span className="text-accent">P</span>ortfolio
            </span>
            <motion.div 
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-1">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              onClick={() => handleLinkClick(link.path)}
              className="relative px-4 py-2 group"
            >
              <span className={`relative z-10 font-medium transition-colors duration-300 ${
                activePath === link.path ? 'text-accent' : 'text-gray-300 group-hover:text-white'
              }`}>
                {link.title}
              </span>
              {activePath === link.path && (
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                  layoutId="underline"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <motion.div 
                className="absolute inset-0 rounded-md bg-accent/10 z-0"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            </Link>
          ))}
          
          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/contact"
              onClick={() => handleLinkClick('/contact')}
              className="ml-4 px-6 py-2 bg-accent text-gray-900 font-semibold rounded-md shadow-lg hover:shadow-accent/20 hover:bg-accent/90 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
        
        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white focus:outline-none p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </motion.button>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden bg-gray-900/95 backdrop-blur-lg shadow-2xl"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 py-4 space-y-4 flex flex-col">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.path}
                    onClick={() => handleLinkClick(link.path)}
                    className={`block py-2 px-4 rounded-md transition-colors ${
                      activePath === link.path
                      ? 'text-accent bg-accent/10 font-medium'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                    }`}
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-2"
              >
                <Link
                  href="/contact"
                  onClick={() => handleLinkClick('/contact')}
                  className="block w-full text-center py-3 bg-accent text-gray-900 font-semibold rounded-md shadow-lg hover:bg-accent/90 transition-all"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;