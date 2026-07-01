import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { PRODUCTS } from '../../data/mockData';
import ProductCard from '../../components/product/ProductCard';
import Button from '../../components/common/Button';

export default function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([PRODUCTS[1], PRODUCTS[4]]);

  if (wishlistItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="p-5 bg-stone-100 dark:bg-stone-900 rounded-full inline-block text-stone-400">
          <Heart className="h-10 w-10" />
        </div>
        <h2 className="text-2xl font-bold">Your Wishlist is Empty</h2>
        <p className="text-stone-500 max-w-sm mx-auto text-xs sm:text-sm">
          Save your favorite gourmet dry fruits and premium chocolates here.
        </p>
        <Link to="/shop" className="inline-block">
          <Button variant="primary" className="rounded-xl">Explore Shop</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="flex items-center justify-between border-b border-stone-200/50 dark:border-stone-800/50 pb-4">
        <div>
          <h1 className="text-3xl font-extrabold text-stone-950 dark:text-white tracking-tight">My Wishlist</h1>
          <p className="text-xs text-stone-500 mt-1">You have {wishlistItems.length} items saved</p>
        </div>
        <button onClick={() => setWishlistItems([])} className="text-xs font-semibold text-red-500 hover:underline">
          Clear All
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {wishlistItems.map((product) => (<ProductCard key={product.id} product={product} />))}
      </div>
    </div>
  );
}
