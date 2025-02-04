import type { NextPage } from 'next';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGavel, FaBalanceScale, FaTrophy, FaUsers } from 'react-icons/fa';

const Home: NextPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center" 
        style={{ backgroundImage: "url('/lawbg.jpg')" }}
      >
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative text-center space-y-8 px-4">
          <div className="gold-border pb-2">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-accent via-amber-200 to-accent bg-clip-text text-transparent">
              Law Portfolio
            </h1>
          </div>

          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-300 leading-relaxed">
            Pursuing justice through academic excellence at Tbilisi State University
          </p>

          <Link href="/about">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="bg-accent text-gray-900 px-8 py-4 my-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Explore My Journey
            </motion.button>
          </Link>
        </div>
      </section>

      {/* New "Why Choose Me?" Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-5xl font-extrabold text-accent mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Why Choose Me?
          </motion.h2>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
            With a strong legal background, professional ethics, and a passion for justice, I bring experience in advocacy, legal research, and human rights law.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Card 1 */}
            <motion.div
              className="p-8 bg-gray-800 rounded-xl border border-accent/20 shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <FaGavel size={40} className="text-accent mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-accent">15+</h3>
              <p className="text-gray-400">Mock Trials & Moot Court Cases</p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="p-8 bg-gray-800 rounded-xl border border-accent/20 shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <FaBalanceScale size={40} className="text-accent mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-accent">3.9 GPA</h3>
              <p className="text-gray-400">Academic Excellence in Law</p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="p-8 bg-gray-800 rounded-xl border border-accent/20 shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <FaTrophy size={40} className="text-accent mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-accent">5</h3>
              <p className="text-gray-400">Legal Research Papers Published</p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              className="p-8 bg-gray-800 rounded-xl border border-accent/20 shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <FaUsers size={40} className="text-accent mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-accent">100+</h3>
              <p className="text-gray-400">Networking & Legal Community Connections</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
