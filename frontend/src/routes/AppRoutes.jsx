import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Loader2 } from 'lucide-react';

// Lazy load all pages for code splitting
const Home = lazy(() => import('../pages/Home/Home'));
const Shop = lazy(() => import('../pages/Shop/Shop'));
const ProductDetails = lazy(() => import('../pages/ProductDetails/ProductDetails'));
const Login = lazy(() => import('../pages/Login/Login'));
const Signup = lazy(() => import('../pages/Signup/Signup'));
const ForgotPassword = lazy(() => import('../pages/ForgotPassword/ForgotPassword'));
const Cart = lazy(() => import('../pages/Cart/Cart'));
const Wishlist = lazy(() => import('../pages/Wishlist/Wishlist'));
const Checkout = lazy(() => import('../pages/Checkout/Checkout'));
const Profile = lazy(() => import('../pages/Profile/Profile'));
const MyOrders = lazy(() => import('../pages/MyOrders/MyOrders'));
const OrderTracking = lazy(() => import('../pages/OrderTracking/OrderTracking'));
const Admin = lazy(() => import('../pages/Admin/Admin'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

// Loading fallback indicator
function LoadingScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-stone-500 space-y-4">
      <Loader2 className="h-10 w-10 text-amber-600 animate-spin" />
      <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">
        Loading Freshness...
      </p>
    </div>
  );
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          {/* Layout wraps all routes — Navbar, Footer, ProgressBar */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="shop/:id" element={<ProductDetails />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="cart" element={<Cart />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="profile" element={<Profile />} />
            <Route path="profile/orders" element={<MyOrders />} />
            <Route path="profile/orders/:id/track" element={<OrderTracking />} />
            <Route path="admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}