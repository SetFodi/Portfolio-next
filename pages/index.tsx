import type { NextPage } from 'next';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGavel, FaBalanceScale, FaTrophy, FaUsers, FaArrowRight, FaQuoteLeft } from 'react-icons/fa';

const Home: NextPage = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const statItems = [
    {
      icon: <FaGavel size={40} />,
      value: "15+",
      label: "Mock Trials & Moot Court Cases",
      description: "Experience in simulated legal proceedings and competitions"
    },
    {
      icon: <FaBalanceScale size={40} />,
      value: "3.9 GPA",
      label: "Academic Excellence in Law",
      description: "Consistently achieving top grades in legal studies"
    },
    {
      icon: <FaTrophy size={40} />,
      value: "5",
      label: "Legal Research Papers Published",
      description: "Contributing to academic discourse in the legal field"
    },
    {
      icon: <FaUsers size={40} />,
      value: "100+",
      label: "Legal Network Connections",
      description: "Building relationships with law professionals worldwide"
    }
  ];

  return (
    <>
      {/* Hero Section with Parallax Effect */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with parallax effect */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/lawbg.jpg')" }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900/90 z-10"></div>
        
        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center lg:text-left">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
              className="space-y-8"
            >
              <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
                <span className="block text-white">Pursuing</span>
                <motion.span
                  className="bg-gradient-to-r from-accent via-amber-300 to-accent bg-clip-text text-transparent"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
                  }}
                  transition={{ 
                    duration: 15, 
                    ease: 'linear',
                    repeat: Infinity 
                  }}
                >
                  Justice & Truth
                </motion.span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                A law portfolio showcasing academic excellence and legal expertise from Tbilisi State University.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/about" className="inline-flex items-center gap-2 bg-accent text-gray-900 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-accent/30 transition-all duration-300">
                    Explore My Journey
                    <FaArrowRight />
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-transparent border-2 border-accent/50 text-accent px-8 py-4 rounded-lg font-semibold hover:bg-accent/10 transition-all duration-300">
                    Get in Touch
                  </Link>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Decorative Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
              className="hidden lg:block"
            >
              <div className="relative">
                {/* Glowing circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
                
                {/* Scale of justice illustration/icon placeholder */}
                <div className="relative bg-gray-800/50 backdrop-blur-md border border-accent/20 rounded-2xl p-8 shadow-xl transform rotate-3">
                  <FaBalanceScale className="text-accent w-full h-40" />
                  <div className="mt-6 p-4 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-700">
                    <p className="text-lg text-gray-300 italic">
                      <FaQuoteLeft className="inline-block mr-2 text-accent/80" />
                      Justice is the first virtue of social institutions, as truth is of systems of thought.
                    </p>
                    <p className="text-right text-sm text-accent mt-2">- John Rawls</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1,
            delay: 1.5,
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        >
          <div className="w-8 h-12 rounded-full border-2 border-accent/50 flex justify-center">
            <motion.div 
              className="w-1.5 h-3 bg-accent rounded-full mt-2"
              animate={{ 
                y: [0, 15, 0],
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                repeatType: "loop" 
              }}
            />
          </div>
        </motion.div>
      </section>

      {/* Enhanced "Why Choose Me?" Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <motion.div 
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <motion.h2
              className="inline-block text-5xl font-extrabold mb-6 relative"
            >
              <span className="bg-gradient-to-r from-accent to-amber-300 bg-clip-text text-transparent">
                Why Choose Me?
              </span>
              <motion.div 
                className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
              />
            </motion.h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-8">
              With a strong legal background, professional ethics, and a passion for justice,
              I bring experience in advocacy, legal research, and human rights law.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {statItems.map((item, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Card background with glassmorphism */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
                
                <div className="relative p-8 bg-gray-800/80 backdrop-blur-md rounded-xl border border-accent/20 shadow-xl overflow-hidden transition-all duration-300 h-full flex flex-col">
                  {/* Background glow on hover */}
                  <div className="absolute -inset-1 bg-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Icon */}
                  <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-4xl font-bold text-accent mb-2">{item.value}</h3>
                  <p className="text-white font-medium mb-3">{item.label}</p>
                  <p className="text-gray-400 text-sm mt-auto">{item.description}</p>
                  
                  {/* Decoration line */}
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent to-transparent w-0 group-hover:w-full transition-all duration-500"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* New Testimonials Section */}
      <section className="py-28 px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-extrabold text-accent mb-6">What Mentors Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Recommendations from professors and legal professionals who have guided my journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute top-10 left-10 text-accent opacity-20">
                <FaQuoteLeft size={100} />
              </div>
              <div className="relative z-10 bg-gray-900/80 backdrop-blur-md p-8 rounded-xl border border-accent/10 shadow-xl">
                <p className="text-gray-200 text-lg italic mb-6">
                  "An exceptional student who demonstrates remarkable analytical thinking and a profound understanding of constitutional law principles. Their research work shows great promise."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold text-xl">
                    DP
                  </div>
                  <div className="ml-4">
                    <p className="text-white font-semibold">Prof. David Pataraia</p>
                    <p className="text-gray-400 text-sm">Constitutional Law, TSU</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="absolute top-10 left-10 text-accent opacity-20">
                <FaQuoteLeft size={100} />
              </div>
              <div className="relative z-10 bg-gray-900/80 backdrop-blur-md p-8 rounded-xl border border-accent/10 shadow-xl">
                <p className="text-gray-200 text-lg italic mb-6">
                  "Demonstrates exceptional advocacy skills both in written and oral presentations. Their commitment to human rights law is evident in every case they approach."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold text-xl">
                    NT
                  </div>
                  <div className="ml-4">
                    <p className="text-white font-semibold">Nino Tsulaia</p>
                    <p className="text-gray-400 text-sm">Senior Attorney, Human Rights Center</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-accent/50 text-accent px-8 py-4 rounded-lg font-semibold hover:bg-accent/10 transition-all duration-300"
              >
                Learn More About My Expertise
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;