import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShieldCheck, ArrowLeft, Plus, Minus, ShoppingBag, Truck, BadgePercent } from 'lucide-react';
import { PRODUCTS } from '../../data/mockData';
import Button from '../../components/common/Button';
import ProductCard from '../../components/product/ProductCard';

export default function ProductDetails() {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const [selectedPack, setSelectedPack] = useState('500g');

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold">Product Not Found</h2>
        <p className="text-stone-500 mt-2">The product you are looking for does not exist.</p>
        <Link to="/shop" className="inline-block mt-4 text-amber-600 font-bold hover:underline">Back to Shop</Link>
      </div>
    );
  }

  const handleIncrement = () => setQuantity(q => q + 1);
  const handleDecrement = () => setQuantity(q => (q > 1 ? q - 1 : 1));
  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      <Link to="/shop" className="inline-flex items-center space-x-2 text-sm text-stone-500 hover:text-amber-600 transition-colors">
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Collections</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-6">
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-white dark:bg-stone-900 border border-stone-200/50 dark:border-stone-800/50 shadow-sm">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            {product.tag && (
              <span className="absolute top-4 left-4 bg-amber-600 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                {product.tag}
              </span>
            )}
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">{product.category.replace('-', ' ')}</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-950 dark:text-white leading-tight">{product.name}</h1>
            <div className="flex items-center space-x-2 pt-1">
              <div className="flex items-center text-amber-500"><Star className="h-4 w-4 fill-current" /></div>
              <span className="text-sm font-bold">{product.rating}</span>
              <span className="text-xs text-stone-400">({product.reviews} reviews)</span>
            </div>
          </div>

          <div className="p-4 bg-stone-100 dark:bg-stone-900 rounded-2xl border border-stone-200/30 dark:border-stone-800 flex items-center justify-between">
            <div>
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-extrabold text-stone-950 dark:text-white">₹{product.price * quantity}</span>
                {product.originalPrice && <span className="text-sm text-stone-400 line-through">₹{product.originalPrice * quantity}</span>}
              </div>
              <p className="text-[11px] text-green-600 dark:text-green-400 font-semibold mt-1">Inclusive of all taxes</p>
            </div>
            <div className="flex items-center space-x-1 text-xs text-amber-700 bg-amber-500/10 px-3 py-1.5 rounded-xl font-bold">
              <BadgePercent className="h-4 w-4" />
              <span>Save ₹{(product.originalPrice - product.price) * quantity}</span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400 leading-relaxed font-light">{product.description}</p>

          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-400">Select Pack Size</span>
            <div className="flex space-x-3">
              {['250g', '500g', '1kg'].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedPack(size)}
                  className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl border transition-all ${
                    selectedPack === size
                      ? 'border-amber-600 bg-amber-600/5 text-amber-600 dark:border-amber-500 dark:text-amber-400'
                      : 'border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 hover:border-stone-400'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <div className="flex items-center justify-between border border-stone-200 dark:border-stone-800 rounded-xl p-1 bg-white dark:bg-stone-950 max-w-[140px]">
              <button onClick={handleDecrement} className="p-2 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg text-stone-500 transition-colors" disabled={!product.inStock}>
                <Minus className="h-4 w-4" />
              </button>
              <span className="font-bold text-sm px-3">{quantity}</span>
              <button onClick={handleIncrement} className="p-2 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg text-stone-500 transition-colors" disabled={!product.inStock}>
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <div className="flex-1 flex gap-3">
              <Button variant="primary" className="flex-1 py-3 rounded-xl flex items-center justify-center space-x-2" disabled={!product.inStock}>
                <ShoppingBag className="h-4 w-4" />
                <span>Add To Cart</span>
              </Button>
            </div>
          </div>

          <div className="pt-6 border-t border-stone-200/50 dark:border-stone-800/50 grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2.5 text-xs font-semibold text-stone-600 dark:text-stone-400">
              <Truck className="h-4 w-4 text-amber-500" />
              <span>Fast Express Shipping</span>
            </div>
            <div className="flex items-center space-x-2.5 text-xs font-semibold text-stone-600 dark:text-stone-400">
              <ShieldCheck className="h-4 w-4 text-amber-500" />
              <span>Hygienically Packed</span>
            </div>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="space-y-6 pt-10 border-t border-stone-200/50 dark:border-stone-800/50">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-950 dark:text-white">You May Also Like</h2>
            <p className="text-xs text-stone-400">Related gourmet products from our shop</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (<ProductCard key={p.id} product={p} />))}
          </div>
        </div>
      )}
    </div>
  );
}
