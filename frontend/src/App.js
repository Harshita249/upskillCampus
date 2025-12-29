import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";

// User pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";

// Admin pages
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminProducts from "./pages/AdminProducts";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  // ✅ FORCE HOME RENDER ON INITIAL LOAD
  if (location.pathname === "/") {
    return (
      <div>
        {!isAdminRoute && <Header />}
        <Home />
      </div>
    );
  }

  return (
    <div>
      {/* Hide header on admin pages */}
      {!isAdminRoute && <Header />}

      <Routes>
        {/* User Routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/profile" element={<Profile />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/products" element={<AdminProducts />} />
      </Routes>
    </div>
  );
}

export default App;
