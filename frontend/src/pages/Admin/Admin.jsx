import React from 'react';
import { LayoutDashboard, Users, Package, ShoppingCart, BarChart3, TrendingUp, AlertTriangle } from 'lucide-react';
import Button from '../../components/common/Button';

export default function Admin() {
  const stats = [
    { label: 'Total Revenue', value: '₹2,48,930', change: '+12.5%', icon: BarChart3 },
    { label: 'Active Orders', value: '34', change: '+8%', icon: ShoppingCart },
    { label: 'Total Products', value: '48 items', change: '0%', icon: Package },
    { label: 'New Customers', value: '1,240', change: '+24%', icon: Users }
  ];

  const recentOrders = [
    { id: 'ORD-89472', customer: 'Aasritha Rao', items: 'California Almonds, Cashews', total: '₹1,298', status: 'Shipped' },
    { id: 'ORD-89471', customer: 'Rohan Sharma', items: 'Belgian Truffles', total: '₹499', status: 'Processing' },
    { id: 'ORD-89470', customer: 'Vikram Singh', items: 'Medjool Dates, Chia Seeds', total: '₹848', status: 'Delivered' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header */}
      <div className="border-b border-stone-200/50 dark:border-stone-800/50 pb-4">
        <h1 className="text-3xl font-extrabold text-stone-950 dark:text-white tracking-tight flex items-center space-x-2">
          <LayoutDashboard className="h-8 w-8 text-amber-600" />
          <span>Admin Dashboard</span>
        </h1>
        <p className="text-xs text-stone-500 mt-1">Manage Bhavani Dryfruits products inventory, sales metrics, and active deliveries.</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="bg-white dark:bg-stone-900 border border-stone-200/50 dark:border-stone-800/50 rounded-3xl p-6 shadow-sm flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-xs text-stone-400 font-medium">{stat.label}</span>
                <p className="text-2xl font-black text-stone-950 dark:text-white">{stat.value}</p>
                <span className="text-[10px] text-green-600 dark:text-green-400 font-bold flex items-center space-x-0.5">
                  <TrendingUp className="h-3 w-3 inline" />
                  <span>{stat.change} vs last month</span>
                </span>
              </div>
              <div className="p-3 bg-amber-500/10 rounded-2xl text-amber-600">
                <Icon className="h-6 w-6" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Grid: Orders & Stock status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Columns: Recent Orders Table */}
        <div className="lg:col-span-2 bg-white dark:bg-stone-900 border border-stone-200/50 dark:border-stone-800/50 rounded-3xl p-6 shadow-sm space-y-4">
          <h2 className="text-base font-bold text-stone-950 dark:text-white">Recent Orders</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-stone-100 dark:border-stone-800 text-stone-400 font-semibold uppercase text-[10px] tracking-wider">
                  <th className="pb-3">Order ID</th>
                  <th className="pb-3">Customer</th>
                  <th className="pb-3">Products</th>
                  <th className="pb-3">Amount</th>
                  <th className="pb-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 dark:divide-stone-800 text-stone-600 dark:text-stone-400">
                {recentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-stone-50/50 dark:hover:bg-stone-950/20">
                    <td className="py-4 font-bold text-stone-900 dark:text-white">{order.id}</td>
                    <td className="py-4">{order.customer}</td>
                    <td className="py-4 truncate max-w-[120px]">{order.items}</td>
                    <td className="py-4 font-bold text-stone-900 dark:text-white">{order.total}</td>
                    <td className="py-4">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                        order.status === 'Delivered' ? 'text-green-600 bg-green-500/10' :
                        order.status === 'Shipped' ? 'text-blue-600 bg-blue-500/10' : 'text-amber-600 bg-amber-500/10'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column: Inventory Alerts */}
        <div className="bg-white dark:bg-stone-900 border border-stone-200/50 dark:border-stone-800/50 rounded-3xl p-6 shadow-sm space-y-4">
          <h2 className="text-base font-bold text-stone-950 dark:text-white flex items-center space-x-2">
            <AlertTriangle className="h-4 w-4 text-amber-500" />
            <span>Low Stock Alerts</span>
          </h2>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3.5 bg-red-500/5 dark:bg-red-500/10 border border-red-500/10 rounded-2xl">
              <div>
                <p className="text-xs font-bold text-stone-900 dark:text-white">Almond Truffles</p>
                <span className="text-[10px] text-stone-400">Only 2 packs remaining</span>
              </div>
              <span className="text-[10px] font-bold text-red-600 uppercase">Restock</span>
            </div>

            <div className="flex items-center justify-between p-3.5 bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/10 rounded-2xl">
              <div>
                <p className="text-xs font-bold text-stone-900 dark:text-white">California Almonds (1kg)</p>
                <span className="text-[10px] text-stone-400">Only 5 packs remaining</span>
              </div>
              <span className="text-[10px] font-bold text-amber-600 uppercase">Order</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
