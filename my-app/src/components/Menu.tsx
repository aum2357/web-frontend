"use client";

import { useState } from "react";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  isVeg: boolean;
  isPopular?: boolean;
  isNew?: boolean;
  preparationTime: string;
  calories: number;
  spiceLevel: number;
  ingredients: string[];
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Butter Chicken",
    description: "Premium tender chicken in rich, creamy tomato-cashew gravy with aromatic spices",
    price: 350,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=300&h=200&fit=crop&crop=center",
    category: "Main Course",
    rating: 4.8,
    reviews: 1247,
    isVeg: false,
    isPopular: true,
    preparationTime: "25 min",
    calories: 420,
    spiceLevel: 2,
    ingredients: ["Chicken", "Tomatoes", "Cashews", "Cream", "Garam Masala", "Ginger-Garlic"]
  },
  {
    id: 2,
    name: "Paneer Tikka Masala",
    description: "Char-grilled cottage cheese cubes in signature tikka masala sauce",
    price: 280,
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300&h=200&fit=crop&crop=center",
    category: "Main Course",
    rating: 4.6,
    reviews: 892,
    isVeg: true,
    preparationTime: "20 min",
    calories: 380,
    spiceLevel: 2,
    ingredients: ["Paneer", "Bell Peppers", "Onions", "Tomato Gravy", "Cream", "Tikka Spices"]
  },
  {
    id: 3,
    name: "Biryani Special",
    description: "Slow-cooked aromatic basmati rice with premium meat and exotic spices",
    price: 420,
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop&crop=center",
    category: "Rice",
    rating: 4.9,
    reviews: 2156,
    isVeg: false,
    isPopular: true,
    preparationTime: "45 min",
    calories: 650,
    spiceLevel: 3,
    ingredients: ["Basmati Rice", "Mutton/Chicken", "Saffron", "Fried Onions", "Mint", "Biryani Masala"]
  },
  {
    id: 4,
    name: "Masala Dosa",
    description: "Crispy golden rice crepe stuffed with spiced potato filling and chutneys",
    price: 150,
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=300&h=200&fit=crop&crop=center",
    category: "South Indian",
    rating: 4.5,
    reviews: 756,
    isVeg: true,
    preparationTime: "15 min",
    calories: 320,
    spiceLevel: 1,
    ingredients: ["Rice", "Urad Dal", "Potatoes", "Mustard Seeds", "Curry Leaves", "Green Chili"]
  },
  {
    id: 5,
    name: "Tandoori Chicken",
    description: "Succulent chicken marinated in yogurt and spices, roasted in clay oven",
    price: 380,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300&h=200&fit=crop&crop=center",
    category: "Tandoor",
    rating: 4.7,
    reviews: 1089,
    isVeg: false,
    preparationTime: "30 min",
    calories: 480,
    spiceLevel: 3,
    ingredients: ["Chicken", "Yogurt", "Tandoori Masala", "Ginger-Garlic", "Lemon", "Red Chili"]
  },
  {
    id: 6,
    name: "Chole Bhature",
    description: "Spiced chickpea curry served with fluffy deep-fried bread",
    price: 200,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop&crop=center",
    category: "North Indian",
    rating: 4.4,
    reviews: 634,
    isVeg: true,
    isNew: true,
    preparationTime: "25 min",
    calories: 550,
    spiceLevel: 2,
    ingredients: ["Chickpeas", "Flour", "Onions", "Tomatoes", "Chole Masala", "Coriander"]
  },
  {
    id: 7,
    name: "Malai Kofta",
    description: "Cottage cheese and potato dumplings in rich creamy gravy",
    price: 320,
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop&crop=center",
    category: "Main Course",
    rating: 4.6,
    reviews: 578,
    isVeg: true,
    preparationTime: "30 min",
    calories: 450,
    spiceLevel: 1,
    ingredients: ["Paneer", "Potatoes", "Cashews", "Cream", "Tomatoes", "Garam Masala"]
  },
  {
    id: 8,
    name: "Chicken Tikka",
    description: "Tender marinated chicken pieces grilled to perfection",
    price: 340,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300&h=200&fit=crop&crop=center",
    category: "Tandoor",
    rating: 4.7,
    reviews: 923,
    isVeg: false,
    preparationTime: "25 min",
    calories: 380,
    spiceLevel: 2,
    ingredients: ["Chicken", "Yogurt", "Tikka Masala", "Bell Peppers", "Onions", "Mint"]
  }
];

