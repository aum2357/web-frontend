"use client";

import { useAuth } from "@/contexts/AuthContext";
import AuthForm from "@/components/AuthForm";
import { useState } from "react";

export default function ProfilePage() {
  const { user, logout, isLoading, isAuthenticated } = useAuth();
  const [showAuthForm, setShowAuthForm] = useState(false);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AuthForm onSuccess={() => setShowAuthForm(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-lg mb-8">
          <div className="flex items-center gap-6 mb-6">
            <div className="relative">
              <img
                src={user?.avatar || `https://ui-avatars.com/api/?name=${user?.name}&background=6366f1&color=fff`}
                alt={user?.name}
                className="w-24 h-24 rounded-full border-4 border-blue-500/20"
              />
              <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome, {user?.name}!
              </h1>
              <p className="text-gray-600 text-lg mb-3">{user?.email}</p>
              <div className="flex gap-3">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300">
                  Edit Profile
                </button>
                <button
                  onClick={logout}
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-lg hover:from-red-400 hover:to-red-500 transition-all duration-300"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
            <div className="text-gray-600">Orders Placed</div>
          </div>
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">₹2,450</div>
            <div className="text-gray-600">Total Spent</div>
          </div>
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">8.5★</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Recent Orders</h2>
            <div className="space-y-4">
              {[
                { id: "#ORD-001", restaurant: "Spice Garden", date: "2 days ago", status: "Delivered", amount: "₹450" },
                { id: "#ORD-002", restaurant: "Pizza Palace", date: "5 days ago", status: "Delivered", amount: "₹680" },
                { id: "#ORD-003", restaurant: "Burger Hub", date: "1 week ago", status: "Delivered", amount: "₹320" }
              ].map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50/50 rounded-xl">
                  <div>
                    <div className="font-semibold text-gray-900">{order.id}</div>
                    <div className="text-sm text-gray-600">{order.restaurant}</div>
                    <div className="text-xs text-gray-500">{order.date}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900">{order.amount}</div>
                    <div className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">
                      {order.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Favorite Restaurants</h2>
            <div className="space-y-4">
              {[
                { name: "Spice Garden", rating: 4.8, orders: 5, cuisine: "Indian" },
                { name: "Pizza Palace", rating: 4.5, orders: 3, cuisine: "Italian" },
                { name: "Sushi Master", rating: 4.9, orders: 2, cuisine: "Japanese" }
              ].map((restaurant) => (
                <div key={restaurant.name} className="flex items-center gap-4 p-4 bg-gray-50/50 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {restaurant.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{restaurant.name}</div>
                    <div className="text-sm text-gray-600">{restaurant.cuisine} • {restaurant.orders} orders</div>
                    <div className="flex items-center gap-1 text-sm">
                      <span className="text-yellow-500">★</span>
                      <span className="text-gray-600">{restaurant.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Account Settings */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 shadow-lg mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Account Settings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="text-left p-4 bg-gray-50/50 rounded-xl hover:bg-gray-100/50 transition-all duration-300">
              <div className="font-semibold text-gray-900">Personal Information</div>
              <div className="text-sm text-gray-600">Update your name, email, and profile picture</div>
            </button>
            <button className="text-left p-4 bg-gray-50/50 rounded-xl hover:bg-gray-100/50 transition-all duration-300">
              <div className="font-semibold text-gray-900">Delivery Addresses</div>
              <div className="text-sm text-gray-600">Manage your saved delivery locations</div>
            </button>
            <button className="text-left p-4 bg-gray-50/50 rounded-xl hover:bg-gray-100/50 transition-all duration-300">
              <div className="font-semibold text-gray-900">Payment Methods</div>
              <div className="text-sm text-gray-600">Add or update your payment cards</div>
            </button>
            <button className="text-left p-4 bg-gray-50/50 rounded-xl hover:bg-gray-100/50 transition-all duration-300">
              <div className="font-semibold text-gray-900">Notification Preferences</div>
              <div className="text-sm text-gray-600">Control how you receive updates</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}