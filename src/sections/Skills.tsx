import { motion } from 'framer-motion';
import { Code2, Layout, Database, Terminal, Cpu, Lightbulb } from 'lucide-react';

const skills = [
  { 
    name: 'HTML / CSS', 
    icon: <Layout className="text-accent-color" size={28} />, 
    desc: 'Bases solides en structure web et design réactif.',
    level: 'Expert'
  },
  { 
    name: 'Langage C', 
    icon: <Code2 className="text-accent-color" size={28} />, 
    desc: 'Logique de bas niveau et bases de l\'algorithmique.',
    level: 'Intermédiaire'
  },
  { 
    name: 'JAVA', 
    icon: <Terminal className="text-accent-color" size={28} />, 
    desc: 'Programmation Orientée Objet (débutant).',
    level: 'Débutant'
  },
  { 
    name: 'Créativité', 
    icon: <Lightbulb className="text-accent-color" size={28} />, 
    desc: 'Trouver des solutions visuelles et conceptuelles innovantes.',
    level: 'Expert'
  },
  { 
    name: 'Apprentissage Rapide', 
    icon: <Cpu className="text-accent-color" size={28} />, 
    desc: 'Toujours en quête de nouvelles connaissances techniques.',
    level: 'Continu'
  },
  { 
    name: 'Esprit d\'Équipe', 
    icon: <Database className="text-accent-color" size={28} />, 
    desc: 'Collaboration efficace pour des objectifs communs.',
    level: 'Social'
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section container">
      <div className="text-center mb-16">
        <h2 className="title-reveal mb-4">Mes <span className="accent-text italic">Compétences</span></h2>
        <p className="text-muted max-w-xl mx-auto">
          Voici un aperçu de mon bagage technique actuel et des compétences que j'affine continuellement.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="p-8 rounded-2xl glass hover:border-accent-color transition-colors duration-300 relative group"
          >
            <div className="mb-6 bg-accent-glow p-4 rounded-xl inline-block group-hover:bg-accent-color/20 transition-colors">
              {skill.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{skill.name}</h3>
            <p className="text-sm text-muted leading-relaxed">
              {skill.desc}
            </p>
            <div className="mt-6 flex justify-between items-end">
              <span className="text-[0.65rem] uppercase tracking-widest text-accent-color border border-accent-color/30 px-2 py-1 rounded">
                Status: {skill.level}
              </span>
            </div>
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-accent-glow opacity-0 group-hover:opacity-10 pointer-events-none rounded-2xl transition-opacity duration-300" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
