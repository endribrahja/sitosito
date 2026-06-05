import React from 'react';
import {
  Navbar,
  Hero,
  ProductCard,
  CartDrawer,
  Toast,
  Footer,
} from './components';
import { products } from './data/products';

export default function App() {
  const productList = products;

  return (
    <div className="min-h-screen bg-resell-light">
      <Navbar />
      <Hero />

      {/* Catalog Section */}
      <section id="catalogo" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-display font-bold text-resell-dark mb-2">
              Collezione Completa
            </h2>
            <p className="text-resell-dark/60 font-body">
              {productList.length} prodott{productList.length !== 1 ? 'i' : 'o'} trovati
            </p>
          </div>
        </div>

        {productList.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productList.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <svg className="w-20 h-20 text-resell-dark/30 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
            <h3 className="text-2xl font-display font-bold text-resell-dark mb-2">
              Catalogo in aggiornamento
            </h3>
            <p className="text-resell-dark/60 font-body mb-6">
              Stiamo preparando nuovi capi per te. Torna presto.
            </p>
          </div>
        )}
      </section>

      {/* About Section */}
      <section id="about" className="bg-resell-dark text-resell-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slideUp">
              <p className="text-resell-gold font-body text-sm uppercase tracking-widest mb-4">
                About ResellCompany
              </p>
              <h2 className="text-4xl font-display font-bold mb-6 leading-tight">
                Moda che Importa
              </h2>
              <p className="text-resell-light/80 font-body leading-relaxed mb-6">
                ResellCompany non è solo un e-commerce. È un movimento consapevole verso una moda più sostenibile, dove ogni capo ha una storia e un proposito.
              </p>
              <p className="text-resell-light/80 font-body leading-relaxed mb-8">
                Selezioniamo, rigeniamo e ricircolarizziamo i migliori capi — ridando loro nuova vita, stile e significato. Crediamo che la moda consapevole non significhi compromessi sulla qualità o sull'estetica.
              </p>

              <div className="grid grid-cols-3 gap-6">
                <div>
                  <p className="text-3xl font-display font-bold text-resell-gold mb-2">
                    +2K
                  </p>
                  <p className="text-sm font-body text-resell-light/70">
                    Clienti Felici
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold text-resell-gold mb-2">
                    100%
                  </p>
                  <p className="text-sm font-body text-resell-light/70">
                    Sostenibile
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold text-resell-gold mb-2">
                    +150
                  </p>
                  <p className="text-sm font-body text-resell-light/70">
                    Prodotti
                  </p>
                </div>
              </div>
            </div>

            <div className="relative animate-slideInRight">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=700&fit=crop"
                alt="About ResellCompany"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-resell-sage opacity-20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Cart & Toast */}
      <CartDrawer />
      <Toast />

      {/* Footer */}
      <Footer />
    </div>
  );
}
