"use client";

import { useState } from "react";

interface Order {
  id: string;
  restaurant: string;
  items: string[];
  total: number;
  status: "preparing" | "on_way" | "delivered" | "cancelled";
  orderDate: string;
  deliveryTime?: string;
  rating?: number;
  image: string;
}

const orders: Order[] = [
  {
    id: "ORD-001",
    restaurant: "Spice Garden",
    items: ["Butter Chicken", "Garlic Naan", "Basmati Rice"],
    total: 450,
    status: "preparing",
    orderDate: "2024-03-15T14:30:00",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=200&h=200&fit=crop&crop=center"
  },
  {
    id: "ORD-002",
    restaurant: "Pizza Palace",
    items: ["Margherita Pizza", "Garlic Bread"],
    total: 380,
    status: "on_way",
    orderDate: "2024-03-14T19:15:00",
    deliveryTime: "20 mins",
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=200&h=200&fit=crop&crop=center"
  },
  {
    id: "ORD-003",
    restaurant: "Burger Hub",
    items: ["Classic Burger", "French Fries", "Coke"],
    total: 320,
    status: "delivered",
    orderDate: "2024-03-13T12:45:00",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&h=200&fit=crop&crop=center"
  },
  {
    id: "ORD-004",
    restaurant: "Sushi Master",
    items: ["California Roll", "Salmon Nigiri", "Miso Soup"],
    total: 680,
    status: "delivered",
    orderDate: "2024-03-12T20:30:00",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=200&h=200&fit=crop&crop=center"
  },
  {
    id: "ORD-005",
    restaurant: "Noodle House",
    items: ["Hakka Noodles", "Manchurian"],
    total: 280,
    status: "cancelled",
    orderDate: "2024-03-11T18:00:00",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=200&h=200&fit=crop&crop=center"
  }
];

