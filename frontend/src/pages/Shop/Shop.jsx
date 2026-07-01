import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, SlidersHorizontal, Search, X } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../../data/mockData';
import ProductCard from '../../components/product/ProductCard';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryChange = (categoryId) => {
    const newParams = new URLSearchParams(searchParams);
    if (categoryId === 'all') {
      newParams.delete('category');
    } else {
      newParams.set('category', categoryId);
    }
    setSearchParams(newParams);
  };

  const clearSearch = () => setSearchQuery('');

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Page Header */}
      <div className="flex flex-col gap-4 border-b border-stone-200/50 dark:border-stone-800/50 pb-6">
        <div>
          <h1 className="text-3xl font-extrabold text-stone-900 dark:text-white tracking-tight">
            Gourmet Collections
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-1">
            Showing {filteredProducts.length} premium selections
          </p>
        </div>

        {/* Search Bar — full width, well-spaced */}
        <div className="relative w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search products by name or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-10 py-3 text-sm rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/30 text-stone-900 dark:text-stone-100 shadow-sm"
          />
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <div className="lg:col-span-1 space-y-6">
          <div className="flex items-center space-x-2 text-stone-800 dark:text-stone-200 pb-3 border-b border-stone-200/50 dark:border-stone-800/50">
            <SlidersHorizontal className="h-4 w-4 text-amber-600" />
            <h2 className="text-base font-bold">Filters</h2>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-3">
              Categories
            </h3>
            <div className="flex flex-wrap lg:flex-col gap-2">
              {/* All Products button */}
              <button
                onClick={() => handleCategoryChange('all')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-left transition-all ${
                  activeCategory === 'all'
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-white hover:bg-stone-100 text-stone-600 dark:bg-stone-900 dark:hover:bg-stone-800 dark:text-stone-300 border border-stone-200 dark:border-stone-800'
                }`}
              >
                All Products
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-left transition-all ${
                    activeCategory === cat.id
                      ? 'bg-amber-600 text-white shadow-md'
                      : 'bg-white hover:bg-stone-100 text-stone-600 dark:bg-stone-900 dark:hover:bg-stone-800 dark:text-stone-300 border border-stone-200 dark:border-stone-800'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="lg:col-span-3">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white dark:bg-stone-900 rounded-3xl border border-stone-200/50 dark:border-stone-800/50">
              <Filter className="h-10 w-10 text-stone-300 dark:text-stone-700 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-stone-800 dark:text-stone-200">No items found</h3>
              <p className="text-xs text-stone-500 mt-1">
                Try clearing filters or search to explore other items.
              </p>
              <button
                onClick={() => { clearSearch(); handleCategoryChange('all'); }}
                className="mt-4 px-6 py-2 bg-amber-600 text-white rounded-xl text-sm font-bold hover:bg-amber-700 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
