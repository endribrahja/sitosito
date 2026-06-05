import React from 'react';
import { useCart } from '../context/CartContext';

export default function Toast() {
  const { showToast, toastMessage } = useCart();

  if (!showToast) return null;

  return (
    <div className="fixed bottom-8 right-8 z-40 animate-slideUp">
      <div className="bg-resell-dark text-resell-light px-6 py-3 rounded-lg shadow-lg flex items-center gap-3 font-body">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span>{toastMessage}</span>
      </div>
    </div>
  );
}
