import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [showQuickView, setShowQuickView] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      ...product,
      selectedSize,
      selectedColor,
    });
  };

  return (
    <div className="group relative bg-white rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-500 animate-fadeIn">
      {/* Image Container */}
      <div className="relative h-80 overflow-hidden bg-resell-cream">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 right-4 bg-resell-gold text-resell-dark px-3 py-1 rounded-full font-body text-xs font-bold uppercase">
            {product.badge}
          </div>
        )}

        {/* Overlay Hover */}
        <div className="absolute inset-0 bg-resell-dark/0 group-hover:bg-resell-dark/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <button
            onClick={() => setShowQuickView(true)}
            className="bg-resell-gold text-resell-dark px-6 py-2 font-body font-semibold uppercase tracking-wide rounded-lg hover:bg-resell-light transition-colors"
          >
            Visualizza
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-display text-lg font-semibold text-resell-dark mb-2 group-hover:text-resell-gold transition-colors">
          {product.name}
        </h3>

        {/* Price */}
        <p className="text-2xl font-display font-bold text-resell-gold mb-4">
          €{product.price.toFixed(2)}
        </p>

        {/* Colors */}
        <div className="mb-3">
          <p className="text-xs font-body font-semibold text-resell-dark/60 mb-2 uppercase">Colore</p>
          <div className="flex gap-2">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-6 h-6 rounded-full border-2 transition-all ${
                  selectedColor === color ? 'border-resell-gold scale-110' : 'border-resell-dark/20'
                }`}
                title={color}
                style={{
                  backgroundColor: getColorCode(color),
                }}
              />
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div className="mb-4">
          <p className="text-xs font-body font-semibold text-resell-dark/60 mb-2 uppercase">Taglia</p>
          <div className="flex gap-2 flex-wrap">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1 text-xs font-body font-semibold border rounded transition-all ${
                  selectedSize === size
                    ? 'bg-resell-dark text-resell-light border-resell-dark'
                    : 'border-resell-dark/20 text-resell-dark hover:border-resell-dark'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="w-full bg-resell-dark text-resell-light py-2 font-body font-semibold uppercase tracking-wide hover:bg-resell-sage transition-colors rounded-lg"
        >
          Aggiungi al Carrello
        </button>
      </div>

      {/* Quick View Modal */}
      {showQuickView && (
        <QuickViewModal product={product} onClose={() => setShowQuickView(false)} />
      )}
    </div>
  );
}

function getColorCode(colorName) {
  const colorMap = {
    'Nero': '#1a1a1a',
    'Bianco': '#f9f9f7',
    'Grigio': '#999999',
    'Grigio Scuro': '#4a4a4a',
    'Grigio Chiaro': '#e0e0e0',
    'Avorio': '#fffff0',
    'Sage Green': '#6b8e7f',
    'Beige': '#d4a574',
    'Terracotta': '#c76b3a',
    'Marrone': '#8b6f47',
    'Marrone Scuro': '#5c4a3d',
    'Indigo': '#4b0082',
    'Blu Cielo': '#87ceeb',
    'Navy': '#001f3f',
    'Champagne': '#f7e7ce',
    'Bordeaux': '#800020',
    'Panna': '#f5f1e8',
    'Rosa Antico': '#d4a5a5',
    'Sabbia': '#c2b280',
    'Crema': '#fffdd0',
    'Bianco Naturale': '#f5f5f0',
  };
  return colorMap[colorName] || '#cccccc';
}

function QuickViewModal({ product, onClose }) {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-display font-bold">{product.name}</h2>
          <button
            onClick={onClose}
            className="text-resell-dark/60 hover:text-resell-dark transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg"
            />
            <div>
              <p className="text-3xl font-display font-bold text-resell-gold mb-4">
                €{product.price.toFixed(2)}
              </p>

              <p className="text-resell-dark/70 mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Colors */}
              <div className="mb-6">
                <p className="text-sm font-body font-semibold text-resell-dark/60 mb-3 uppercase">Colore</p>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full border-2 transition-all ${
                        selectedColor === color ? 'border-resell-gold scale-110' : 'border-resell-dark/20'
                      }`}
                      title={color}
                      style={{
                        backgroundColor: getColorCode(color),
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div className="mb-6">
                <p className="text-sm font-body font-semibold text-resell-dark/60 mb-3 uppercase">Taglia</p>
                <div className="flex gap-2 flex-wrap">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 text-sm font-body font-semibold border rounded transition-all ${
                        selectedSize === size
                          ? 'bg-resell-dark text-resell-light border-resell-dark'
                          : 'border-resell-dark/20 text-resell-dark hover:border-resell-dark'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  addToCart({
                    ...product,
                    selectedSize,
                    selectedColor,
                  });
                  onClose();
                }}
                className="w-full bg-resell-dark text-resell-light py-3 font-body font-semibold uppercase tracking-wide hover:bg-resell-sage transition-colors rounded-lg"
              >
                Aggiungi al Carrello
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
