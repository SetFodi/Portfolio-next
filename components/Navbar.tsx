import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 bg-opacity-90 backdrop-blur-lg shadow fixed w-full z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-yellow-500 hover:text-yellow-400 transition-all duration-300">
          Law Portfolio
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-300 hover:text-white transition-all duration-300">
            Home
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white transition-all duration-300">
            About
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white transition-all duration-300">
            Contact
          </Link>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white focus:outline-none transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 bg-opacity-95 backdrop-blur-sm shadow-md">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link href="/" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-white transition-all duration-300">
              Home
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-white transition-all duration-300">
              About
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-white transition-all duration-300">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
