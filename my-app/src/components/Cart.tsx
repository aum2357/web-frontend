"use client";

import { useState } from "react";

interface CartItem {
  id: number;
  name: string;
  restaurant: string;
  price: number;
  quantity: number;
  image: string;
  customizations?: string[];
}

const initialCartItems: CartItem[] = [
  {
    id: 1,
    name: "Butter Chicken",
    restaurant: "Spice Garden",
    price: 350,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=300&h=200&fit=crop&crop=center",
    customizations: ["Extra spicy", "No onions"]
  },
  {
    id: 2,
    name: "Garlic Naan",
    restaurant: "Spice Garden",
    price: 60,
    quantity: 4,
    image: "https://images.unsplash.com/photo-1628294895950-9805252327bc?w=300&h=200&fit=crop&crop=center",
    customizations: ["Extra garlic", "Butter topped", "Fresh baked"]
  },
  {
    id: 3,
    name: "Margherita Pizza",
    restaurant: "Pizza Palace",
    price: 280,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=300&h=200&fit=crop&crop=center",
    customizations: ["Extra cheese", "Thin crust"]
  },
  {
    id: 4,
    name: "Chicken Biryani",
    restaurant: "Spice Garden",
    price: 420,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300&h=200&fit=crop&crop=center",
    customizations: ["Medium spicy"]
  }
];

