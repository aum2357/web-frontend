"use client";

import { useState } from "react";

interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: number;
  image: string;
  offer?: string;
  isOpen: boolean;
  priceRange: string;
  location: string;
}

const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "Spice Garden",
    cuisine: "Indian, North Indian",
    rating: 4.8,
    deliveryTime: "30-45 mins",
    deliveryFee: 0,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&crop=center&q=85",
    offer: "50% OFF up to ₹100",
    isOpen: true,
    priceRange: "₹₹",
    location: "Sector 18, Noida"
  },
  {
    id: 2,
    name: "Pizza Palace",
    cuisine: "Italian, Pizza",
    rating: 4.5,
    deliveryTime: "25-35 mins",
    deliveryFee: 20,
    image: "https://images.unsplash.com/photo-1592861956120-e524fc739696?w=400&h=300&fit=crop&crop=center&q=85",
    offer: "Buy 1 Get 1 Free",
    isOpen: true,
    priceRange: "₹₹₹",
    location: "CP, Delhi"
  },
  {
    id: 3,
    name: "Sushi Master",
    cuisine: "Japanese, Sushi",
    rating: 4.9,
    deliveryTime: "45-60 mins",
    deliveryFee: 30,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center&q=85",
    isOpen: true,
    priceRange: "₹₹₹₹",
    location: "Khan Market, Delhi"
  },
  {
    id: 4,
    name: "Burger Hub",
    cuisine: "American, Burgers",
    rating: 4.3,
    deliveryTime: "20-30 mins",
    deliveryFee: 15,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop&crop=center&q=85",
    offer: "20% OFF on orders above ₹300",
    isOpen: false,
    priceRange: "₹₹",
    location: "Gurgaon"
  },
  {
    id: 5,
    name: "Taco Fiesta",
    cuisine: "Mexican, Tacos",
    rating: 4.4,
    deliveryTime: "35-50 mins",
    deliveryFee: 25,
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&crop=center&q=85",
    isOpen: true,
    priceRange: "₹₹",
    location: "Vasant Kunj, Delhi"
  },
  {
    id: 6,
    name: "Noodle House",
    cuisine: "Chinese, Asian",
    rating: 4.6,
    deliveryTime: "25-40 mins",
    deliveryFee: 0,
    image: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=400&h=300&fit=crop&crop=center&q=85",
    offer: "Free delivery on orders above ₹200",
    isOpen: false,
    priceRange: "₹₹",
    location: "Lajpat Nagar, Delhi"
  },
  {
    id: 7,
    name: "Cafe Mocha",
    cuisine: "Coffee, Desserts",
    rating: 4.2,
    deliveryTime: "15-25 mins",
    deliveryFee: 10,
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop&crop=center&q=85",
    isOpen: false,
    priceRange: "₹₹",
    location: "Connaught Place, Delhi"
  },
  {
    id: 8,
    name: "Biryani Express",
    cuisine: "Indian, Biryani",
    rating: 4.7,
    deliveryTime: "30-40 mins",
    deliveryFee: 5,
    image: "https://images.unsplash.com/photo-1563379091339-03246cb42d92?w=400&h=300&fit=crop&crop=center&q=85",
    isOpen: true,
    priceRange: "₹₹₹",
    location: "Karol Bagh, Delhi"
  }
];

