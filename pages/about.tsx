import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin, 
  FaGavel, 
  FaBalanceScale, 
  FaBook, 
  FaUserGraduate,
  FaRegLightbulb,
  FaUniversity,
  FaGlobe,
  FaAward
} from 'react-icons/fa';

const About: NextPage = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [1, 1, 0.5]);

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
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

  const skills = [
    { icon: <FaGavel />, text: "Civil Litigation" },
    { icon: <FaUserGraduate />, text: "Constitutional Law" },
    { icon: <FaRegLightbulb />, text: "Legal Research" },
    { icon: <FaBalanceScale />, text: "Human Rights Law" },
    { icon: <FaUniversity />, text: "Legal Writing" },
    { icon: <FaGlobe />, text: "International Law" }
  ];

  const timeline = [
    {
      year: "2023",
      title: "National Moot Court Competition",
      description: "Finalist in the Constitutional Law division representing Tbilisi State University"
    },
    {
      year: "2022",
      title: "Legal Research Publication",
      description: "Co-authored paper on &apos;Digital Rights and Constitutional Protections in Georgia&apos;"
    },
    {
      year: "2021",
      title: "Human Rights Center Internship",
      description: "Assisted with case research and documentation for asylum seekers"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-gray-900 to-transparent z-0"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-24 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 pt-10 relative z-10">
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
                About Me
              </span>
            </motion.h1>
            <motion.div 
              className="h-1 w-20 bg-accent mx-auto rounded"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-10 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Profile Image with Parallax Effect */}
            <motion.div
              className="relative z-10 order-2 md:order-1"
              style={{ scale, opacity }}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-tr from-accent/20 to-transparent rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-all duration-700"></div>
                <div className="absolute inset-0 border-2 border-accent/30 rounded-2xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
                <div className="absolute inset-0 border-2 border-accent/20 rounded-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-[1.01] transition-transform duration-500">
                  <Image
                    src="/profile.jpg"
                    width={600}
                    height={800}
                    className="rounded-2xl"
                    alt="Profile"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 inset-x-0 p-6">
                    <div className="flex items-center space-x-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-12 h-12 bg-accent rounded-full flex items-center justify-center"
                      >
                        <FaGavel className="text-gray-900 text-xl" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-white">Temo Tunadze</h3>
                        <p className="text-accent/90">Law Student & Researcher</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-6">
                <motion.div
                  whileHover={{ y: -8 }}
                  className="p-4 bg-gray-800/80 backdrop-blur-md rounded-xl border border-accent/20 shadow-lg text-center"
                >
                  <FaGavel size={30} className="text-accent mx-auto mb-2" />
                  <h3 className="text-accent text-2xl font-bold mb-1">15+</h3>
                  <p className="text-xs text-gray-400">Moot Court Cases</p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -8 }}
                  className="p-4 bg-gray-800/80 backdrop-blur-md rounded-xl border border-accent/20 shadow-lg text-center"
                >
                  <FaBalanceScale size={30} className="text-accent mx-auto mb-2" />
                  <h3 className="text-accent text-2xl font-bold mb-1">3.9</h3>
                  <p className="text-xs text-gray-400">GPA</p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -8 }}
                  className="p-4 bg-gray-800/80 backdrop-blur-md rounded-xl border border-accent/20 shadow-lg text-center"
                >
                  <FaBook size={30} className="text-accent mx-auto mb-2" />
                  <h3 className="text-accent text-2xl font-bold mb-1">5+</h3>
                  <p className="text-xs text-gray-400">Published Papers</p>
                </motion.div>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div
              className="order-1 md:order-2"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            >
              <h2 className="text-5xl font-extrabold text-accent mb-6 relative inline-block">
                Legal Scholar
                <motion.div 
                  className="absolute -bottom-2 left-0 h-1 bg-accent"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </h2>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="space-y-6"
              >
                <motion.p
                  variants={fadeIn}
                  className="text-lg text-gray-300 leading-relaxed"
                >
                  As a passionate law student at Tbilisi State University, I focus on constitutional law, human rights advocacy, and legal research.
                  My mission is to bridge theoretical knowledge with real-world legal applications, ensuring justice and fairness in society.
                </motion.p>

                <motion.p
                  variants={fadeIn}
                  className="text-lg text-gray-300 leading-relaxed"
                >
                  With a deep understanding of the legal system, I have worked on <span className="text-accent font-semibold">moot court cases, legal research papers, and pro bono consulting</span>.
                  My experience extends to <span className="text-accent font-semibold">human rights law, international law, and legal writing</span>.
                </motion.p>
                
                {/* Skills Section */}
                <motion.div variants={fadeIn} className="mt-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Areas of Expertise</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-3 p-3 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700"
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(245, 158, 11, 0.1)' }}
                      >
                        <div className="text-accent">{skill.icon}</div>
                        <span className="text-gray-200">{skill.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Timeline/Experience */}
                <motion.div variants={fadeIn} className="mt-10">
                  <h3 className="text-2xl font-bold text-white mb-6">Key Milestones</h3>
                  <div className="space-y-8 relative before:absolute before:inset-0 before:h-full before:w-0.5 before:bg-accent/30 before:left-[19px]">
                    {timeline.map((item, index) => (
                      <div key={index} className="relative flex items-start pl-12">
                        <div className="absolute left-0 flex items-center justify-center">
                          <div className="h-10 w-10 rounded-full bg-gray-800 border-2 border-accent flex items-center justify-center z-10">
                            <FaAward className="text-accent" />
                          </div>
                        </div>
                        <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700 w-full">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="text-lg font-semibold text-accent">{item.title}</h4>
                            <span className="text-sm font-mono bg-accent/10 text-accent px-2 py-1 rounded">
                              {item.year}
                            </span>
                          </div>
                          <p className="text-gray-300">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Social Media Links */}
              <motion.div
                className="mt-12 p-6 bg-gray-800/60 backdrop-blur-md rounded-xl border border-accent/20 shadow-lg"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h3 className="text-2xl font-semibold text-white mb-4 text-center">Connect with Me</h3>
                <div className="flex justify-center space-x-8">
                  <motion.a 
                    href="https://www.facebook.com/temotunadze" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, color: '#1877F2' }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-300 transition-colors"
                  >
                    <FaFacebook size={30} />
                  </motion.a>
                  <motion.a 
                    href="https://www.instagram.com/tunadzetemo/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, color: '#E1306C' }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-300 transition-colors"
                  >
                    <FaInstagram size={30} />
                  </motion.a>
                  <motion.a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, color: '#0A66C2' }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-300 transition-colors"
                  >
                    <FaLinkedin size={30} />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