export default function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<{code: string, discount: number} | null>(null);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const applyPromoCode = () => {
    const validPromos = {
      "SAVE20": 20,
      "FIRST10": 10,
      "WELCOME50": 50
    };
    
    const discount = validPromos[promoCode as keyof typeof validPromos];
    if (discount) {
      setAppliedPromo({ code: promoCode, discount });
      setPromoCode("");
    } else {
      alert("Invalid promo code");
    }
  };

  const removePromo = () => {
    setAppliedPromo(null);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = subtotal > 300 ? 0 : 30;
  const taxes = Math.round(subtotal * 0.05); // 5% tax
  const promoDiscount = appliedPromo ? appliedPromo.discount : 0;
  const total = subtotal + deliveryFee + taxes - promoDiscount;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 font-sans">
      {/* Header Section with Food Background */}
      <div className="py-16 px-6 relative overflow-hidden min-h-[400px]">
        {/* Beautiful Gradient Background Matching Theme */}
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
                Shopping Experience
              </div>
            <h1 className="text-4xl font-bold font-sans text-white mb-4 drop-shadow-2xl">
              Shopping Cart
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed drop-shadow-lg font-sans">
              Review and customize your order before checkout
            </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="px-2 pb-12 pt-12">
        <div className="max-w-7xl mx-auto">

        {cartItems.length === 0 ? (
          // Empty Cart
          <div className="text-center py-16">
            <div className="text-6xl mb-6">🛒</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Add some delicious items to get started!</p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300">
              Browse Menu
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              <div className="relative bg-gradient-to-br from-white/98 via-blue-50/30 to-purple-50/40 backdrop-blur-xl rounded-3xl p-8 border border-white/60 shadow-2xl overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-200/20 to-pink-200/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-200/20 to-purple-200/20 rounded-full blur-lg"></div>
                <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-br from-yellow-200/15 to-orange-200/15 rounded-full blur-lg"></div>
                
                {/* Header with Enhanced Styling */}
                <div className="relative z-10 flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent font-sans">Cart Items</h2>
                      <p className="text-gray-600 text-sm font-medium">Your delicious selections</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-6 py-3 rounded-2xl text-sm font-bold font-sans shadow-lg transform hover:scale-105 transition-all duration-300">
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                      </svg>
                      {cartItems.length} items
                    </span>
                  </div>
                </div>

                <div className="relative z-10 space-y-5 max-h-96 overflow-y-auto pr-3 scrollbar-thin scrollbar-thumb-gradient scrollbar-track-transparent hover:scrollbar-thumb-gray-400">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="group relative bg-gradient-to-br from-white/95 via-blue-50/20 to-purple-50/30 rounded-2xl p-5 border border-white/70 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1 backdrop-blur-sm overflow-hidden"
                    >
                      {/* Decorative Corner Elements */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-200/10 to-pink-200/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-200/10 to-purple-200/10 rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="relative z-10 flex items-center gap-5">
                        {/* Item Image */}
                        <div className="relative w-24 h-24 rounded-2xl overflow-hidden shadow-2xl ring-2 ring-white/50 group-hover:ring-orange-200/60 transition-all duration-300">
                          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        {/* Item Details */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div className="space-y-2">
                              <h3 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent font-sans group-hover:from-orange-600 group-hover:to-red-600 transition-all duration-300">{item.name}</h3>
                              <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                                </svg>
                                <p className="text-gray-600 text-sm font-medium font-sans">from {item.restaurant}</p>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-sans">₹{item.price}</span>
                                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">Fresh</span>
                              </div>
                            </div>
                            
                            {/* Remove Button */}
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-all duration-300"
                              title="Remove item"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>

                          {/* Customizations */}
                          {item.customizations && item.customizations.length > 0 && (
                            <div className="mt-4 mb-2">
                              <div className="flex items-center gap-2 text-sm text-gray-600 font-medium mb-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                </svg>
                                Customizations:
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {item.customizations.map((custom, index) => (
                                  <span
                                    key={index}
                                    className="px-3 py-2 bg-gradient-to-r from-orange-100 via-yellow-50 to-orange-100 text-orange-700 text-sm rounded-full font-semibold font-sans border border-orange-200/70 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                                  >
                                    ✨ {custom}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Quantity Controls & Price */}
                          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                            <div className="flex items-center gap-3 bg-gradient-to-r from-gray-50 to-white rounded-2xl p-2 border border-gray-200/50 shadow-inner">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl flex items-center justify-center hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M20 12H4"/>
                                </svg>
                              </button>
                              <div className="bg-white rounded-lg px-4 py-2 border border-gray-200 shadow-sm">
                                <span className="font-bold text-gray-800 text-lg">{item.quantity}</span>
                              </div>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl flex items-center justify-center hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4"/>
                                </svg>
                              </button>
                            </div>

                            {/* Price */}
                            <div className="text-right bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl px-4 py-3 border border-blue-100">
                              <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">₹{item.price * item.quantity}</div>
                              <div className="text-xs text-gray-500 font-medium">₹{item.price} each</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Suggested Items */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">You might also like</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { name: "Chicken Tikka", price: 320, image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=200&fit=crop&crop=center" },
                      { name: "Basmati Rice", price: 120, image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=200&fit=crop&crop=center" },
                      { name: "Gulab Jamun", price: 80, image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop&crop=center" }
                    ].map((item, index) => (
                      <div key={index} className="bg-white rounded-lg p-4 text-center border border-gray-200 hover:shadow-md transition-shadow duration-300">
                        <div className="w-full h-32 mb-3 rounded-lg overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <h4 className="font-semibold text-gray-900 text-sm">{item.name}</h4>
                        <div className="text-blue-600 font-bold text-sm mb-2">₹{item.price}</div>
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                          Add +
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              {/* Promo Code */}
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Promo Code</h3>
                
                {appliedPromo ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-green-700 font-semibold">{appliedPromo.code}</span>
                        <div className="text-green-600 text-sm">₹{appliedPromo.discount} discount applied</div>
                      </div>
                      <button
                        onClick={removePromo}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button
                      onClick={applyPromoCode}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                )}
                
                <div className="mt-4 text-sm text-gray-500">
                  Try: SAVE20, FIRST10, WELCOME50
                </div>
              </div>

              {/* Order Summary */}
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Delivery Fee</span>
                    <span>{deliveryFee === 0 ? "Free" : `₹${deliveryFee}`}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Taxes & Fees</span>
                    <span>₹{taxes}</span>
                  </div>
                  {appliedPromo && (
                    <div className="flex justify-between text-green-600">
                      <span>Promo Discount</span>
                      <span>-₹{promoDiscount}</span>
                    </div>
                  )}
                  <hr className="border-gray-300" />
                  <div className="flex justify-between text-lg font-bold text-gray-900">
                    <span>Total</span>
                    <span>₹{total}</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 mt-6">
                  Proceed to Checkout
                </button>

                <div className="text-center mt-4">
                  <div className="text-sm text-gray-500">
                    {deliveryFee > 0 && `Add ₹${300 - subtotal} more for free delivery`}
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mt-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Secure checkout
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>

      {/* Professional Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                FoodieCart
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Experience the finest dining with our premium food delivery service. Quality guaranteed, satisfaction promised.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-100">Quick Links</h4>
              <div className="space-y-2">
                {['Menu', 'Offers', 'Track Order', 'Help'].map((link) => (
                  <a key={link} href="#" className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Customer Care */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-100">Customer Care</h4>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>📞 +91 98765 43210</p>
                <p>✉️ support@foodiecart.com</p>
                <p>🕐 24/7 Support Available</p>
              </div>
            </div>

            {/* Secure & Trusted */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-100">Secure & Trusted</h4>
              <div className="flex items-center gap-4">
                <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs">
                  SSL Secured
                </div>
                <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs">
                  100% Safe
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
            <p>&copy; 2024 FoodieCart. All rights reserved. | Premium Food Delivery Experience</p>
          </div>
        </div>
      </footer>
    </div>
  );
}