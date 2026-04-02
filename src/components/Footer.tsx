const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-black">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <a href="#hero" className="text-xl font-bold tracking-tighter">
              <span className="accent-text">/</span> CHLOÉ FANKWE.
            </a>
            <p className="text-xs text-muted max-w-xs text-center md:text-left">
              Étudiante passionnée en informatique. Créer des expériences numériques mémorables.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-8 text-sm font-medium">
              <a href="#hero" className="hover:accent-text transition-colors">Accueil</a>
              <a href="#about" className="hover:accent-text transition-colors">À Propos</a>
              <a href="#projects" className="hover:accent-text transition-colors">Projets</a>
              <a href="#contact" className="hover:accent-text transition-colors">Contact</a>
            </div>
            <p className="text-[0.6rem] uppercase tracking-widest text-muted">
              © 2026 Tous Droits Réservés. Conçu avec <span className="text-accent-color">❤</span> par Chloé.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
