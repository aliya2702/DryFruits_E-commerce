import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, KeyRound } from 'lucide-react';
import Button from '../../components/common/Button';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-md mx-auto my-12 sm:my-20 px-4">
      <div className="bg-white dark:bg-stone-900 border border-stone-200/50 dark:border-stone-800/50 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
        <div className="text-center space-y-2">
          <span className="p-2.5 bg-gradient-to-tr from-amber-600 to-amber-400 rounded-2xl text-white inline-block">
            <KeyRound className="h-6 w-6" />
          </span>
          <h2 className="text-2xl font-extrabold text-stone-950 dark:text-white">
            {submitted ? 'Check Your Email' : 'Reset Password'}
          </h2>
          <p className="text-xs text-stone-400 dark:text-stone-500">
            {submitted
              ? `We have sent password recovery instructions to ${email}`
              : 'Enter your email address and we will send you a reset link'}
          </p>
        </div>

        {submitted ? (
          <div className="space-y-4 pt-2">
            <Button variant="secondary" onClick={() => setSubmitted(false)} className="w-full py-3.5 rounded-xl text-sm font-bold">
              Resend Email
            </Button>
            <Link to="/login" className="flex items-center justify-center space-x-2 text-xs font-semibold text-stone-500 hover:text-amber-600 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Login</span>
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-stone-500 dark:text-stone-400">Email Address</label>
              <div className="relative">
                <input type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full pl-9 pr-4 py-2.5 text-sm rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/30 text-stone-900 dark:text-stone-100" />
                <Mail className="absolute left-3 top-3.5 h-4 w-4 text-stone-400" />
              </div>
            </div>
            <Button variant="primary" type="submit" className="w-full py-3.5 rounded-xl text-sm font-bold mt-2">
              Send Reset Link
            </Button>
            <Link to="/login" className="flex items-center justify-center space-x-2 text-xs font-semibold text-stone-500 hover:text-amber-600 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Login</span>
            </Link>
          </form>
        )}
      </div>
    </div>
  );
}
