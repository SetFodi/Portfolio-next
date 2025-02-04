import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-10 border-t border-accent">
      <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://www.facebook.com/temotunadze" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.instagram.com/tunadzetemo/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
            <FaInstagram size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
            <FaLinkedin size={24} />
          </a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Tbilisi State University Law Student. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
