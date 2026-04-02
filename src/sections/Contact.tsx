import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/maqldpye", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
      } else {
        setFormStatus('error');
        alert("Une erreur est survenue lors de l'envoi du message.");
      }
    } catch (err) {
      setFormStatus('error');
      alert("Erreur de connexion. Veuillez réessayer plus tard.");
    }
  };

  return (
    <section id="contact" className="section bg-surface">
      <div className="container overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-xs uppercase tracking-widest text-accent-color font-bold mb-4 block">✦ Disponible pour vos projets</span>
            <h2 className="title-reveal mb-8">Discutons de <br /><span className="italic accent-text">votre futur</span> projet.</h2>
            <p className="text-muted mb-12 max-w-md">
              Une idée, une collaboration ou simplement envie de dire bonjour ? Je réponds à chaque message sous 24h.
            </p>

            <ul className="space-y-8">
              <li className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center group-hover:border-accent-color transition-colors duration-300">
                  <Mail className="text-accent-color" size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted uppercase font-bold tracking-widest mb-1">Email</p>
                  <a href="mailto:chloefankwe@gmail.com" className="text-lg hover:accent-text">chloefankwe@gmail.com</a>
                </div>
              </li>
              <li className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center group-hover:border-accent-color transition-colors duration-300">
                  <Phone className="text-accent-color" size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted uppercase font-bold tracking-widest mb-1">Téléphone</p>
                  <a href="tel:+237697119252" className="text-lg hover:accent-text">+237 697 119 252</a>
                </div>
              </li>
              <li className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center group-hover:border-accent-color transition-colors duration-300">
                  <MapPin className="text-accent-color" size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted uppercase font-bold tracking-widest mb-1">Localisation</p>
                  <p className="text-lg">Douala, Cameroun</p>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-3xl glass backdrop-blur-xl border border-white/10 relative overflow-hidden"
          >
            {formStatus === 'success' ? (
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-accent-glow rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-accent-color" size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Message Envoyé !</h3>
                <p className="text-muted">Merci, Chloé vous recontactera très prochainement.</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-8 text-sm text-accent-color font-bold tracking-widest uppercase hover:underline"
                >
                  Envoyer un autre message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted">Prénom</label>
                    <input 
                      type="text" 
                      name="prenom"
                      placeholder="Chloé" 
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-accent-color outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted">Nom</label>
                    <input 
                      type="text" 
                      name="nom"
                      placeholder="Fankwe" 
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-accent-color outline-none transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="votre@email.com" 
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-accent-color outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted">Sujet</label>
                  <select 
                    name="sujet"
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-accent-color outline-none transition-colors appearance-none"
                  >
                    <option value="projet">Proposition de projet</option>
                    <option value="collab">Collaboration</option>
                    <option value="question">Question générale</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted">Message</label>
                  <textarea 
                    rows={4} 
                    name="message"
                    placeholder="Dites-moi tout sur votre projet..." 
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-accent-color outline-none transition-colors"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={formStatus === 'sending'}
                  className="w-full btn-primary justify-center py-5 group"
                >
                  {formStatus === 'sending' ? 'Envoi en cours...' : (
                    <>Envoyer le message <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
