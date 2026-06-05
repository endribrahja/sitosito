import React from 'react';
import { categories, priceRanges } from '../data/products';

export default function FilterBar({
  selectedCategory,
  onCategoryChange,
  selectedPrice,
  onPriceChange,
  sortBy,
  onSortChange,
}) {
  return (
    <div className="bg-white border-b border-resell-dark/10 sticky top-20 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Mobile Toggle */}
        <div className="md:hidden mb-4">
          <details className="group">
            <summary className="cursor-pointer font-body font-semibold text-resell-dark hover:text-resell-gold transition-colors">
              Filtri e Ordinamento ▼
            </summary>
            <div className="pt-4 space-y-6">
              <FilterContent
                selectedCategory={selectedCategory}
                onCategoryChange={onCategoryChange}
                selectedPrice={selectedPrice}
                onPriceChange={onPriceChange}
                sortBy={sortBy}
                onSortChange={onSortChange}
              />
            </div>
          </details>
        </div>

        {/* Desktop */}
        <div className="hidden md:block">
          <FilterContent
            selectedCategory={selectedCategory}
            onCategoryChange={onCategoryChange}
            selectedPrice={selectedPrice}
            onPriceChange={onPriceChange}
            sortBy={sortBy}
            onSortChange={onSortChange}
          />
        </div>
      </div>
    </div>
  );
}

function FilterContent({
  selectedCategory,
  onCategoryChange,
  selectedPrice,
  onPriceChange,
  sortBy,
  onSortChange,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Categories */}
      <div>
        <h3 className="font-display font-semibold text-resell-dark mb-3 text-sm uppercase">
          Categoria
        </h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label
              key={cat.id}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <input
                type="radio"
                name="category"
                value={cat.id}
                checked={selectedCategory === cat.id}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="w-4 h-4 accent-resell-gold"
              />
              <span className="text-sm font-body text-resell-dark group-hover:text-resell-gold transition-colors">
                {cat.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Ranges */}
      <div>
        <h3 className="font-display font-semibold text-resell-dark mb-3 text-sm uppercase">
          Prezzo
        </h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label
              key={range.id}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <input
                type="radio"
                name="price"
                value={range.id}
                checked={selectedPrice === range.id}
                onChange={(e) => onPriceChange(e.target.value)}
                className="w-4 h-4 accent-resell-gold"
              />
              <span className="text-sm font-body text-resell-dark group-hover:text-resell-gold transition-colors">
                {range.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Sort */}
      <div className="md:col-span-2">
        <h3 className="font-display font-semibold text-resell-dark mb-3 text-sm uppercase">
          Ordina per
        </h3>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full px-4 py-2 border border-resell-dark/20 rounded-lg font-body text-sm focus:outline-none focus:border-resell-gold focus:ring-1 focus:ring-resell-gold"
        >
          <option value="newest">Più Recenti</option>
          <option value="price-low">Prezzo: Basso a Alto</option>
          <option value="price-high">Prezzo: Alto a Basso</option>
          <option value="name">Nome: A-Z</option>
          <option value="bestseller">Bestseller</option>
        </select>
      </div>
    </div>
  );
}
