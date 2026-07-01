import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowLeft, Sparkles } from 'lucide-react';
import Button from '../../components/common/Button';

export default function NotFound() {
  return (
    <div className="max-w-md mx-auto my-20 sm:my-32 text-center px-4 space-y-6">
      <div className="relative inline-block">
        <div className="p-8 bg-amber-500/10 rounded-full text-amber-600 animate-pulse">
          <ShieldAlert className="h-16 w-16" />
        </div>
        <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-[10px] font-bold p-1 rounded-full">
          <Sparkles className="h-3.5 w-3.5" />
        </span>
      </div>

      <div className="space-y-2">
        <h1 className="text-6xl font-black text-stone-900 dark:text-white">404</h1>
        <h2 className="text-xl font-bold text-stone-800 dark:text-stone-200">This Page has Melted Away</h2>
        <p className="text-xs sm:text-sm text-stone-500 max-w-xs mx-auto leading-relaxed">
          The link you followed has either gone nuts or doesn't exist anymore. Let's get you back to freshness!
        </p>
      </div>

      <Link to="/" className="inline-block">
        <Button variant="primary" className="rounded-xl flex items-center space-x-2">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Button>
      </Link>
    </div>
  );
}