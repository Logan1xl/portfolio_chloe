import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen pt-24 flex items-center relative overflow-hidden">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm font-semibold uppercase tracking-[0.2em] accent-text mb-4"
          >
           Étudiante Passionnée & Développeuse Aspirante
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="title-reveal mb-8"
          >
            Transformer des <span className="accent-text italic">visions</span> en expériences numériques <span className="accent-text">uniques</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-muted max-w-2xl mb-12"
          >
            Je suis <span className="text-white font-semibold">Chloé Fankwe</span>, étudiante en informatique dédiée à la création d'interfaces mémorables et performantes. Bienvenue dans mon univers digital.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start"
          >
            <a href="#projects" className="btn-primary">
              Découvrir mes projets
            </a>
            <a href="#contact" className="btn-secondary">
              Me contacter
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements / Background Polish */}
      <motion.div
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown size={18} />
      </motion.div>
    </section>
  );
};

export default Hero;
