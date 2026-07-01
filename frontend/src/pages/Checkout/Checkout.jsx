import React, { useState } from 'react';
import { CreditCard, Wallet, ShieldCheck, Truck, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../../data/mockData';
import Button from '../../components/common/Button';

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    name: 'Aasritha Rao',
    email: 'aasritha@example.com',
    address: '123 Elite Market, Gachibowli',
    city: 'Hyderabad',
    postalCode: '500032',
    phone: '+91 98765 43210'
  });

  const cartSummaryItems = [
    { product: PRODUCTS[0], quantity: 1, packSize: '500g' },
    { product: PRODUCTS[3], quantity: 2, packSize: '250g' }
  ];

  const subtotal = cartSummaryItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const shippingFee = subtotal >= 999 ? 0 : 99;
  const total = subtotal + shippingFee;

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    alert(`Congratulations! Order placed successfully with ${paymentMethod.toUpperCase()}. Total: ₹${total}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Back Link */}
      <Link to="/cart" className="inline-flex items-center space-x-2 text-sm text-stone-500 hover:text-amber-600 transition-colors">
        <ArrowLeft className="h-4 w-4" />
        <span>Return to Cart</span>
      </Link>

      <h1 className="text-3xl font-extrabold text-stone-950 dark:text-white tracking-tight border-b border-stone-200/50 dark:border-stone-800/50 pb-4">
        Secure Checkout
      </h1>

      <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Address & Payment Info */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Shipping Address Section */}
          <div className="bg-white dark:bg-stone-900 border border-stone-200/50 dark:border-stone-800/50 rounded-3xl p-6 space-y-4 shadow-sm">
            <h2 className="text-lg font-bold text-stone-950 dark:text-white flex items-center space-x-2">
              <Truck className="h-5 w-5 text-amber-500" />
              <span>Shipping Information</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-stone-500 dark:text-stone-400">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="w-full px-4 py-2.5 text-sm rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-250 dark:border-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/30 text-stone-900 dark:text-stone-100"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-stone-500 dark:text-stone-400">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                  className="w-full px-4 py-2.5 text-sm rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-250 dark:border-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/30 text-stone-900 dark:text-stone-100"
                />
              </div>

              <div className="sm:col-span-2 space-y-1">
                <label className="text-xs font-bold text-stone-500 dark:text-stone-400">Delivery Address</label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  required
                  className="w-full px-4 py-2.5 text-sm rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-250 dark:border-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/30 text-stone-900 dark:text-stone-100"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-stone-500 dark:text-stone-400">City</label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                  required
                  className="w-full px-4 py-2.5 text-sm rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-250 dark:border-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/30 text-stone-900 dark:text-stone-100"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-stone-500 dark:text-stone-400">Postal Pin Code</label>
                <input
                  type="text"
                  value={formData.postalCode}
                  onChange={(e) => setFormData({...formData, postalCode: e.target.value})}
                  required
                  className="w-full px-4 py-2.5 text-sm rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-250 dark:border-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/30 text-stone-900 dark:text-stone-100"
                />
              </div>
            </div>
          </div>

          {/* Payment Method Section */}
          <div className="bg-white dark:bg-stone-900 border border-stone-200/50 dark:border-stone-800/50 rounded-3xl p-6 space-y-4 shadow-sm">
            <h2 className="text-lg font-bold text-stone-950 dark:text-white flex items-center space-x-2">
              <CreditCard className="h-5 w-5 text-amber-500" />
              <span>Payment Details</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <label className={`p-4 border rounded-2xl flex items-center space-x-3 cursor-pointer transition-all ${paymentMethod === 'card' ? 'border-amber-600 bg-amber-500/5 text-amber-600' : 'border-stone-200 dark:border-stone-800 text-stone-605'}`}>
                <input type="radio" name="payment" value="card" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} className="sr-only" />
                <CreditCard className="h-5 w-5" />
                <span className="text-xs font-bold">Credit/Debit Card</span>
              </label>

              <label className={`p-4 border rounded-2xl flex items-center space-x-3 cursor-pointer transition-all ${paymentMethod === 'upi' ? 'border-amber-600 bg-amber-500/5 text-amber-600' : 'border-stone-200 dark:border-stone-800 text-stone-605'}`}>
                <input type="radio" name="payment" value="upi" checked={paymentMethod === 'upi'} onChange={() => setPaymentMethod('upi')} className="sr-only" />
                <Wallet className="h-5 w-5" />
                <span className="text-xs font-bold">UPI Payments</span>
              </label>

              <label className={`p-4 border rounded-2xl flex items-center space-x-3 cursor-pointer transition-all ${paymentMethod === 'cod' ? 'border-amber-600 bg-amber-500/5 text-amber-600' : 'border-stone-200 dark:border-stone-800 text-stone-605'}`}>
                <input type="radio" name="payment" value="cod" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} className="sr-only" />
                <Truck className="h-5 w-5" />
                <span className="text-xs font-bold">Cash On Delivery</span>
              </label>
            </div>

            {paymentMethod === 'card' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-stone-100 dark:border-stone-800">
                <div className="sm:col-span-2 space-y-1">
                  <label className="text-xs font-bold text-stone-500 dark:text-stone-400">Card Number</label>
                  <input type="text" placeholder="4111 2222 3333 4444" className="w-full px-4 py-2.5 text-sm rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-250 dark:border-stone-800 focus:outline-none text-stone-900" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-stone-500 dark:text-stone-400">Expiry Date</label>
                  <input type="text" placeholder="MM/YY" className="w-full px-4 py-2.5 text-sm rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-250 dark:border-stone-800 focus:outline-none text-stone-900" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-stone-500 dark:text-stone-400">CVV</label>
                  <input type="password" placeholder="•••" className="w-full px-4 py-2.5 text-sm rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-250 dark:border-stone-800 focus:outline-none text-stone-900" />
                </div>
              </div>
            )}

            {paymentMethod === 'upi' && (
              <div className="pt-4 border-t border-stone-100 dark:border-stone-800 space-y-2">
                <label className="text-xs font-bold text-stone-500 dark:text-stone-400">Enter UPI ID</label>
                <input type="text" placeholder="username@upi" className="w-full px-4 py-2.5 text-sm rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-250 dark:border-stone-800 focus:outline-none text-stone-900" />
              </div>
            )}
          </div>

        </div>

        {/* Right Side: Summary & Submit */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 bg-white dark:bg-stone-900 border border-stone-200/50 dark:border-stone-800/50 rounded-3xl space-y-6 shadow-sm">
            <h2 className="text-lg font-bold text-stone-950 dark:text-white border-b border-stone-100 dark:border-stone-800 pb-3">Review Order</h2>

            <div className="divide-y divide-stone-100 dark:divide-stone-800 max-h-48 overflow-y-auto pr-1">
              {cartSummaryItems.map((item) => (
                <div key={item.product.id} className="py-3 flex items-center justify-between text-xs sm:text-sm">
                  <div>
                    <p className="font-bold text-stone-900 dark:text-white truncate max-w-[160px]">{item.product.name}</p>
                    <span className="text-[10px] text-stone-400">Pack: {item.packSize} • Qty: {item.quantity}</span>
                  </div>
                  <span className="font-extrabold text-stone-900 dark:text-white">₹{item.product.price * item.quantity}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-stone-100 dark:border-stone-800 pt-4 space-y-3.5 text-sm text-stone-500">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-bold text-stone-900 dark:text-white">₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Fee</span>
                {shippingFee === 0 ? (
                  <span className="text-green-600 font-bold">FREE</span>
                ) : (
                  <span className="font-bold text-stone-900 dark:text-white">₹{shippingFee}</span>
                )}
              </div>
              
              <div className="border-t border-stone-100 dark:border-stone-800 pt-3.5 flex justify-between text-base font-extrabold text-stone-950 dark:text-white">
                <span>Total Payment</span>
                <span>₹{total}</span>
              </div>
            </div>

            <Button variant="primary" type="submit" className="w-full py-4 rounded-xl text-sm font-bold flex items-center justify-center space-x-2">
              <ShoppingBag className="h-4 w-4" />
              <span>Place Secure Order</span>
            </Button>
          </div>

          <div className="flex items-center space-x-3 text-stone-500 p-4 border border-stone-200/50 dark:border-stone-800/50 rounded-2xl justify-center text-xs">
            <ShieldCheck className="h-5 w-5 text-amber-500" />
            <span>Guaranteed Safe & Secure Checkout</span>
          </div>
        </div>

      </form>

    </div>
  );
}
