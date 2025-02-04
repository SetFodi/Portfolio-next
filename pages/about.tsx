import type { NextPage } from 'next';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin, FaGavel, FaBalanceScale, FaBook } from 'react-icons/fa';

const About: NextPage = () => {
  return (
    <section className="py-28 px-4 bg-gradient-to-b from-background to-gray-900">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Animated Profile Image */}
        <motion.div
          className="relative group"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-accent/60 to-transparent rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
          <Image
            src="/profile.jpg"
            width={600}
            height={800}
            className="rounded-2xl border-2 border-accent/40 shadow-lg"
            alt="Profile"
          />
        </motion.div>

        {/* Animated About Content */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        >
          <h2 className="text-5xl font-extrabold text-accent mb-6">Legal Scholar</h2>

          <motion.p
            className="text-lg text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            As a passionate law student at Tbilisi State University, I focus on constitutional law, human rights advocacy, and legal research.
            My mission is to bridge theoretical knowledge with real-world legal applications, ensuring justice and fairness in society.
          </motion.p>

          <motion.p
            className="text-lg text-gray-300 leading-relaxed mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            With a deep understanding of the legal system, I have worked on **moot court cases, legal research papers, and pro bono consulting**. 
            My experience extends to **human rights law, international law, and legal writing.**
          </motion.p>

          {/* Animated Expertise Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            
            {/* Card 1 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="p-6 bg-gray-900 rounded-xl border border-accent/20 shadow-lg backdrop-blur-md text-center"
            >
              <FaGavel size={40} className="text-accent mx-auto mb-4" />
              <h3 className="text-accent text-2xl font-bold mb-2">15+ Cases</h3>
              <p className="text-sm text-gray-400">Moot Court Experience</p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="p-6 bg-gray-900 rounded-xl border border-accent/20 shadow-lg backdrop-blur-md text-center"
            >
              <FaBalanceScale size={40} className="text-accent mx-auto mb-4" />
              <h3 className="text-accent text-2xl font-bold mb-2">3.9 GPA</h3>
              <p className="text-sm text-gray-400">Academic Excellence</p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="p-6 bg-gray-900 rounded-xl border border-accent/20 shadow-lg backdrop-blur-md text-center"
            >
              <FaBook size={40} className="text-accent mx-auto mb-4" />
              <h3 className="text-accent text-2xl font-bold mb-2">5+ Papers</h3>
              <p className="text-sm text-gray-400">Published Research</p>
            </motion.div>
          </div>

          {/* Social Media Links */}
          <div className="mt-10 text-center">
            <h3 className="text-2xl font-semibold text-gray-300 mb-4">Connect with Me</h3>
            <div className="flex justify-center space-x-6">
              <a href="https://www.facebook.com/temotunadze" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
                <FaFacebook size={30} />
              </a>
              <a href="https://www.instagram.com/tunadzetemo/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
                <FaInstagram size={30} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
