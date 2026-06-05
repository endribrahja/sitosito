import React, { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-resell-dark text-resell-light pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="mb-16 pb-16 border-b border-resell-light/10">
          <div className="max-w-2xl">
            <h3 className="text-3xl font-display font-bold mb-4">
              Iscriviti alla Newsletter
            </h3>
            <p className="text-resell-light/70 font-body mb-6">
              Ricevi le ultime collezioni, offerte esclusive e consigli di stile direttamente nella tua casella di posta.
            </p>

            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="La tua email"
                className="flex-1 px-4 py-3 rounded-lg bg-resell-light text-resell-dark font-body focus:outline-none focus:ring-2 focus:ring-resell-gold"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-resell-gold text-resell-dark font-body font-semibold rounded-lg hover:bg-resell-light transition-colors"
              >
                Iscriviti
              </button>
            </form>

            {subscribed && (
              <p className="text-resell-gold mt-3 text-sm font-body animate-fadeIn">
                ✓ Grazie per l'iscrizione! Controlla la tua email.
              </p>
            )}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h4 className="text-lg font-display font-bold mb-4">RESELL</h4>
            <p className="text-resell-light/70 font-body text-sm leading-relaxed">
              ResellCompany reimmagina la moda attraverso la sostenibilità e la qualità. Ogni pezzo è una storia di seconda vita, di consapevolezza e di stile eterno.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-lg font-display font-bold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm font-body text-resell-light/70">
              <li>
                <a href="#" className="hover:text-resell-gold transition-colors">
                  Catalogo Completo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-resell-gold transition-colors">
                  Nuovi Arrivi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-resell-gold transition-colors">
                  In Offerta
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-resell-gold transition-colors">
                  Collezioni
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-display font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm font-body text-resell-light/70">
              <li>
                <a href="#" className="hover:text-resell-gold transition-colors">
                  Chi Siamo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-resell-gold transition-colors">
                  Contatti
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-resell-gold transition-colors">
                  Spedizioni
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-resell-gold transition-colors">
                  Resi & Cambi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-resell-gold transition-colors">
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-display font-bold mb-4">Seguici</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-resell-light/10 hover:bg-resell-gold hover:text-resell-dark transition-colors flex items-center justify-center"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                  <path d="M5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-resell-light/10 hover:bg-resell-gold hover:text-resell-dark transition-colors flex items-center justify-center"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-resell-light/10 hover:bg-resell-gold hover:text-resell-dark transition-colors flex items-center justify-center"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 002.856-3.515 10.009 10.009 0 01-2.8.856 4.926 4.926 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.822 4.822 0 00-8.835 4.39C7.78 8.217 4.126 6.66 1.39 4.046a4.822 4.822 0 001.493 6.43 4.828 4.828 0 01-2.186-.603v.06a4.823 4.823 0 003.868 4.724 4.816 4.816 0 01-2.179.084 4.825 4.825 0 004.505 3.352A9.674 9.674 0 010 19.54a13.978 13.978 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-resell-light/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-body text-resell-light/70">
            © 2024 ResellCompany. Tutti i diritti riservati.
          </p>
          <div className="flex gap-6 text-sm font-body text-resell-light/70">
            <a href="#" className="hover:text-resell-gold transition-colors">
              Termini di Servizio
            </a>
            <a href="#" className="hover:text-resell-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-resell-gold transition-colors">
              Cookie
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
