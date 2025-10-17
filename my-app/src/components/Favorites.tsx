"use client";

import { useState } from "react";

interface FavoriteItem {
  id: number;
  name: string;
  type: "restaurant" | "dish";
  rating: number;
  image: string;
  cuisine?: string;
  price?: number;
  restaurant?: string;
  addedDate: string;
  isAvailable?: boolean;
  deliveryTime?: string;
  orderCount?: number;
  lastOrderDate?: string;
}

const favoriteItems: FavoriteItem[] = [
  {
    id: 1,
    name: "Spice Garden",
    type: "restaurant",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&crop=center&q=85",
    cuisine: "Indian, North Indian",
    addedDate: "2024-03-15",
    isAvailable: true,
    deliveryTime: "30-45 mins",
    orderCount: 12,
    lastOrderDate: "2024-03-20"
  },
  {
    id: 2,
    name: "Butter Chicken",
    type: "dish",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=300&h=200&fit=crop&crop=center",
    price: 350,
    restaurant: "Spice Garden",
    addedDate: "2024-03-10",
    isAvailable: true,
    deliveryTime: "30-45 mins",
    orderCount: 8,
    lastOrderDate: "2024-03-18"
  },
  {
    id: 3,
    name: "Pizza Palace",
    type: "restaurant",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop&crop=center&q=85",
    cuisine: "Italian, Pizza",
    addedDate: "2024-03-08",
    isAvailable: false,
    deliveryTime: "25-35 mins",
    orderCount: 5,
    lastOrderDate: "2024-03-12"
  },
  {
    id: 4,
    name: "Margherita Pizza",
    type: "dish",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=300&h=200&fit=crop&crop=center",
    price: 280,
    restaurant: "Pizza Palace",
    addedDate: "2024-03-05",
    isAvailable: false,
    deliveryTime: "25-35 mins",
    orderCount: 3,
    lastOrderDate: "2024-03-10"
  },
  {
    id: 5,
    name: "Sushi Master",
    type: "restaurant",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center&q=85",
    cuisine: "Japanese, Sushi",
    addedDate: "2024-03-01",
    isAvailable: true,
    deliveryTime: "45-60 mins",
    orderCount: 15,
    lastOrderDate: "2024-03-22"
  },
  {
    id: 6,
    name: "Chicken Biryani",
    type: "dish",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=300&h=200&fit=crop&crop=center",
    price: 420,
    restaurant: "Spice Garden",
    addedDate: "2024-03-14",
    isAvailable: true,
    deliveryTime: "30-45 mins",
    orderCount: 6,
    lastOrderDate: "2024-03-19"
  }
];