export default function Restaurants() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 font-sans">
      {/* Header Section with Food Background */}
      <div className="py-16 px-6 relative overflow-hidden min-h-[500px]">
        {/* Background Food Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1920&h=600&fit=crop&crop=center" 
            alt="Delicious Food Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Wider Header Container with Footer-Matched Gradient */}
          <div className="text-center p-6 bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-700/80 backdrop-blur-sm rounded-2xl mx-auto max-w-6xl">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-800 to-gray-700 text-white px-4 py-1 rounded-full text-sm font-medium mb-4 shadow-2xl backdrop-blur-sm border border-white/20 font-sans">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Premium Dining Network
            </div>
            <h1 className="text-4xl font-bold font-sans text-white mb-4 drop-shadow-2xl">
              Premium Restaurants
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed drop-shadow-lg font-sans">
              Discover exceptional dining experiences near you with our curated selection of premium restaurants
            </p>
          </div>
        </div>
      </div>

      {/* Restaurant Cards Section */}
      <div className="px-2 pb-12 pt-12">
        {/* Professional Restaurant Grid - 4 Cards Per Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-start max-w-full">
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="group bg-white/95 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/50 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-[1.03] hover:-translate-y-2 cursor-pointer"
            >
              {/* Premium Restaurant Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://via.placeholder.com/400x300/4ade80/ffffff?text=${encodeURIComponent(restaurant.name)}`;
                  }}
                />
                {/* Elegant Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 group-hover:from-blue-600/5 group-hover:to-purple-600/5 transition-colors duration-500"></div>
                




                {/* Premium Cuisine Badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-xl text-gray-800 px-4 py-2 rounded-xl text-sm font-semibold font-sans shadow-xl border border-white/50 text-center">
                    {restaurant.cuisine}
                  </div>
                </div>
              </div>

              <div className="p-4">
                {/* Compact Restaurant Header */}
                <div className="text-center mb-3">
                  <h3 className="text-xl font-bold font-sans text-gray-900 mb-2">{restaurant.name}</h3>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600 font-medium font-sans text-base">{restaurant.location}</span>
                  </div>
                  
                  {/* Status Badge */}
                  <div className="flex justify-center">
                    {restaurant.isOpen ? (
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold font-sans shadow-lg flex items-center gap-1">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <span>OPEN NOW</span>
                      </div>
                    ) : (
                      <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold font-sans shadow-lg flex items-center gap-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span>CLOSED NOW</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Enhanced Info Cards Grid */}
                <div className="grid grid-cols-3 gap-2 mb-3">
                  <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-lg p-2 text-center border border-emerald-200/50 shadow-sm">
                    <div className="text-xs text-emerald-600 font-sans font-semibold mb-1">DELIVERY</div>
                    <div className="font-bold font-sans text-gray-900 text-xs">
                      {restaurant.deliveryFee === 0 ? "FREE" : `₹${restaurant.deliveryFee}`}
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-2 text-center border border-purple-200/50 shadow-sm">
                    <div className="text-xs text-purple-600 font-sans font-semibold mb-1">PRICE</div>
                    <div className="font-bold font-sans text-gray-900 text-xs">{restaurant.priceRange}</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-2 text-center border border-orange-200/50 shadow-sm">
                    <div className="text-xs text-orange-600 font-sans font-semibold mb-1">RATING</div>
                    <div className="font-bold font-sans text-gray-900 text-xs flex items-center justify-center gap-1">
                      <span>★</span>
                      <span>{restaurant.rating}</span>
                    </div>
                  </div>
                </div>



                {/* Book Seat Button */}
                <button
                  disabled={!restaurant.isOpen}
                  className={`w-full py-3 rounded-lg font-bold font-sans transition-all duration-500 text-sm shadow-lg border-2 mb-3 ${
                    restaurant.isOpen
                      ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-transparent hover:shadow-xl transform hover:scale-[1.02] hover:-translate-y-1 hover:from-yellow-600 hover:to-orange-600"
                      : "bg-gray-200 text-gray-500 cursor-not-allowed border-gray-300"
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 9l2 2 4-4m0-5H8m8 0V9a2 2 0 00-2-2H10a2 2 0 00-2 2v2m8 0v9a2 2 0 01-2 2H10a2 2 0 01-2-2v-9m8 0H8" />
                    </svg>
                    <span>{restaurant.isOpen ? "BOOK SEAT" : "UNAVAILABLE"}</span>
                  </div>
                </button>

                {/* Order Food Button */}
                <button
                  disabled={!restaurant.isOpen}
                  className={`w-full py-3 rounded-lg font-bold font-sans transition-all duration-500 text-sm shadow-lg border-2 mb-3 ${
                    restaurant.isOpen
                      ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white border-transparent hover:shadow-xl transform hover:scale-[1.02] hover:-translate-y-1 hover:from-green-600 hover:to-emerald-600"
                      : "bg-gray-200 text-gray-500 cursor-not-allowed border-gray-300"
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                    </svg>
                    <span>{restaurant.isOpen ? "ORDER FOOD" : "UNAVAILABLE"}</span>
                  </div>
                </button>

                {/* Compact Action Button */}
                <button
                  disabled={!restaurant.isOpen}
                  className={`w-full py-3 rounded-lg font-bold font-sans transition-all duration-500 text-sm shadow-lg border-2 ${
                    restaurant.isOpen
                      ? "bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white border-transparent hover:shadow-xl transform hover:scale-[1.02] hover:-translate-y-1"
                      : "bg-gray-200 text-gray-500 cursor-not-allowed border-gray-300"
                  }`}
                  style={restaurant.isOpen ? { backgroundSize: '200% 200%' } : {}}
                >
                  {restaurant.isOpen ? (
                    <div className="flex items-center justify-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                      </svg>
                      <span>VIEW MENU</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>CLOSED</span>
                    </div>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Stats Section */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-2xl p-12 mt-16 text-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-sans mb-4">Why Choose Our Premium Network?</h2>
            <p className="text-gray-300 text-xl font-sans max-w-2xl mx-auto">
              Experience culinary excellence with our curated selection of premium restaurants
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-5xl mb-4">🏆</div>
              <div className="text-3xl font-bold font-sans text-blue-400 mb-2">500+</div>
              <div className="text-gray-300 font-medium font-sans">Premium Partners</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-5xl mb-4">⚡</div>
              <div className="text-3xl font-bold font-sans text-green-400 mb-2">25 mins</div>
              <div className="text-gray-300 font-medium font-sans">Lightning Delivery</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-5xl mb-4">⭐</div>
              <div className="text-3xl font-bold font-sans text-yellow-400 mb-2">4.8★</div>
              <div className="text-gray-300 font-medium font-sans">Excellence Rating</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-5xl mb-4">🎯</div>
              <div className="text-3xl font-bold font-sans text-purple-400 mb-2">2M+</div>
              <div className="text-gray-300 font-medium font-sans">Satisfied Foodies</div>
            </div>
          </div>

          {/* Additional Features */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="text-xl font-bold font-sans mb-2">Safe & Secure</h3>
              <p className="text-gray-400 font-sans">Contactless delivery and secure payments</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🌟</div>
              <h3 className="text-xl font-bold font-sans mb-2">Quality Assured</h3>
              <p className="text-gray-400 font-sans">Handpicked restaurants with premium standards</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">💎</div>
              <h3 className="text-xl font-bold font-sans mb-2">VIP Experience</h3>
              <p className="text-gray-400 font-sans">Exclusive offers and priority support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}