import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Truck } from 'lucide-react';
import Button from '../../components/common/Button';

const MOCK_ORDERS = [
  {
    id: 'ORD-89472', date: 'June 15, 2026', total: 1298, status: 'Shipped',
    statusColor: 'text-blue-600 bg-blue-500/10',
    items: [
      { name: 'Jumbo California Almonds', qty: 2, pack: '500g' },
      { name: 'Roasted Salted Cashews', qty: 1, pack: '500g' }
    ]
  },
  {
    id: 'ORD-72948', date: 'May 28, 2026', total: 698, status: 'Delivered',
    statusColor: 'text-green-600 bg-green-500/10',
    items: [
      { name: 'Belgian Dark Chocolate Truffles', qty: 1, pack: '250g' },
      { name: 'Organic Dried Cranberries', qty: 1, pack: '250g' }
    ]
  }
];

export default function MyOrders() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="border-b border-stone-200/50 dark:border-stone-800/50 pb-4">
        <h1 className="text-3xl font-extrabold text-stone-950 dark:text-white tracking-tight">My Orders</h1>
        <p className="text-xs text-stone-500 mt-1">Manage and track your gourmet dry fruits &amp; chocolate orders</p>
      </div>

      {MOCK_ORDERS.length > 0 ? (
        <div className="space-y-6">
          {MOCK_ORDERS.map((order) => (
            <div key={order.id} className="bg-white dark:bg-stone-900 border border-stone-200/50 dark:border-stone-800/50 rounded-3xl p-6 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 dark:border-stone-800 pb-4">
                <div className="flex items-center space-x-3.5">
                  <div className="p-3 bg-amber-500/10 rounded-2xl text-amber-600"><Package className="h-6 w-6" /></div>
                  <div>
                    <h3 className="text-sm font-bold text-stone-900 dark:text-white">{order.id}</h3>
                    <p className="text-xs text-stone-400">Placed on {order.date}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${order.statusColor}`}>{order.status}</span>
                  {order.status === 'Shipped' && (
                    <Link to={`/profile/orders/${order.id}/track`}>
                      <Button variant="secondary" size="sm" className="rounded-xl flex items-center space-x-1.5">
                        <Truck className="h-3.5 w-3.5" />
                        <span>Track Order</span>
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
              <div className="space-y-3 pt-2">
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between text-xs sm:text-sm">
                    <div>
                      <span className="font-semibold text-stone-900 dark:text-white">{item.name}</span>
                      <span className="text-stone-400"> (Pack: {item.pack})</span>
                    </div>
                    <span className="text-stone-500">Qty: {item.qty}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-baseline justify-between pt-4 border-t border-stone-100 dark:border-stone-800">
                <span className="text-xs text-stone-500">Total Paid</span>
                <span className="text-base sm:text-lg font-extrabold text-stone-950 dark:text-white">₹{order.total}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white dark:bg-stone-900 rounded-3xl border border-stone-200/50 dark:border-stone-800/50">
          <Package className="h-10 w-10 text-stone-300 dark:text-stone-700 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-stone-800 dark:text-stone-200">No Orders Yet</h3>
          <p className="text-xs text-stone-500 mt-1">You haven't ordered any delicious products yet.</p>
          <Link to="/shop" className="inline-block mt-4">
            <Button variant="primary" className="rounded-xl">Go Shopping</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
