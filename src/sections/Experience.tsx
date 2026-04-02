import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  { 
    year: '2025 - Présent', 
    title: 'Année en cours', 
    place: 'Institut Universitaire de la Côte (IUC)',
    desc: 'Spécialisation en Ingénierie Informatique. Approfondissement des systèmes complexes et du développement full-stack.'
  },
  { 
    year: '2024 - 2025', 
    title: '1ère Année Préparatoire', 
    place: 'Institut Universitaire de la Côte',
    desc: 'Fondamentaux de l\'informatique : Algorithmique avancée, structures de données et programmation système.'
  },
  { 
    year: '2023 - 2024', 
    title: 'Baccalauréat Scientifique', 
    place: 'Collège Bilingue HERPHIL',
    desc: 'Validation du cycle secondaire avec une forte expertise en sciences exactes.'
  },
  { 
    year: '2022 - 2023', 
    title: 'Certification Probatoire', 
    place: 'Collège Bilingue HERPHIL',
    desc: 'Réussite aux examens nationaux de fin de classe de Première.'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section container">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8 text-center md:text-left">
          <div>
            <h2 className="title-reveal mb-4">Mon <span className="accent-text italic">Parcours</span></h2>
            <p className="text-muted max-w-lg">
              Une trajectoire académique rigoureuse tournée vers l'excellence technologique.
            </p>
          </div>
          <div className="p-5 rounded-2xl glass border border-accent-color/20">
            <GraduationCap className="text-accent-color" size={40} />
          </div>
        </div>

        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border-color before:to-transparent">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border-color bg-surface group-hover:border-accent-color transition-colors duration-500 z-10 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <div className="w-2.5 h-2.5 rounded-full bg-accent-color animate-pulse" />
              </div>

              {/* Content Panel */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-8 rounded-3xl border border-white/5 hover:border-accent-color/30 transition-all duration-500 shadow-2xl">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                  <span className="flex items-center gap-2 text-xs font-bold text-accent-color uppercase tracking-widest">
                    <Calendar size={14} /> {item.year}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] text-muted italic">
                    <MapPin size={10} /> {item.place}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
