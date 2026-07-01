import React, { useState } from 'react';
import { User, Package, MapPin, Heart, LogOut, ChevronRight } from 'lucide-react';
import Button from '../../components/common/Button';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('orders');

  const user = {
    name: 'Aasritha',
    email: 'aasritha@example.com',
    phone: '+91 98765 43210',
    joined: 'Jan 2026'
  };

  const mockOrders = [
    { id: 'ORD-89472', date: '2026-06-15', total: 1298, status: 'Delivered', items: 'Jumbo California Almonds (500g) x 2, Roasted Salted Cashews (500g) x 1' },
    { id: 'ORD-72948', date: '2026-05-28', total: 698, status: 'Delivered', items: 'Belgian Dark Chocolate Truffles (250g) x 1, Dried Cranberries (250g) x 1' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Profile Header Card */}
      <div className="p-6 bg-gradient-to-r from-stone-900 to-stone-950 dark:from-stone-900 dark:to-stone-950 text-white rounded-3xl border border-stone-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center space-x-4 flex-col md:flex-row text-center md:text-left">
          <div className="h-16 w-16 bg-amber-500 rounded-full flex items-center justify-center text-stone-950 text-2xl font-black">
            {user.name.charAt(0)}
          </div>
          <div>
            <h2 className="text-xl font-bold">{user.name}</h2>
            <p className="text-xs text-stone-400 mt-0.5">{user.email} • {user.phone}</p>
            <span className="inline-block mt-2 text-[10px] bg-stone-800 text-stone-300 font-semibold px-2.5 py-0.5 rounded-full">
              Member since {user.joined}
            </span>
          </div>
        </div>

        <Button variant="outline" className="border-stone-800 hover:border-red-500 hover:text-red-400 text-stone-300 text-xs py-2 rounded-xl">
          <LogOut className="h-4 w-4 mr-2" />
          <span>Sign Out</span>
        </Button>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Navigation Sidebar */}
        <div className="lg:col-span-3 space-y-2 bg-white dark:bg-stone-900 p-4 border border-stone-200/50 dark:border-stone-800/50 rounded-3xl">
          <button
            onClick={() => setActiveTab('orders')}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'orders' ? 'bg-amber-600 text-white' : 'hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300'
            }`}
          >
            <div className="flex items-center space-x-3">
              <Package className="h-4 w-4" />
              <span>My Orders</span>
            </div>
            <ChevronRight className="h-4 w-4 opacity-50" />
          </button>
          
          <button
            onClick={() => setActiveTab('addresses')}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'addresses' ? 'bg-amber-600 text-white' : 'hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300'
            }`}
          >
            <div className="flex items-center space-x-3">
              <MapPin className="h-4 w-4" />
              <span>Addresses</span>
            </div>
            <ChevronRight className="h-4 w-4 opacity-50" />
          </button>

          <button
            onClick={() => setActiveTab('wishlist')}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'wishlist' ? 'bg-amber-600 text-white' : 'hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300'
            }`}
          >
            <div className="flex items-center space-x-3">
              <Heart className="h-4 w-4" />
              <span>Wishlist</span>
            </div>
            <ChevronRight className="h-4 w-4 opacity-50" />
          </button>
        </div>

        {/* Content Section */}
        <div className="lg:col-span-9 bg-white dark:bg-stone-900 border border-stone-200/50 dark:border-stone-800/50 rounded-3xl p-6 min-h-[300px]">
          
          {activeTab === 'orders' && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold border-b border-stone-100 dark:border-stone-800 pb-3 text-stone-950 dark:text-white">Order History</h3>
              {mockOrders.map((order) => (
                <div key={order.id} className="p-4 bg-stone-50 dark:bg-stone-950 border border-stone-200/50 dark:border-stone-800 rounded-2xl space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200/30 dark:border-stone-800 pb-2">
                    <div>
                      <span className="text-xs font-bold text-stone-400 uppercase">Order ID</span>
                      <p className="text-sm font-bold text-stone-900 dark:text-white">{order.id}</p>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-stone-400 uppercase">Placed On</span>
                      <p className="text-sm font-medium dark:text-stone-300">{order.date}</p>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-stone-400 uppercase">Status</span>
                      <p className="text-xs font-bold text-green-600 bg-green-500/10 px-2 py-0.5 rounded-full inline-block mt-0.5">{order.status}</p>
                    </div>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-stone-400 uppercase">Items Ordered</span>
                    <p className="text-xs text-stone-600 dark:text-stone-400 line-clamp-1 mt-0.5">{order.items}</p>
                  </div>
                  <div className="flex justify-between items-baseline pt-2">
                    <span className="text-xs text-stone-500">Grand Total</span>
                    <span className="text-base font-extrabold text-stone-950 dark:text-white">₹{order.total}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'addresses' && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold border-b border-stone-100 dark:border-stone-800 pb-3 text-stone-950 dark:text-white">Addresses</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-stone-200 dark:border-stone-800 rounded-2xl relative bg-stone-50/50 dark:bg-stone-950/20">
                  <span className="text-[10px] font-bold uppercase text-amber-600 bg-amber-500/10 px-2 py-0.5 rounded-full">Default Billing</span>
                  <p className="font-bold text-sm mt-3 text-stone-900 dark:text-white">{user.name}</p>
                  <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 leading-relaxed">
                    123 Elite Market, Gachibowli,<br />
                    Hyderabad, Telangana - 500032
                  </p>
                  <button className="text-xs font-bold text-amber-600 hover:text-amber-700 mt-4 block">Edit Address</button>
                </div>

                <div className="p-4 border border-stone-200 dark:border-stone-800 rounded-2xl relative bg-stone-50/50 dark:bg-stone-950/20">
                  <span className="text-[10px] font-bold uppercase text-amber-600 bg-amber-500/10 px-2 py-0.5 rounded-full">Default Shipping</span>
                  <p className="font-bold text-sm mt-3 text-stone-900 dark:text-white">{user.name}</p>
                  <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 leading-relaxed">
                    123 Elite Market, Gachibowli,<br />
                    Hyderabad, Telangana - 500032
                  </p>
                  <button className="text-xs font-bold text-amber-600 hover:text-amber-700 mt-4 block">Edit Address</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'wishlist' && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold border-b border-stone-100 dark:border-stone-800 pb-3 text-stone-950 dark:text-white">Wishlist</h3>
              <p className="text-sm text-stone-500 py-10 text-center">Your wishlist is currently empty. Tap the heart on products to save them here.</p>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
