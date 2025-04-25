import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';

// Page transition variants
const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" } 
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.4, ease: "easeIn" } 
  }
};

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  
  // Handle page loading indicator
  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setTimeout(() => setLoading(false), 300);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <>
      {/* Initial loading animation */}
      {loading && (
        <motion.div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/90 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="w-16 h-16 relative"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          >
            <motion.div 
              className="absolute top-0 left-0 right-0 m-auto rounded-full h-4 w-4 bg-accent"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatType: "loop" }}
            />
            <motion.div 
              className="absolute bottom-0 left-0 right-0 m-auto rounded-full h-4 w-4 bg-accent"
              animate={{ scale: [1.3, 1, 1.3] }}
              transition={{ duration: 1, repeat: Infinity, repeatType: "loop" }}
            />
            <motion.div 
              className="absolute left-0 top-0 bottom-0 m-auto rounded-full h-4 w-4 bg-accent"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatType: "loop", delay: 0.2 }}
            />
            <motion.div 
              className="absolute right-0 top-0 bottom-0 m-auto rounded-full h-4 w-4 bg-accent"
              animate={{ scale: [1.3, 1, 1.3] }}
              transition={{ duration: 1, repeat: Infinity, repeatType: "loop", delay: 0.2 }}
            />
          </motion.div>
        </motion.div>
      )}

      <div className="flex flex-col min-h-screen bg-gray-900">
        <Navbar />
        
        {/* Main content with page transitions */}
        <AnimatePresence mode="wait">
          <motion.main 
            key={router.route}
            className="flex-grow pt-20 transition-all duration-300"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={pageVariants}
          >
            <Component {...pageProps} />
          </motion.main>
        </AnimatePresence>
        
        <Footer />
      </div>
      
      {/* Cursor follower effect - subtle accent-colored glow that follows the cursor */}
      <div id="cursor-glow" className="fixed pointer-events-none w-40 h-40 rounded-full bg-accent/5 blur-3xl -translate-x-1/2 -translate-y-1/2 z-0 opacity-0 transition-opacity duration-500"></div>
      
      {/* Script to handle cursor follower effect */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', () => {
            const cursor = document.getElementById('cursor-glow');
            if (!cursor) return;
            
            let cursorVisible = false;
            
            // Show/hide cursor
            document.addEventListener('mouseenter', () => {
              cursorVisible = true;
              cursor.style.opacity = '0.7';
            });
            
            document.addEventListener('mouseleave', () => {
              cursorVisible = false;
              cursor.style.opacity = '0';
            });
            
            // Move cursor
            document.addEventListener('mousemove', (e) => {
              if (cursorVisible) {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
              }
            });
          });
        `
      }}/>
    </>
  );
}

export default MyApp;