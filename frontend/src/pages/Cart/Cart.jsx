import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag, Plus, Minus, ArrowRight, ShieldCheck, Ticket } from 'lucide-react';
import { PRODUCTS } from '../../data/mockData';
import Button from '../../components/common/Button';

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    { product: PRODUCTS[0], quantity: 1, packSize: '500g' },
    { product: PRODUCTS[3], quantity: 2, packSize: '250g' }
  ]);

  const handleQtyChange = (index, increment) => {
    setCartItems(prev =>
      prev.map((item, idx) => {
        if (idx !== index) return item;
        const newQty = increment ? item.quantity + 1 : item.quantity - 1;
        return { ...item, quantity: newQty > 0 ? newQty : 1 };
      })
    );
  };

  const handleRemove = (index) => {
    setCartItems(prev => prev.filter((_, idx) => idx !== index));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 999;
  const shippingFee = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 99;
  const total = subtotal + shippingFee;
  const freeShippingProgress = Math.min((subtotal / freeShippingThreshold) * 100, 100);
  const remainingForFreeShipping = freeShippingThreshold - subtotal;

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="p-5 bg-stone-100 dark:bg-stone-900 rounded-full inline-block text-stone-400">
          <ShoppingBag className="h-10 w-10" />
        </div>
        <h2 className="text-2xl font-bold">Your Cart is Empty</h2>
        <p className="text-stone-500 max-w-sm mx-auto text-xs sm:text-sm">
          Looks like you haven't added any delicious dry fruits or artisanal chocolates yet.
        </p>
        <Link to="/shop" className="inline-block">
          <Button variant="primary" className="rounded-xl">Go Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <h1 className="text-3xl font-extrabold text-stone-950 dark:text-white tracking-tight border-b border-stone-200/50 dark:border-stone-800/50 pb-4">
        Shopping Cart
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 space-y-6">
          {/* Free Shipping Banner */}
          <div className="p-4 bg-amber-500/10 dark:bg-amber-500/5 border border-amber-500/20 dark:border-amber-500/10 rounded-2xl space-y-2">
            {shippingFee === 0 ? (
              <p className="text-xs font-bold text-amber-700 dark:text-amber-400">🎉 You have unlocked Free Shipping!</p>
            ) : (
              <div className="space-y-1">
                <p className="text-xs font-bold text-stone-700 dark:text-stone-300">
                  Add <span className="text-amber-600 dark:text-amber-400 font-extrabold">₹{remainingForFreeShipping}</span> more for <span className="font-bold">Free Shipping</span>.
                </p>
                <div className="w-full h-1.5 bg-stone-200 dark:bg-stone-800 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full transition-all duration-500" style={{ width: `${freeShippingProgress}%` }} />
                </div>
              </div>
            )}
          </div>

          <div className="divide-y divide-stone-200/50 dark:divide-stone-800/50">
            {cartItems.map((item, index) => (
              <div key={`${item.product.id}-${item.packSize}`} className="py-5 flex items-center space-x-4">
                <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-xl overflow-hidden bg-stone-100 dark:bg-stone-900 border shrink-0">
                  <img src={item.product.image} alt={item.product.name} className="h-full w-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base font-bold text-stone-900 dark:text-white truncate">{item.product.name}</h3>
                  <p className="text-xs text-stone-400 dark:text-stone-500 mt-0.5">Pack: {item.packSize}</p>
                  <span className="text-sm font-extrabold text-stone-950 dark:text-stone-100 mt-2 block">₹{item.product.price}</span>
                </div>
                <div className="flex flex-col items-end space-y-2 sm:space-y-0 sm:flex-row sm:items-center sm:space-x-4">
                  <div className="flex items-center border border-stone-200 dark:border-stone-800 rounded-xl p-1 bg-white dark:bg-stone-950">
                    <button onClick={() => handleQtyChange(index, false)} className="p-1 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg text-stone-500">
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="font-bold text-xs px-2.5">{item.quantity}</span>
                    <button onClick={() => handleQtyChange(index, true)} className="p-1 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg text-stone-500">
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                  <button onClick={() => handleRemove(index)} className="p-2 text-stone-400 hover:text-red-500 hover:bg-red-500/5 dark:hover:bg-red-500/10 rounded-xl transition-all" aria-label="Remove item">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 bg-white dark:bg-stone-900 border border-stone-200/50 dark:border-stone-800/50 rounded-3xl space-y-6 shadow-sm">
            <h2 className="text-lg font-bold text-stone-950 dark:text-white border-b border-stone-100 dark:border-stone-800 pb-3">Order Summary</h2>
            <div className="space-y-3.5 text-sm text-stone-600 dark:text-stone-400">
              <div className="flex justify-between"><span>Subtotal</span><span className="font-bold text-stone-900 dark:text-white">₹{subtotal}</span></div>
              <div className="flex justify-between">
                <span>Shipping Fee</span>
                {shippingFee === 0 ? <span className="text-green-600 dark:text-green-400 font-bold">FREE</span> : <span className="font-bold text-stone-900 dark:text-white">₹{shippingFee}</span>}
              </div>
              <div className="border-t border-stone-100 dark:border-stone-800 pt-3 flex justify-between text-base font-extrabold text-stone-950 dark:text-white">
                <span>Total</span><span>₹{total}</span>
              </div>
            </div>

            <Link to="/checkout">
              <Button variant="primary" className="w-full py-3.5 rounded-xl flex items-center justify-center space-x-2">
                <span>Proceed To Checkout</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="flex items-center space-x-3 text-stone-500 p-4 border border-stone-200/50 dark:border-stone-800/50 rounded-2xl justify-center text-xs">
            <ShieldCheck className="h-5 w-5 text-amber-500" />
            <span>Guaranteed Safe &amp; Secure Checkout</span>
          </div>
        </div>
      </div>
    </div>
  );
}
