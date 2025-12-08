import React, { useState } from 'react';

function HeroSection(): JSX.Element {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // TODO: Remplacer par votre ID Formspree (obtenu sur https://formspree.io/)
  const FORMSPREE_ID = "xjknewlk";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitting(true);
      try {
        const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email })
        });

        if (response.ok) {
          setSubmitted(true);
          setEmail('');
        } else {
          alert("Une erreur est survenue. Merci de réessayer.");
        }
      } catch (error) {
        console.error("Erreur d'envoi", error);
        alert("Une erreur de connexion est survenue.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section className="bg-darkest py-20 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="container mx-auto text-center max-w-4xl relative z-10">
        <h1 className="text-6xl md:text-8xl font-comic tracking-wider text-white mb-6 text-balance drop-shadow-[4px_4px_0_#000]">
          Votre Imagination. <br />
          <span className="text-primary text-7xl md:text-9xl">Votre BD.</span>
        </h1>
        <p className="text-2xl text-white/90 mb-10 text-balance font-medium leading-relaxed max-w-2xl mx-auto">
          Générez des planches de comics authentiques et uniques grâce à l'IA.
          Du script à la bulle, sans savoir dessiner.
        </p>

        {submitted ? (
          <div className="bg-green-100 border-4 border-black p-6 shadow-comic transform rotate-1 inline-block">
            <p className="font-comic text-2xl text-green-700">Merci ! Vous serez averti.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Votre email..."
              className="w-full md:w-auto flex-grow px-6 py-4 text-xl font-comic border-4 border-black shadow-[4px_4px_0_#fff] focus:outline-none focus:shadow-[2px_2px_0_#fff] focus:translate-x-[2px] focus:translate-y-[2px] transition-all rounded-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-primary hover:bg-blue-600 text-white text-xl font-comic tracking-wide px-8 py-4 rounded-none border-4 border-black shadow-comic transform hover:-translate-y-1 active:translate-y-0 active:shadow-none transition-all flex-shrink-0 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'ENVOI...' : 'ÊTRE AVERTI 🚀'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default HeroSection;
