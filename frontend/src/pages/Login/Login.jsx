import React, { useState } from 'react';
import { Mail, Lock, User, ShieldAlert, Sparkles } from 'lucide-react';
import Button from '../../components/common/Button';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Success: Submitted ${isLogin ? 'Login' : 'Signup'} for ${email}`);
  };

  return (
    <div className="max-w-md mx-auto my-12 sm:my-20 px-4">
      <div className="bg-white dark:bg-stone-900 border border-stone-200/50 dark:border-stone-800/50 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
        <div className="text-center space-y-2">
          <span className="p-2.5 bg-gradient-to-tr from-amber-600 to-amber-400 rounded-2xl text-white inline-block">
            <Sparkles className="h-6 w-6" />
          </span>
          <h2 className="text-2xl font-extrabold text-stone-950 dark:text-white">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p className="text-xs text-stone-400 dark:text-stone-500">
            {isLogin
              ? 'Sign in to access your premium hampers and rewards'
              : 'Join Bhavani Dryfruits to get fresh rewards and deals'}
          </p>
        </div>

        <div className="flex bg-stone-100 dark:bg-stone-950 p-1.5 rounded-2xl">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all ${
              isLogin ? 'bg-white dark:bg-stone-900 text-amber-600 dark:text-amber-400 shadow-sm' : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all ${
              !isLogin ? 'bg-white dark:bg-stone-900 text-amber-600 dark:text-amber-400 shadow-sm' : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            Register
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-stone-500 dark:text-stone-400">Full Name</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full pl-9 pr-4 py-2.5 text-sm rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/30 text-stone-900 dark:text-stone-100"
                />
                <User className="absolute left-3 top-3.5 h-4 w-4 text-stone-400" />
              </div>
            </div>
          )}

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-stone-500 dark:text-stone-400">Email Address</label>
            <div className="relative">
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-9 pr-4 py-2.5 text-sm rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/30 text-stone-900 dark:text-stone-100"
              />
              <Mail className="absolute left-3 top-3.5 h-4 w-4 text-stone-400" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-stone-500 dark:text-stone-400">Password</label>
            <div className="relative">
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-9 pr-4 py-2.5 text-sm rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/30 text-stone-900 dark:text-stone-100"
              />
              <Lock className="absolute left-3 top-3.5 h-4 w-4 text-stone-400" />
            </div>
          </div>

          {isLogin && (
            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center space-x-2 text-stone-500 cursor-pointer">
                <input type="checkbox" className="rounded border-stone-300 dark:border-stone-800 accent-amber-600" />
                <span>Remember me</span>
              </label>
              <a href="/forgot-password" className="font-semibold text-amber-600 hover:underline">Forgot password?</a>
            </div>
          )}

          <Button variant="primary" type="submit" className="w-full py-3.5 rounded-xl text-sm font-bold mt-2">
            {isLogin ? 'Sign In' : 'Create Account'}
          </Button>
        </form>

        <div className="flex items-center justify-center space-x-2 text-[10px] text-stone-400 bg-stone-50 dark:bg-stone-950 p-3 rounded-xl">
          <ShieldAlert className="h-4 w-4 text-amber-500 shrink-0" />
          <span>Your password is fully encrypted and secure.</span>
        </div>
      </div>
    </div>
  );
}
