import { motion } from 'framer-motion';
import { User, Sparkles, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section bg-surface/50 relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent-glow rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative flex justify-center"
          >
            <div className="relative group max-w-sm w-full h-[500px]">
              {/* Back Layer */}
              <div className="absolute inset-0 border border-accent-color/30 rounded-3xl translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-700" />
              
              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden glass border-2 border-white/10 group-hover:border-accent-color transition-colors duration-700 shadow-2xl">
                <img 
                  src="/profile.jpg" 
                  alt="Chloé Fankwe" 
                  className="w-full h-full object-cover scale-110 grayscale hover:grayscale-0 group-hover:scale-100 transition-all duration-1000"
                />
                
                {/* Floating Badge */}
                <motion.div 
                  className="absolute bottom-6 left-6 p-4 glass rounded-2xl border border-white/20 backdrop-blur-md flex items-center gap-3"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="w-10 h-10 rounded-full bg-accent-color/20 flex items-center justify-center">
                    <Sparkles className="text-accent-color" size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest leading-none mb-1">Passionnée</p>
                    <p className="text-[10px] text-muted leading-none">Développement Web 🌐</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-4 mb-6">
               <div className="w-10 h-px bg-accent-color/50" />
               <span className="text-xs uppercase font-bold tracking-[0.3em] text-accent-color">À Propos</span>
            </div>
            
            <h2 className="title-reveal mb-8">L'Informatique comme <span className="accent-text">Vocation</span>.</h2>
            
            <div className="space-y-6 text-muted text-lg leading-relaxed">
              <p>
                Ma passion pour le numérique ne s'arrête pas au code. C'est une quête perpétuelle d'innovation et de résolution de défis. En tant qu'étudiante, chaque projet est pour moi une opportunité de transformer une vision abstraite en une expérience interactive concrète.
              </p>
              <p className="border-l-2 border-accent-color/30 pl-6 italic">
                "J'aime créer des expériences numériques innovantes, résoudre des défis techniques et transformer des idées en projets réels."
              </p>
              
              <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="space-y-2">
                  <h4 className="text-white font-bold flex items-center gap-2">
                    <User size={18} className="text-accent-color" /> Identité
                  </h4>
                  <p className="text-sm">Chloé Fankwe, Étudiante IT</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold flex items-center gap-2">
                    <MapPin size={18} className="text-accent-color" /> Localisation
                  </h4>
                  <p className="text-sm">Douala, Cameroun</p>
                </div>
              </div>
              
              <div className="pt-10 flex gap-6">
                <a href="#contact" className="btn-primary">Parlons Ensemble</a>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
