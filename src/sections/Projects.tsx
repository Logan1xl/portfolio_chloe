import { motion } from 'framer-motion';
import { Folder, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Gestion de Tâches',
    category: 'Productivité',
    desc: 'Un outil intuitif pour organiser votre flux de travail, avec une interface minimaliste et performante.',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80',
    tags: ['React', 'Framer Motion', 'Logic']
  },
  {
    title: 'Portfolio Personnel',
    category: 'Branding',
    desc: 'Un site vitrine conçu pour refléter mon identité de développeuse, alliant sobriété et technologie.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80',
    tags: ['Next.js', 'Vanilla CSS', 'SEO']
  },
  {
    title: 'Discipline Scolaire',
    category: 'Gestion Administrative',
    desc: 'Une solution logicielle pour faciliter le suivi disciplinaire et académique au sein des établissements.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80',
    tags: ['Database', 'Java', 'UX']
  },
  {
    title: 'Système Hôtelier',
    category: 'ERP Management',
    desc: 'Optimisation de la gestion des nuitées et services pour une expérience client d\'excellence.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80',
    tags: ['Architecture', 'User Flow', 'C++']
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section bg-surface">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl px-4 md:px-0">
            <h2 className="title-reveal mb-4">Mes <span className="accent-text italic">Réalisations</span></h2>
            <p className="text-muted">
              Découvrez mes projets logiciels récents, où chaque ligne de code est pensée pour résoudre un besoin réel.
            </p>
          </div>
          <div className="hidden md:flex p-4 rounded-full bg-accent-glow text-accent-color">
            <Folder size={32} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-3xl aspect-[16/10] bg-zinc-900 border border-white/5 group-hover:border-accent-color/30 transition-all duration-500">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                
                {/* Overlay Content */}
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[0.65rem] uppercase tracking-widest text-accent-color font-bold">{project.category}</span>
                    <div className="flex gap-2">
                       <ExternalLink size={16} className="text-muted group-hover:text-accent-color transition-colors" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-sm text-muted mb-6 group-hover:text-white transition-colors duration-300">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[0.6rem] py-1 px-2 border border-white/10 rounded-lg bg-black text-white/60">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