export default function Menu() {
  const [cart, setCart] = useState<{[key: number]: number}>({});



  const addToCart = (itemId: number) => {
    setCart(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const removeFromCart = (itemId: number) => {
    setCart(prev => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0)
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-100 font-sans">
      {/* Independent Header Section with Food Background */}
      <div className="py-12 px-6 relative overflow-hidden">
        {/* Background Food Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&h=600&fit=crop&crop=center" 
            alt="Delicious Food Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Professional Header Section */}
          <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6 shadow-2xl backdrop-blur-sm border border-white/20 font-sans">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Premium Culinary Experience
          </div>
          <h1 className="text-6xl font-bold text-white mb-6 drop-shadow-2xl font-sans">
            Gourmet Menu Collection
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-sans">
            Explore our expertly curated selection of authentic dishes, crafted with premium ingredients and traditional techniques
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
            <div className="bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700 rounded-xl p-6 text-white shadow-xl">
              <div className="text-3xl font-bold font-sans">50+</div>
              <div className="text-emerald-100 font-sans">Signature Dishes</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 rounded-xl p-6 text-white shadow-xl">
              <div className="text-3xl font-bold font-sans">4.8★</div>
              <div className="text-blue-100 font-sans">Average Rating</div>
            </div>
            <div className="bg-gradient-to-br from-rose-500 via-pink-600 to-red-700 rounded-xl p-6 text-white shadow-xl">
              <div className="text-3xl font-bold font-sans">15k+</div>
              <div className="text-rose-100 font-sans">Happy Customers</div>
            </div>
            <div className="bg-gradient-to-br from-amber-500 via-orange-600 to-red-700 rounded-xl p-6 text-white shadow-xl">
              <div className="text-3xl font-bold font-sans">25 min</div>
              <div className="text-amber-100 font-sans">Avg Prep Time</div>
            </div>
          </div>
        </div>

        {/* Advanced Search & Filter Section */}
        

        </div>
      </div>

      {/* Independent Menu Cards Section */}
      <div className="px-2 pb-12 pt-12">
        {/* Professional Menu Items Grid - 4 cards per row - Left aligned */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-start max-w-full">
            {menuItems.map((item, index) => {
            // Create diverse gradient colors for each card
            const gradientClasses = [
              "bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700",
              "bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700",
              "bg-gradient-to-br from-rose-500 via-pink-600 to-red-700",
              "bg-gradient-to-br from-amber-500 via-orange-600 to-red-700",
              "bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-700",
              "bg-gradient-to-br from-green-500 via-emerald-600 to-teal-700",
              "bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700",
              "bg-gradient-to-br from-slate-500 via-gray-600 to-zinc-700"
            ];
            const gradientClass = gradientClasses[index % gradientClasses.length];
            
            return (
            <div
              key={item.id}
              className={`group relative ${gradientClass} rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden`}
            >
              {/* Badges - Left side with proper spacing */}
              <div className="absolute top-4 left-4 z-10 flex flex-col gap-2 max-w-[60%]">
                {item.isPopular && (
                  <span className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold font-sans shadow-lg">
                    🔥 POPULAR
                  </span>
                )}
                {item.isNew && (
                  <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold font-sans shadow-lg">
                    ✨ NEW
                  </span>
                )}
                {item.originalPrice && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold font-sans shadow-lg">
                    💰 OFFER
                  </span>
                )}
              </div>

              {/* Card Content */}
              <div className="p-4">
                {/* Full-Width Food Image - Larger */}
                <div className="relative h-56 mb-3 -mx-4 -mt-4 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://via.placeholder.com/400x300/4ade80/ffffff?text=${encodeURIComponent(item.name)}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                  
                  {/* Category Badge on Image */}
                  <div className="absolute bottom-3 left-3">
                    <span className="text-xs font-medium font-sans text-white bg-white/25 backdrop-blur-md px-3 py-1 rounded-full border border-white/40 shadow-lg">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Title & Description - Minimal spacing */}
                <h3 className="text-2xl font-bold font-sans text-white mb-0 drop-shadow-lg">
                  {item.name}
                </h3>
                <p className="text-white/90 mb-2 text-base leading-relaxed line-clamp-2 drop-shadow font-sans">
                  {item.description}
                </p>

                {/* Key Info Grid - Larger text */}
                <div className="grid grid-cols-3 gap-3 mb-2 text-center">
                  <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg p-3">
                    <div className="text-sm text-white/80 mb-1 font-sans">⏱️ Time</div>
                    <div className="font-semibold font-sans text-white text-base drop-shadow">{item.preparationTime}</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg p-3">
                    <div className="text-sm text-white/80 mb-1 font-sans">🔥 Calories</div>
                    <div className="font-semibold font-sans text-white text-base drop-shadow">{item.calories}</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg p-3">
                    <div className="text-sm text-white/80 mb-1 font-sans">🌶️ Spice</div>
                    <div className="font-semibold font-sans text-white text-base drop-shadow">
                      {"🌶".repeat(item.spiceLevel)}
                    </div>
                  </div>
                </div>

                {/* Rating & Reviews - Larger text */}
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-300 text-xl drop-shadow">★</span>
                      <span className="font-bold font-sans text-white text-lg drop-shadow">{item.rating}</span>
                    </div>
                    <span className="text-white/80 text-base font-sans">({item.reviews.toLocaleString()})</span>
                  </div>
                  
                  {/* Price */}
                  <div className="text-right">
                    {item.originalPrice && (
                      <div className="text-base text-white/60 line-through font-sans">₹{item.originalPrice}</div>
                    )}
                    <div className="text-3xl font-bold font-sans text-white drop-shadow-lg">
                      ₹{item.price}
                    </div>
                  </div>
                </div>

                {/* Ingredients Preview - Larger text */}
                <div className="mb-4">
                  <div className="text-sm text-white/90 mb-2 font-medium drop-shadow font-sans">Key Ingredients:</div>
                  <div className="flex flex-wrap gap-2">
                    {item.ingredients.slice(0, 3).map((ingredient, index) => (
                      <span
                        key={index}
                        className="bg-white/25 backdrop-blur-sm border border-white/40 text-white px-3 py-1 rounded-full text-sm font-medium font-sans"
                      >
                        {ingredient}
                      </span>
                    ))}
                    {item.ingredients.length > 3 && (
                      <span className="bg-white/20 backdrop-blur-sm border border-white/30 text-white/80 px-3 py-1 rounded-full text-sm font-sans">
                        +{item.ingredients.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Add to Cart Section - Larger buttons and text */}
                <div className="border-t border-white/30 pt-4">
                  {cart[item.id] > 0 ? (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="w-10 h-10 bg-white/25 backdrop-blur-sm border border-white/40 text-white rounded-full flex items-center justify-center hover:bg-white/35 transition-all duration-300 shadow-lg font-bold font-sans text-lg"
                        >
                          −
                        </button>
                        <span className="font-bold font-sans text-lg text-white min-w-[2rem] text-center drop-shadow">
                          {cart[item.id]}
                        </span>
                        <button
                          onClick={() => addToCart(item.id)}
                          className="w-10 h-10 bg-white/25 backdrop-blur-sm border border-white/40 text-white rounded-full flex items-center justify-center hover:bg-white/35 transition-all duration-300 shadow-lg font-bold font-sans text-lg"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-base text-white/90 font-medium drop-shadow font-sans">
                        Total: ₹{(cart[item.id] * item.price).toLocaleString()}
                      </span>
                    </div>
                  ) : (
                    <button
                      onClick={() => addToCart(item.id)}
                      className="w-full bg-white/25 backdrop-blur-sm border border-white/40 text-white py-3 px-6 rounded-xl hover:bg-white/35 transition-all duration-300 font-semibold font-sans shadow-lg hover:shadow-xl transform hover:scale-[1.02] text-base"
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
            );
          })}
        </div>



        {/* Enhanced Cart Summary */}
        {Object.values(cart).some(qty => qty > 0) && (
          <div className="fixed bottom-6 right-6 bg-white/95 backdrop-blur-xl rounded-2xl border border-gray-200/50 shadow-2xl z-50 min-w-[320px] max-w-[400px]">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold font-sans text-gray-900 flex items-center gap-2">
                  🛒 Cart Summary
                </h3>
                <span className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-3 py-1 rounded-full text-sm font-bold font-sans">
                  {Object.values(cart).reduce((sum, qty) => sum + qty, 0)} items
                </span>
              </div>
              
              {/* Cart Items Preview */}
              <div className="space-y-3 mb-4 max-h-48 overflow-y-auto">
                {Object.entries(cart).filter(([_, qty]) => qty > 0).map(([itemId, quantity]) => {
                  const item = menuItems.find(m => m.id === parseInt(itemId));
                  if (!item) return null;
                  
                  return (
                    <div key={itemId} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{item.image}</span>
                        <div>
                          <div className="font-semibold font-sans text-gray-900 text-sm">{item.name}</div>
                          <div className="text-gray-600 text-xs font-sans">₹{item.price} × {quantity}</div>
                        </div>
                      </div>
                      <div className="font-bold font-sans text-emerald-600">
                        ₹{(item.price * quantity).toLocaleString()}
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Total */}
              <div className="border-t border-gray-200 pt-4 mb-4">
                <div className="flex items-center justify-between text-lg font-bold">
                  <span className="text-gray-900 font-sans">Total Amount:</span>
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent font-sans">
                    ₹{Object.entries(cart).reduce((total, [itemId, qty]) => {
                      const item = menuItems.find(m => m.id === parseInt(itemId));
                      return total + (item ? item.price * qty : 0);
                    }, 0).toLocaleString()}
                  </span>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-3 px-6 rounded-xl hover:from-emerald-500 hover:to-teal-600 transition-all duration-300 font-semibold font-sans shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
                  Proceed to Checkout
                </button>
                <button 
                  onClick={() => setCart({})}
                  className="w-full bg-gray-100 text-gray-700 py-2 px-6 rounded-xl hover:bg-gray-200 transition-all duration-300 text-sm font-sans"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Independent Professional Footer Section */}
      <div className="px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="mt-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-2xl p-12 text-white">
            <div className="text-center">
              <h2 className="text-3xl font-bold font-sans mb-4">Can't Find What You're Looking For?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto font-sans">
                Our chefs are happy to customize dishes according to your preferences. Contact us for special requests and dietary accommodations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-8 py-3 rounded-xl hover:from-emerald-500 hover:to-teal-600 transition-all duration-300 font-semibold font-sans shadow-lg">
                  Custom Order
                </button>
                <button className="border border-gray-400 text-gray-300 px-8 py-3 rounded-xl hover:bg-white/10 transition-all duration-300 font-semibold font-sans">
                  Contact Chef
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}