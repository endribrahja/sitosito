import React from 'react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { setShowCart, getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <nav className="sticky top-0 z-50 bg-resell-light border-b border-resell-dark/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="/" className="text-2xl font-display font-bold text-resell-dark hover:text-resell-gold transition-colors">
            RESELL
          </a>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-resell-dark hover:text-resell-gold transition-colors font-body text-sm uppercase tracking-wide">
              Home
            </a>
            <a href="#catalogo" className="text-resell-dark hover:text-resell-gold transition-colors font-body text-sm uppercase tracking-wide">
              Catalogo
            </a>
            <a href="#about" className="text-resell-dark hover:text-resell-gold transition-colors font-body text-sm uppercase tracking-wide">
              Chi Siamo
            </a>
            <a href="#contact" className="text-resell-dark hover:text-resell-gold transition-colors font-body text-sm uppercase tracking-wide">
              Contatti
            </a>
          </div>

          {/* Carrello Icon */}
          <button
            onClick={() => setShowCart(true)}
            className="relative p-2 hover:bg-resell-sage/10 rounded-lg transition-colors"
            aria-label="Apri carrello"
          >
            <svg className="w-6 h-6 text-resell-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-resell-gold text-resell-dark text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
