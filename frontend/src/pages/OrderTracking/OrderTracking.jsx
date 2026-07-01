import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Truck, CheckCircle2, Circle, ArrowLeft, ShieldCheck } from 'lucide-react';

const STEPS = [
  { label: 'Order Placed', desc: 'June 15, 2026 - 10:30 AM', active: true, done: true },
  { label: 'Processing', desc: 'June 15, 2026 - 02:45 PM', active: true, done: true },
  { label: 'Shipped', desc: 'June 16, 2026 - 09:15 AM', active: true, done: true },
  { label: 'Out For Delivery', desc: 'Expected: June 18, 2026', active: true, done: false },
  { label: 'Delivered', desc: 'Pending', active: false, done: false }
];

export default function OrderTracking() {
  const { id } = useParams();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
      <Link to="/profile/orders" className="inline-flex items-center space-x-2 text-sm text-stone-500 hover:text-amber-600 transition-colors">
        <ArrowLeft className="h-4 w-4" />
        <span>Back to My Orders</span>
      </Link>

      <div className="bg-white dark:bg-stone-900 border border-stone-200/50 dark:border-stone-800/50 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 dark:border-stone-800 pb-5">
          <div>
            <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">Live Delivery Status</span>
            <h1 className="text-2xl font-extrabold text-stone-950 dark:text-white mt-1">Track {id || 'ORD-89472'}</h1>
          </div>
          <div className="text-left sm:text-right">
            <span className="text-xs text-stone-400">Estimated Delivery</span>
            <p className="text-sm font-bold text-stone-900 dark:text-white">June 18, 2026</p>
          </div>
        </div>

        <div className="p-4 bg-stone-50 dark:bg-stone-950 rounded-2xl border border-stone-200/40 dark:border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3.5">
            <div className="p-2.5 bg-amber-500/10 rounded-xl text-amber-600"><Truck className="h-5 w-5" /></div>
            <div>
              <p className="text-xs text-stone-400">Courier Partner</p>
              <p className="text-sm font-bold text-stone-900 dark:text-white">Delhivery Express</p>
            </div>
          </div>
          <div>
            <p className="text-xs text-stone-400">AWB Tracking No.</p>
            <p className="text-sm font-extrabold text-stone-800 dark:text-stone-100">DEL-984729104</p>
          </div>
        </div>

        <div className="relative pl-6 space-y-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-stone-200 dark:before:bg-stone-800">
          {STEPS.map((step, idx) => (
            <div key={idx} className="relative flex items-start space-x-4">
              <div className="absolute -left-[20px] bg-white dark:bg-stone-900 p-0.5 rounded-full z-10">
                {step.done ? (
                  <CheckCircle2 className="h-5 w-5 text-amber-600 dark:text-amber-500" />
                ) : step.active ? (
                  <div className="h-5 w-5 rounded-full border-2 border-amber-600 bg-amber-500/20 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-amber-600" />
                  </div>
                ) : (
                  <Circle className="h-5 w-5 text-stone-300 dark:text-stone-700" />
                )}
              </div>
              <div className="space-y-0.5">
                <h3 className={`text-sm font-bold ${step.active ? 'text-stone-900 dark:text-white' : 'text-stone-400'}`}>{step.label}</h3>
                <p className="text-xs text-stone-500 dark:text-stone-400">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center space-x-3 text-stone-500 p-4 border border-stone-200/50 dark:border-stone-800/50 rounded-2xl justify-center text-xs">
          <ShieldCheck className="h-5 w-5 text-amber-500" />
          <span>Package sealed in sterile dust-free boxes.</span>
        </div>
      </div>
    </div>
  );
}