export default function Favorites() {
  const [favorites, setFavorites] = useState(favoriteItems);

  const removeFavorite = (id: number) => {
    setFavorites(prev => prev.filter(item => item.id !== id));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const totalOrderCount = favorites.reduce((sum, item) => sum + (item.orderCount || 0), 0);
  const availableCount = favorites.filter(item => item.isAvailable).length;
  const avgRating = favorites.reduce((sum, item) => sum + item.rating, 0) / favorites.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 font-sans">
      {/* Header Section with Food Background */}
      <div className="py-16 px-6 relative overflow-hidden min-h-[400px]">
        {/* Background Food Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=1920&h=600&fit=crop&crop=center" 
            alt="Favorites Food Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Professional Header Container */}
          <div className="text-center p-6 bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-700/80 backdrop-blur-sm rounded-2xl mx-auto max-w-6xl">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-800 to-gray-700 text-white px-4 py-1 rounded-full text-sm font-medium mb-4 shadow-2xl backdrop-blur-sm border border-white/20 font-sans">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
              Personal Collection
            </div>
            <h1 className="text-4xl font-bold font-sans text-white mb-4 drop-shadow-2xl">
              My Favorites
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed drop-shadow-lg font-sans">
              Your curated collection of beloved restaurants and dishes
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="px-2 pb-12 pt-12">
        {/* Enhanced Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8 max-w-7xl mx-auto">
          <div className="bg-white/90 backdrop-blur-xl rounded-xl p-4 border border-gray-200/50 shadow-lg text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1 font-sans">
              {favorites.length}
            </div>
            <div className="text-gray-600 text-sm font-sans">Total Favorites</div>
          </div>
          <div className="bg-white/90 backdrop-blur-xl rounded-xl p-4 border border-gray-200/50 shadow-lg text-center">
            <div className="text-2xl font-bold text-green-600 mb-1 font-sans">
              {availableCount}
            </div>
            <div className="text-gray-600 text-sm font-sans">Available Now</div>
          </div>
          <div className="bg-white/90 backdrop-blur-xl rounded-xl p-4 border border-gray-200/50 shadow-lg text-center">
            <div className="text-2xl font-bold text-purple-600 mb-1 font-sans">
              {totalOrderCount}
            </div>
            <div className="text-gray-600 text-sm font-sans">Total Orders</div>
          </div>
          <div className="bg-white/90 backdrop-blur-xl rounded-xl p-4 border border-gray-200/50 shadow-lg text-center">
            <div className="text-2xl font-bold text-orange-600 mb-1 font-sans">
              {avgRating.toFixed(1)}★
            </div>
            <div className="text-gray-600 text-sm font-sans">Avg Rating</div>
          </div>
          <div className="bg-white/90 backdrop-blur-xl rounded-xl p-4 border border-gray-200/50 shadow-lg text-center">
            <div className="text-2xl font-bold text-red-600 mb-1 font-sans">
              {favorites.filter(item => item.type === "dish").length}
            </div>
            <div className="text-gray-600 text-sm font-sans">Dishes</div>
          </div>
        </div>

        {/* Favorites Grid */}
        {favorites.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-6">💔</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-sans">No favorites found</h2>
            <p className="text-gray-600 mb-8 font-sans">
              You haven't added any favorites yet. Start exploring restaurants and dishes!
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 font-sans">
              Explore Now
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-full">
            {favorites.map((item: FavoriteItem) => (
              <div
                key={item.id}
                className="group bg-white/95 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/50 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-[1.03] hover:-translate-y-2 cursor-pointer"
              >
                {/* Item Image */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Status and Type Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <div className={`px-3 py-1 rounded-full text-xs font-bold font-sans shadow-xl ${
                      item.isAvailable 
                        ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white"
                        : "bg-gradient-to-r from-red-500 to-red-600 text-white"
                    }`}>
                      {item.isAvailable ? "AVAILABLE" : "CLOSED"}
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-bold font-sans shadow-xl ${
                      item.type === "restaurant" 
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                        : "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                    }`}>
                      {item.type === "restaurant" ? "RESTAURANT" : "DISH"}
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFavorite(item.id)}
                    className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-xl transition-all duration-300 hover:scale-110"
                    title="Remove from favorites"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="p-4">
                  {/* Header */}
                  <div className="text-center mb-3">
                    <h3 className="text-lg font-bold font-sans text-gray-900 mb-2">{item.name}</h3>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-yellow-500 text-lg">★</span>
                      <span className="font-bold font-sans text-gray-900">{item.rating}</span>
                    </div>
                    <div className="text-gray-600 font-medium font-sans text-sm">
                      {item.type === "restaurant" ? item.cuisine : `from ${item.restaurant}`}
                    </div>
                  </div>

                  {/* Info Cards */}
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-2 text-center border border-blue-200/50 shadow-sm">
                      <div className="text-xs text-blue-600 font-sans font-semibold mb-1">ORDERS</div>
                      <div className="font-bold font-sans text-gray-900 text-xs">{item.orderCount || 0}</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-2 text-center border border-purple-200/50 shadow-sm">
                      <div className="text-xs text-purple-600 font-sans font-semibold mb-1">ADDED</div>
                      <div className="font-bold font-sans text-gray-900 text-xs">{formatDate(item.addedDate)}</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    {item.type === "dish" && item.price && (
                      <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-2 text-center border border-emerald-200/50">
                        <div className="text-sm font-bold text-emerald-700 font-sans">₹{item.price}</div>
                      </div>
                    )}
                    <button
                      disabled={!item.isAvailable}
                      className={`w-full py-2 rounded-lg font-bold font-sans transition-all duration-300 text-sm shadow-lg ${
                        item.isAvailable
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl transform hover:scale-[1.02]"
                          : "bg-gray-200 text-gray-500 cursor-not-allowed"
                      }`}
                    >
                      {item.isAvailable ? (item.type === "restaurant" ? "VIEW MENU" : "ORDER NOW") : "UNAVAILABLE"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Enhanced Footer Section */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-2xl p-12 mt-16 text-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-sans mb-4">Your Favorite Collection</h2>
            <p className="text-gray-300 text-xl font-sans max-w-2xl mx-auto">
              Keep track of your beloved restaurants and dishes for quick access
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">❤️</div>
              <h3 className="text-xl font-bold font-sans mb-2">Quick Access</h3>
              <p className="text-gray-400 font-sans">Instantly find your favorite restaurants and dishes</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-xl font-bold font-sans mb-2">Track Orders</h3>
              <p className="text-gray-400 font-sans">Monitor your order history and preferences</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-xl font-bold font-sans mb-2">Personalized</h3>
              <p className="text-gray-400 font-sans">Get recommendations based on your favorites</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}