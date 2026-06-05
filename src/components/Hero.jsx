import React from 'react';

export default function Hero() {
  return (
    <section className="relative bg-resell-dark text-resell-light min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-40">
        <img
          src="https://images.unsplash.com/photo-1552062407-c551eeda4bbb?w=1200&h=600&fit=crop"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="animate-slideUp">
            <p className="text-resell-gold font-body text-sm uppercase tracking-widest mb-4">
              Moda Consapevole
            </p>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
              Abiti di Qualità, Rinati
            </h1>
            <p className="text-lg text-resell-light/80 mb-8 leading-relaxed">
              ResellCompany reimmagina il significato di moda sostenibile. Ogni capo è scelto con cura, rigenerato con passione, e creato per durare nel tempo e nella memoria.
            </p>
            <div className="flex gap-4">
              <a
                href="#catalogo"
                className="px-8 py-3 bg-resell-gold text-resell-dark font-body font-semibold hover:bg-resell-light transition-colors rounded-lg uppercase tracking-wide"
              >
                Scopri Ora
              </a>
              <a
                href="#about"
                className="px-8 py-3 border-2 border-resell-light text-resell-light font-body font-semibold hover:bg-resell-light hover:text-resell-dark transition-colors rounded-lg uppercase tracking-wide"
              >
                Chi Siamo
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative h-[400px] md:h-[500px] animate-slideInRight">
            <img
              src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=700&fit=crop"
              alt="Premium Collection"
              className="w-full h-full object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-resell-sage opacity-20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-resell-gold opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-resell-sage opacity-10 rounded-full blur-3xl"></div>
    </section>
  );
}