export default function Orders() {

  const getStatusColor = (status: string) => {
    switch (status) {
      case "preparing":
        return "bg-yellow-100 text-yellow-700";
      case "on_way":
        return "bg-blue-100 text-blue-700";
      case "delivered":
        return "bg-green-100 text-green-700";
      case "cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "preparing":
        return "Preparing";
      case "on_way":
        return "On the way";
      case "delivered":
        return "Delivered";
      case "cancelled":
        return "Cancelled";
      default:
        return status;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50/30 to-pink-50/20 font-sans relative overflow-hidden">
      {/* Beautiful Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-pink-400/8 to-orange-400/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-r from-emerald-400/8 to-cyan-400/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-1/3 w-64 h-64 bg-gradient-to-r from-violet-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Professional Header with Background */}
      <div className="py-16 px-6 relative overflow-hidden min-h-[400px] z-10">
        {/* Beautiful Gradient Background */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>
          {/* Animated Gradient Orbs */}
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-blue-400/15 to-purple-400/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-gray-600/20 to-gray-700/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Professional Header Container with Glassy Effect */}
          <div className="text-center p-8 bg-white/10 backdrop-blur-xl rounded-3xl mx-auto max-w-6xl border border-white/20 shadow-2xl relative overflow-hidden">
            {/* Glass effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/5 rounded-3xl"></div>
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-3xl"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md text-white px-6 py-2 rounded-full text-sm font-medium mb-6 shadow-xl border border-white/25 font-sans">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                Order Management
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                My Orders &
                <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                  Delivery History
                </span>
              </h1>
              <p className="text-gray-200 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
                Track your current orders and explore your complete dining journey
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards Section - Separate from header */}
      <div className="max-w-7xl mx-auto px-2 md:px-4 py-8 relative z-20">
        {/* Enhanced Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="group bg-gradient-to-br from-white/98 via-blue-50/50 to-purple-50/60 backdrop-blur-xl rounded-3xl p-8 border border-white/70 shadow-2xl text-center relative overflow-hidden hover:scale-[1.02] transition-all duration-300">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-lg"></div>
            <div className="relative z-10">
              <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl shadow-lg mb-4 mx-auto w-fit">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">{orders.length}</div>
              <div className="text-gray-700 font-semibold">Total Orders</div>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-white/98 via-yellow-50/50 to-orange-50/60 backdrop-blur-xl rounded-3xl p-8 border border-white/70 shadow-2xl text-center relative overflow-hidden hover:scale-[1.02] transition-all duration-300">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-yellow-200/20 to-orange-200/20 rounded-full blur-lg"></div>
            <div className="relative z-10">
              <div className="p-4 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl shadow-lg mb-4 mx-auto w-fit">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-2">
                {orders.filter(o => ["preparing", "on_way"].includes(o.status)).length}
              </div>
              <div className="text-gray-700 font-semibold">Active Orders</div>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-white/98 via-green-50/50 to-emerald-50/60 backdrop-blur-xl rounded-3xl p-8 border border-white/70 shadow-2xl text-center relative overflow-hidden hover:scale-[1.02] transition-all duration-300">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-green-200/20 to-emerald-200/20 rounded-full blur-lg"></div>
            <div className="relative z-10">
              <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl shadow-lg mb-4 mx-auto w-fit">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                {orders.filter(o => o.status === "delivered").length}
              </div>
              <div className="text-gray-700 font-semibold">Delivered</div>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-white/98 via-purple-50/50 to-pink-50/60 backdrop-blur-xl rounded-3xl p-8 border border-white/70 shadow-2xl text-center relative overflow-hidden hover:scale-[1.02] transition-all duration-300">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-lg"></div>
            <div className="relative z-10">
              <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg mb-4 mx-auto w-fit">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                ₹{orders.reduce((sum, order) => order.status === "delivered" ? sum + order.total : sum, 0)}
              </div>
              <div className="text-gray-700 font-semibold">Total Spent</div>
            </div>
          </div>
        </div>
      </div>

      {/* Orders Grid Section - Separate container */}
      <div className="w-full px-0 pb-16 relative z-20">
        {/* Orders Grid */}
        {orders.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-6">📦</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No orders found</h2>
            <p className="text-gray-600 mb-8">
              You haven't placed any orders yet. Start exploring our menu!
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300">
              Browse Menu
            </button>
          </div>
        ) : (
          <div className="flex flex-wrap gap-6">
            {orders.map((order) => (
              <div
                key={order.id}
                className="group bg-gradient-to-br from-white/98 via-gray-50/40 to-blue-50/50 backdrop-blur-xl rounded-3xl p-6 border border-white/70 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
              >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-200/10 to-purple-200/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Enhanced Restaurant Image */}
                  <div className="relative w-full h-48 rounded-2xl overflow-hidden shadow-xl ring-2 ring-white/50 group-hover:ring-blue-200/60 transition-all duration-300 mb-4">
                    <img 
                      src={order.image} 
                      alt={order.restaurant}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-3 right-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(order.status)}`}>
                        {getStatusText(order.status)}
                      </span>
                    </div>
                    
                    {/* Order ID */}
                    <div className="absolute bottom-3 left-3">
                      <span className="bg-black/50 text-white px-2 py-1 rounded-lg text-xs font-medium backdrop-blur-sm">
                        {order.id}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="space-y-4">
                    {/* Restaurant Name & Price */}
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{order.restaurant}</h3>
                        <div className="text-gray-500 text-sm">{formatDate(order.orderDate)}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">₹{order.total}</div>
                        {order.deliveryTime && (
                          <div className="text-blue-600 text-xs font-medium">{order.deliveryTime}</div>
                        )}
                      </div>
                    </div>

                    {/* Order Items */}
                    <div>
                      <div className="flex flex-wrap gap-1">
                        {order.items.slice(0, 2).map((item, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-xs rounded-full font-medium border border-blue-200/50"
                          >
                            {item}
                          </span>
                        ))}
                        {order.items.length > 2 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                            +{order.items.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Status & Rating */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {order.rating && (
                          <div className="flex items-center gap-1">
                            <span className="text-yellow-500">★</span>
                            <span className="text-gray-700 font-semibold text-sm">{order.rating}</span>
                          </div>
                        )}
                        {order.status === "preparing" && (
                          <div className="flex items-center gap-1 text-yellow-600">
                            <svg className="w-3 h-3 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            <span className="text-xs font-medium">Preparing</span>
                          </div>
                        )}
                        {order.status === "on_way" && (
                          <div className="flex items-center gap-1 text-blue-600">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <span className="text-xs font-medium">On the way</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-3 rounded-xl text-sm font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300">
                        {order.status === "delivered" ? "Reorder" : "Track"}
                      </button>
                      {order.status === "delivered" && !order.rating && (
                        <button className="px-3 py-2 border-2 border-yellow-500 text-yellow-600 rounded-xl text-sm font-semibold hover:bg-yellow-50 transition-all duration-300">
                          Rate
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quick Actions Section */}
      <div className="max-w-7xl mx-auto px-2 md:px-4 pb-8 relative z-20">
        {/* Quick Actions */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-lg mt-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Quick Actions</h2>
            <p className="text-gray-600">Need help with your orders?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300 cursor-pointer">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="font-semibold text-gray-900 mb-2">Contact Support</h3>
              <p className="text-gray-600 text-sm">Get help with your orders</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-colors duration-300 cursor-pointer">
              <div className="text-3xl mb-3">🔄</div>
              <h3 className="font-semibold text-gray-900 mb-2">Reorder Favorites</h3>
              <p className="text-gray-600 text-sm">Order your favorite meals again</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors duration-300 cursor-pointer">
              <div className="text-3xl mb-3">⭐</div>
              <h3 className="font-semibold text-gray-900 mb-2">Rate & Review</h3>
              <p className="text-gray-600 text-sm">Share your dining experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Footer */}
      <div className="relative z-20">
        {/* Professional Footer */}
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 mt-16 rounded-3xl">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* About Section */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  OrderTracker
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Your complete order history and tracking hub. Never lose track of your favorite meals and dining experiences.
                </p>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-100">Order Actions</h4>
                <div className="space-y-2">
                  {['Track Orders', 'Reorder Favorites', 'Rate & Review', 'Order History'].map((link) => (
                    <a key={link} href="#" className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">
                      {link}
                    </a>
                  ))}
                </div>
              </div>

              {/* Support */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-100">Need Help?</h4>
                <div className="space-y-2 text-gray-300 text-sm">
                  <p>📞 +91 98765 43210</p>
                  <p>✉️ orders@foodieapp.com</p>
                  <p>💬 24/7 Order Support</p>
                </div>
              </div>

              {/* Order Stats */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-100">Your Stats</h4>
                <div className="space-y-2">
                  <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs">
                    {orders.filter(o => o.status === "delivered").length} Delivered
                  </div>
                  <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs">
                    ₹{orders.reduce((sum, order) => order.status === "delivered" ? sum + order.total : sum, 0)} Spent
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
              <p>&copy; 2024 OrderTracker. All rights reserved. | Your Dining Journey Companion</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}