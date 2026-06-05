import React from 'react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { cart, showCart, setShowCart, removeFromCart, updateQuantity, getTotalPrice, getTotalItems } = useCart();

  return (
    <>
      {/* Backdrop */}
      {showCart && (
        <div
          className="fixed inset-0 bg-black/50 z-30 transition-opacity"
          onClick={() => setShowCart(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 h-full w-full max-w-md bg-resell-light shadow-2xl z-40 transform transition-transform duration-300 ${
          showCart ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-resell-dark/10">
          <h2 className="text-2xl font-display font-bold text-resell-dark">Carrello</h2>
          <button
            onClick={() => setShowCart(false)}
            className="text-resell-dark/60 hover:text-resell-dark transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full">
              <svg className="w-16 h-16 text-resell-dark/30 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <p className="text-center text-resell-dark/60 font-body">
                Il carrello è vuoto. Inizia a fare shopping!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                  className="bg-white p-4 rounded-lg border border-resell-dark/10 hover:shadow-md transition-shadow"
                >
                  <div className="flex gap-4">
                    {/* Image */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />

                    {/* Info */}
                    <div className="flex-1">
                      <h3 className="font-display font-semibold text-resell-dark mb-1">
                        {item.name}
                      </h3>
                      <p className="text-xs text-resell-dark/60 font-body mb-2">
                        {item.selectedColor} • Taglia {item.selectedSize}
                      </p>
                      <p className="font-display font-bold text-resell-gold">
                        €{item.price.toFixed(2)}
                      </p>
                    </div>

                    {/* Quantity */}
                    <div className="flex flex-col items-end justify-between">
                      <button
                        onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}
                        className="text-resell-dark/60 hover:text-red-500 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>

                      {/* Quantity Control */}
                      <div className="flex items-center border border-resell-dark/20 rounded">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.selectedSize,
                              item.selectedColor,
                              item.quantity - 1
                            )
                          }
                          className="px-2 py-1 hover:bg-resell-dark/10 transition-colors"
                        >
                          −
                        </button>
                        <span className="px-3 py-1 font-body text-sm">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.selectedSize,
                              item.selectedColor,
                              item.quantity + 1
                            )
                          }
                          className="px-2 py-1 hover:bg-resell-dark/10 transition-colors"
                        >
                          +
                        </button>
                      </div>

                      {/* Total */}
                      <p className="font-display font-bold text-resell-dark">
                        €{(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-resell-dark/10 p-6 space-y-4">
            {/* Subtotal */}
            <div className="flex justify-between items-center">
              <span className="font-body text-resell-dark/70">Subtotale:</span>
              <span className="font-display font-bold text-xl text-resell-dark">
                €{getTotalPrice().toFixed(2)}
              </span>
            </div>

            {/* Shipping Info */}
            <div className="bg-resell-sage/10 p-3 rounded-lg">
              <p className="text-xs text-resell-dark/70 font-body">
                ✓ Spedizione gratuita sopra €100
              </p>
            </div>

            {/* Checkout Button */}
            <button className="w-full bg-resell-dark text-resell-light py-3 font-body font-semibold uppercase tracking-wide hover:bg-resell-sage transition-colors rounded-lg">
              Procedi al Checkout
            </button>

            {/* Continue Shopping */}
            <button
              onClick={() => setShowCart(false)}
              className="w-full border-2 border-resell-dark text-resell-dark py-3 font-body font-semibold uppercase tracking-wide hover:bg-resell-dark/5 transition-colors rounded-lg"
            >
              Continua lo Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
