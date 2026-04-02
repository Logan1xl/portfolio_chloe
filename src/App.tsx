import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './components/Footer';

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center flex-col gap-6"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-32 h-32 rounded-full overflow-hidden border-2 border-accent-color/30 shadow-[0_0_40px_rgba(234,179,8,0.2)]"
      >
        <img src="/profile.jpg" alt="Loading" className="w-full h-full object-cover" />
      </motion.div>
      <div className="flex flex-col items-center gap-2">
        <motion.span
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-xs uppercase font-bold tracking-[0.4em] text-accent-color"
        >
          CHARGEMENT...
        </motion.span>
        <div className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="w-full h-full bg-accent-color"
          />
        </div>
      </div>
    </motion.div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      <AnimatePresence>
        {loading && <Preloader />}
      </AnimatePresence>

      <div className="glow-mesh" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
