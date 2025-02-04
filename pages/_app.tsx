import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      {/* Padding to account for the fixed navbar */}
      <main className="min-h-screen pt-20 transition-all duration-300">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
